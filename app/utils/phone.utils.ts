const phoneRegex = /^((?:\+\d{2})|(?:0))(\d{9})$/
const phoneIndicatorFrance = '+33'

/* Todo : Commentaire étoffé, mentionner que le retour est sans indicateur */
export const getIntlPhoneNumber = (input: string) => {
	const match = input.replaceAll(' ', '').match(phoneRegex)

	console.log(match)

	if (!match) {
		return null
	}

	const phoneCore = match.at(2)

	return phoneCore
}

export const formatPhoneNumber = (input: string, format: 'fr' | 'intl') => {
	const coreNumber = getIntlPhoneNumber(input)
	if (!coreNumber) {
		return null
	}
	const normalized = `${phoneIndicatorFrance}${coreNumber}`
	const splitedNumber = coreNumber?.split('')
	const formatedIntlNumber = splitedNumber
		.map((digit, index) => (index % 2 === 0 ? digit : ` ${digit}`))
		.join('')

	switch (format) {
		case 'fr': {
			return { normalized, formated: `0${formatedIntlNumber}` }
		}
		default: {
			return {
				normalized,
				formated: `${phoneIndicatorFrance} ${formatedIntlNumber}`,
			}
		}
	}
}
