import * as MaterialIcons from '@mui/icons-material'
import { SvgIconProps } from '@mui/material/SvgIcon'
import { FC } from 'react'

import { TypeMaterialIconName } from '@/shared/types/icon.types'

export const MaterialIcon: FC<
	{ name: TypeMaterialIconName } & SvgIconProps
> = ({ name, ...props }) => {
	const IconComponent = MaterialIcons[name]

	return <IconComponent {...props} /> || <MaterialIcons.QuestionMark />
}
