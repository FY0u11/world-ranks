import Head from 'next/head'
import styles from './Layout.module.css'
import Link from 'next/link'
import { Brightness6Rounded } from '@material-ui/icons'
import { useState } from 'react'

const Layout = ({ children, title = 'World Ranks | Home' }) => {
    const [theme, setTheme] = useState('light')

    const switchTheme = () => {
        if (theme === 'light') {
            setTheme('dark')
            document.documentElement.setAttribute('data-theme', 'dark')
        } else {
            setTheme('light')
            document.documentElement.setAttribute('data-theme', 'light')
        }
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>{title}</title>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap" rel="stylesheet" />
            </Head>
            <header className={styles.header}>
                <Link href="/">
                    <div className={styles.logo} />
                </Link>
                <Brightness6Rounded className={styles.theme_switcher} onClick={switchTheme} />
            </header>
            <main className={styles.main}>
                {children}
            </main>
            <footer className={styles.footer}>
                <span>Sergey Strigin @ darkauron1997@gmail.com</span>
            </footer>
        </div>
    )
}

export default Layout
