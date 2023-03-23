import { FC } from "react"
import { Link } from "react-router-dom"

import { onScrollTop } from "../../../../utils/onScrollTop"

import styles from "./Footer.module.scss"

const UsefulLinks: FC = () => {
  return (
    <ul className={styles.links}>
      <li>
        <h4>Useful links</h4>
      </li>
      <li className="footer__list-item">
        <Link onClick={onScrollTop} to="/">
          Home
        </Link>
      </li>
      <li className="footer__list-item">
        <Link onClick={onScrollTop} to="/about">
          About
        </Link>
      </li>
      <li className="footer__list-item">
        <Link onClick={onScrollTop} to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  )
}

export default UsefulLinks
