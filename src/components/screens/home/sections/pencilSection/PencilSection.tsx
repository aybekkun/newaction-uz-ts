import { FC } from 'react'
import styles from './PencilSection.module.scss'
import pencilImg from "./pencil.jpg";
const PencilSection: FC = () => { 
 return <div className={styles.root} style={{backgroundImage:`url(${pencilImg})`}}></div>
}

export default PencilSection