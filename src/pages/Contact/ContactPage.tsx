import { FC } from "react"

import SocialLinks from "../../components/layout/MainLayout/Footer/SocialLinks"
import Container from "../../components/ui/container/Container"
import H2 from "../../components/ui/heading/H2"
import H3 from "../../components/ui/heading/H3"
import H4 from "../../components/ui/heading/H4"
import P from "../../components/ui/heading/P"
import SEO from "../../utils/seo/SEO"

import styles from "./Contact.module.scss"

const ContactPage: FC = () => {
  return (
    <Container className={styles.root}>
      <SEO
        title="Contact"
        description="Headquaters
New Castle o'quv markazi 1 26-mikrorayon filiallari

Phone
📞 55 101 70 70 | 🕓 9:00-18:00.

E-mail
newaction.lc@gmail.com

Social"
      />
      <div className={styles.left}>
        <H3>ANY PROBLEMS?</H3>
        <H2>Contact us</H2>
        <H4>Headquaters</H4>
        <P>New Castle o'quv markazi 1 26-mikrorayon filiallari</P>
        <H4>Phone</H4>
        <P>📞 55 101 70 70 | 🕓 9:00-18:00.</P>
        <H4>E-mail</H4>
        <P>newaction.lc@gmail.com</P>
        <H4>Social</H4>
        <SocialLinks className={styles.social} />
      </div>
      <div className={styles.right}>
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d5885.915712641441!2d59.585696!3d42.471185!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDLCsDI4JzE2LjMiTiA1OcKwMzUnMDguNSJF!5e0!3m2!1sru!2s!4v1675404078879!5m2!1sru!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </Container>
  )
}

export default ContactPage
