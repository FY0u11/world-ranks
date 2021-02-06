import Layout from '../components/Layout/Layout'
import styles from '../styles/404.module.css'

const NotFoundPage = () => {
  return (
    <Layout title="Not Found">
      <div className={styles.not_found}>Page not found</div>
    </Layout>
  )
}

export default NotFoundPage
