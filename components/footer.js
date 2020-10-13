import Link from 'next/link'
import styles from './footer.module.css'
// import { version } from '../package.json'

export default function Footer () {
  return (
    <footer className={styles.footer}>
      Made with <span style={{ marginRight: '0.3rem' }}>❤️</span> and hard work by: <a style={{ color: 'red', fontWeight: 600, textDecoration: 'underline' }} href='https://bobbybytez.io'>Bobby Hall Jr</a>
      {/* <ul className={styles.navItems}>
        <li className={styles.navItem}><a href="https://next-auth.js.org">Documentation</a></li>
        <li className={styles.navItem}><a href="https://www.npmjs.com/package/next-auth">NPM</a></li>
        <li className={styles.navItem}><a href="https://github.com/nextauthjs/next-auth-example">GitHub</a></li>
        <li className={styles.navItem}><Link href="/policy"><a>Policy</a></Link></li>
      </ul> */}
    </footer>
  )
}