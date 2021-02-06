import { CountryType } from '../../types'
import styles from './CountryCard.module.css'

interface ICountryCardProps {
  country: CountryType
}

const CountryCard = ({ country }: ICountryCardProps) => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.flag} src={country.flag} alt={country.name} />
      <h1 className={styles.country_name}>{country.name}</h1>
      <div className={styles.region}>{country.region}</div>
      <div className={styles.info}>
        <div>
          <div className={styles.info_data}>
            {country.population.toLocaleString()}
          </div>
          <div className={styles.info_label}>Population</div>
        </div>
        <div>
          <div className={styles.info_data}>
            {country.area?.toLocaleString()}
          </div>
          <div className={styles.info_label}>Area (km)</div>
        </div>
      </div>
    </div>
  )
}

export default CountryCard
