import { FC } from 'react'
import { Helmet } from 'react-helmet-async'
import { titleMerge } from '../../configs/seo.configs'


export const MetaNoIndex: FC<{ title?: string }> = ({ title = 'Error' }) => {
	return (
		<Helmet>
			<title>{titleMerge(title)}</title>
			<meta name='robots' content='noindex, nofollow' />
		</Helmet>
	)
}
