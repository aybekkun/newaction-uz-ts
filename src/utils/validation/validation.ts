const REQUIRED_FIELD = "Toldirish shart!"

export const nameValidation = {
	required: REQUIRED_FIELD,
	validate: (value: string) => {
		if (value.match(/^\d+$/)) {
			return "Cifr kiritilmasin"
		}
		if (value.match(/[а-яА-Я]/)) {
			return "Lotin hariflarida yozing"
		}
		if (value.length < 3) {
			return "Minimal 3 harf"
		}
		return true
	},
}

export const phoneValidation = {
	required: REQUIRED_FIELD,
	validate: (value: string) => {
		if (value.length < 13) {
			return "+998 99 999 00 00 formatta bolishi shart"
		}

		return true
	},
}

export const passwordValidation = {
	required: REQUIRED_FIELD,
	validate: (value: string) => {
		if (value.length < 8) {
			return "Parol 8 simvoldan kam bolmasin"
		}
		if (value.includes(" ")) {
			return "Parolda probel bolmasin"
		}

		return true
	},
}
