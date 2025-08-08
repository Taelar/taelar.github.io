const phoneRegex = /^((?:\+\d{2})|(?:0))(\d{9})$/
const phoneIndicatorFrance = '+33'
/**
 * Extrait le numéro de téléphone au format international sans indicatif.
 *
 * Cette fonction prend en entrée une chaîne représentant un numéro de téléphone,
 * qui peut commencer par l'indicatif internationnal ou "0" et contenir ou non des espaces.
 * Elle retourne uniquement la partie "noyau" du numéro (9 chiffres), sans l'indicatif pays.
 *
 * Exemples :
 *   "+33612345678" => "612345678"
 *   "0612345678"   => "612345678"
 *   "06 12 34 56 78" => "612345678"
 *
 * Retourne null si le format du numéro est invalide.
 *
 * @param input Le numéro de téléphone à traiter.
 * @returns Le numéro sans indicatif pays (9 chiffres) ou null si invalide.
 */
export const getIntlPhoneNumber = (input: string) => {
	if (!input) {
		return null
	}

	const match = input.replaceAll(' ', '').match(phoneRegex)

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
