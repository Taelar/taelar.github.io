import { useContext, useEffect, useMemo, useState, type FC } from 'react'
import classNames from 'classnames/bind'
import styles from './ContactSection.module.scss'
import { Section } from '../Section'
import { SocialLink } from '../SocialLink'
import { LocalStorageKeys } from '~/model/localStorage'
import { formatPhoneNumber } from '~/utils/phone'
import { LangContext } from '~/context/Lang.context'

const cx = classNames.bind(styles)

/* 
  Pour éviter d'exposer un numéro de téléphone et une adresse email privée aux web scrappers
    mais tout de même permettre le rendu du CV via l'impression navigateur, on stocke ces informations
    dans le local storage pour les lire une fois le code exécuté côté client.
  La limitation principale est qu'un utilisateur légitime non averti ne verra pas ces informations,
    cette limitation est considérée acceptable puisque les personnes véritablements intéressées par
    ces informations devraient déjà avoir la version PDF les contenant.
    
  Source : https://github.com/facebook/react/issues/25627#issuecomment-1444073227
*/
export const ContactSection: FC = () => {
	const [isClientSide, setisClientSide] = useState(false)
	const { langKey } = useContext(LangContext)

	useEffect(() => {
		setisClientSide(true)
	}, [])

	const emailAddress = useMemo(() => {
		if (!isClientSide) return null

		return window.localStorage.getItem(LocalStorageKeys.email)
	}, [isClientSide])

	const phone = useMemo(() => {
		if (!isClientSide) return null

		const storedPhone = window.localStorage.getItem(LocalStorageKeys.phone)
		if (!storedPhone) return null

		return formatPhoneNumber(storedPhone, langKey === 'fr' ? 'fr' : 'intl')
	}, [isClientSide, langKey])

	return (
		<Section title="Contact">
			<div className={cx('contactLine')} suppressHydrationWarning>
				{emailAddress && (
					<SocialLink
						icon="email"
						label={emailAddress}
						link={`mailto:${emailAddress}`}
					/>
				)}
				{phone && (
					<SocialLink
						icon="phone"
						label={phone.formated}
						link={`tel:${phone.normalized}`}
					/>
				)}
				<SocialLink
					icon="linkedin"
					label="Thomas Esseul"
					link="https://www.linkedin.com/in/thomas-esseul-4830a4153/"
				/>
				<SocialLink
					icon="githubCircle"
					label="Taelar"
					link="https://github.com/Taelar"
				/>
				<SocialLink
					icon="website"
					label="taelar.github.io"
					link="https://taelar.github.io/"
				/>
			</div>
		</Section>
	)
}
