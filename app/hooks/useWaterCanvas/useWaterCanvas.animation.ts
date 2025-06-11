import * as THREE from 'three'
import {
	renderFragmentShader,
	renderVertexShader,
	simulationFragmentShader,
	simulationVertexShader,
} from './useWaterCanvas.shaders'
import styles from './useWaterCanvas.module.scss'

type BoundedCoordCallback = (
	width: number,
	height: number,
) => { x: number; y: number }

export const initWaterCanvas = () => {
	if (!document) return

	const scene = new THREE.Scene()
	const simScene = new THREE.Scene()

	const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)

	const renderer = new THREE.WebGLRenderer({
		antialias: true,
		alpha: true,
		preserveDrawingBuffer: true,
	})
	renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
	renderer.setSize(window.innerWidth, document.body.scrollHeight)
	renderer.domElement.className = styles['waterCanvas']

	document.body.appendChild(renderer.domElement)

	const mouse = new THREE.Vector2()
	let frame = 0

	const width = window.innerWidth * window.devicePixelRatio
	const height = document.body.scrollHeight * window.devicePixelRatio

	const options: THREE.RenderTargetOptions = {
		format: THREE.RGBAFormat,
		type: THREE.FloatType,
		minFilter: THREE.LinearFilter,
		magFilter: THREE.LinearFilter,
		stencilBuffer: false,
		depthBuffer: false,
	}

	let rtA = new THREE.WebGLRenderTarget(width, height, options)
	let rtB = new THREE.WebGLRenderTarget(width, height, options)

	const simMaterial = new THREE.ShaderMaterial({
		uniforms: {
			textureA: { value: null },
			mouse: { value: mouse },
			resolution: { value: new THREE.Vector2(width, height) },
			time: { value: 0 },
			frame: { value: 0 },
		},
		vertexShader: simulationVertexShader,
		fragmentShader: simulationFragmentShader,
	})

	const renderMaterial = new THREE.ShaderMaterial({
		uniforms: {
			textureA: { value: null },
			textureB: { value: null },
		},
		vertexShader: renderVertexShader,
		fragmentShader: renderFragmentShader,
		transparent: true,
	})

	const plane = new THREE.PlaneGeometry(2, 2)
	const simQuad = new THREE.Mesh(plane, simMaterial)
	const renderQuad = new THREE.Mesh(plane, renderMaterial)

	simScene.add(simQuad)
	scene.add(renderQuad)

	const canvas = document.createElement('canvas')
	canvas.width = width
	canvas.height = height
	const ctx = canvas.getContext('2d', { alpha: true })

	if (!ctx) return

	ctx.imageSmoothingEnabled = true
	ctx.imageSmoothingQuality = 'high'

	window.addEventListener('resize', () => {
		const newWidth = window.innerWidth * window.devicePixelRatio
		const newHeight = document.body.scrollHeight * window.devicePixelRatio

		renderer.setSize(window.innerWidth, document.body.scrollHeight)
		rtA.setSize(newWidth, newHeight)
		rtB.setSize(newWidth, newHeight)
		simMaterial.uniforms.resolution.value.set(newWidth, newHeight)

		canvas.width = newWidth
		canvas.height = newHeight
	})

	const renderWaterRipple = (callback: BoundedCoordCallback) => {
		const { x, y } = callback(canvas.width, canvas.height)
		mouse.x = x
		mouse.y = y
	}

	const endWaterRippleRendering = () => {
		mouse.x = 0
		mouse.y = 0
	}

	renderer.domElement.addEventListener('mousedown', (event) => {
		const x = event.clientX * window.devicePixelRatio
		const y =
			(document.body.scrollHeight - event.clientY - window.scrollY) *
			window.devicePixelRatio

		renderWaterRipple(() => ({ x, y }))
	})
	renderer.domElement.addEventListener('mouseup', endWaterRippleRendering)

	const animate = () => {
		simMaterial.uniforms.frame.value = frame++
		simMaterial.uniforms.time.value = performance.now() / 1000

		simMaterial.uniforms.textureA.value = rtA.texture
		renderer.setRenderTarget(rtB)
		renderer.render(simScene, camera)

		renderMaterial.uniforms.textureA.value = rtB.texture
		renderMaterial.uniforms.textureB.value = rtB.texture
		renderer.setRenderTarget(null)
		renderer.render(scene, camera)

		const temp = rtA
		rtA = rtB
		rtB = temp

		requestAnimationFrame(animate)
	}

	animate()

	const destroy = () => {
		renderer.domElement.remove()
	}

	return { renderWaterRipple, endWaterRippleRendering, destroy }
}
