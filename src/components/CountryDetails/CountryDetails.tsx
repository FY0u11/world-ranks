import CountryDetail from './CountryDetail/CountryDetail'
import { CountryType } from '../../types'
import CustomRange from '../CustomRange/CustomRange'
import Neighbours from './Neighbours/Neighbours'
import styles from './CountryDetails.module.css'

interface ICountryDetailsProps {
  country: CountryType
  neighbours: Array<CountryType | undefined>
}

const CountryDetails = ({ country, neighbours }: ICountryDetailsProps) => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.heading}>Details</h1>
      <CountryDetail title="Capital">{country.capital}</CountryDetail>
      <CountryDetail title="Subregion">{country.subregion}</CountryDetail>
      <CountryDetail title="Languages">
        {country.languages.map((language, i) => (
          <div key={i}>{language.name}</div>
        ))}
      </CountryDetail>
      <CountryDetail title="Currencies">
        {country.currencies.map((currency, i) => {
          return (
            <span key={i}>
              {currency.name}
              {currency.symbol ? ' (' + currency.symbol + ')' : ''}
              <br />
            </span>
          )
        })}
      </CountryDetail>
      <CountryDetail title="Native name">{country.nativeName}</CountryDetail>
      <CountryDetail title="Gini">
        <CustomRange value={country.gini ?? 0} />
      </CountryDetail>
      <Neighbours neighbours={neighbours} />
    </div>
  )
}

export default CountryDetails
