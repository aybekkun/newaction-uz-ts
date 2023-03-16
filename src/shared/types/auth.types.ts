export interface IAuthInput {
	phone: string
	password: string
}

export interface ISignInput extends IAuthInput {
	name: string
}
