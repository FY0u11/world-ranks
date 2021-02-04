import styles from './CountryDetail.module.css'

const CountryDetail = ({ title, children }) => {
    return (
        <div className={styles.row}>
            <div className={styles.row_title}>{title}</div>
            <div className={styles.row_content}>{children}</div>
        </div>
    )
}

export default CountryDetail
