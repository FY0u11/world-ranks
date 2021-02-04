import styles from './CountryDetails.module.css'
import CustomRange from '../CustomRange/CustomRange'
import CountryDetail from './CountryDetail/CountryDetail'
import Neighbours from './Neighbours/Neighbours'

const CountryDetails = ({ country, neighbours }) => {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.heading}>Details</h1>
            <CountryDetail title="Capital">{country.capital}</CountryDetail>
            <CountryDetail title="Subregion">{country.subregion}</CountryDetail>
            <CountryDetail title="Languages">
                {
                    country.languages.map((language, i) => <div key={i}>{language.name}</div>)
                }
            </CountryDetail>
            <CountryDetail title="Currencies">
                {
                    country.currencies.map((currency, i) => {
                        return (
                            <span key={i}>
                                {currency.name}
                                {
                                    currency.symbol
                                        ? ' (' + currency.symbol + ')'
                                        : ''
                                }
                                <br />
                            </span>
                        )
                    })
                }
            </CountryDetail>
            <CountryDetail title="Native name">{country.nativeName}</CountryDetail>
            <CountryDetail title="Gini">
                <CustomRange value={~~country.gini} />
            </CountryDetail>
            <Neighbours neighbours={neighbours} />
        </div>
    )
}

export default CountryDetails
