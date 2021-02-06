import { ReactNode } from 'react'
import styles from './CountryDetail.module.css'

interface ICountryDetailProps {
  title: string
  children: ReactNode
}

const CountryDetail = ({ title, children }: ICountryDetailProps) => {
  return (
    <div className={styles.row}>
      <div className={styles.row_title}>{title}</div>
      <div className={styles.row_content}>{children}</div>
    </div>
  )
}

export default CountryDetail
