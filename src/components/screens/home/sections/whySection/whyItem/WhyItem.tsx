import { FC } from 'react'
import { TypeMaterialIconName } from '../../../../../../shared/types/icon.types'
import { MaterialIcon } from '../../../../../ui/icons/MaterialIcon'



import styles from './WhyItem.module.scss'

type WhyItemProps = {
	icon: TypeMaterialIconName
	title: string
	description: string
}

const WhyItem: FC<WhyItemProps> = ({ description, title, icon }) => {
	return (
		<div className={styles.root}>
			<span>
				<MaterialIcon sx={{color:"#fff"}} name={icon} />
			</span>
			<h4>{title}</h4>
			<p>{description}</p>
		</div>
	)
}

export default WhyItem
