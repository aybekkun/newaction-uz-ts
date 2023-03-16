import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface IHeading
	extends DetailedHTMLProps<
		HTMLAttributes<HTMLHeadingElement>,
		HTMLHeadingElement
	> {
	mb?: 1 | 2 | 3
}

export interface IText
	extends DetailedHTMLProps<
		HTMLAttributes<HTMLParagraphElement>,
		HTMLParagraphElement
	> {
	mb?: 1 | 2 | 3
}
