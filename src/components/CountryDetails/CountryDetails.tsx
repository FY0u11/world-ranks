import styles from './CountryDetails.module.css'
import CustomRange from '../CustomRange/CustomRange'
import Link from 'next/link'

const CountryDetails = ({ country, countries }) => {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.heading}>Details</h1>
            <div className={styles.row}>
                <div className={styles.row_title}>Capital</div>
                <div className={styles.row_content}>{country.capital}</div>
            </div>
            <div className={styles.row}>
                <div className={styles.row_title}>Subregion</div>
                <div className={styles.row_content}>{country.subregion}</div>
            </div>
            <div className={styles.row}>
                <div className={styles.row_title}>Languages</div>
                <div className={styles.row_content}>
                    {
                        country.languages.map((language, i) => <div key={i}>{language.name}</div>)
                    }
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.row_title}>Currencies</div>
                <div className={styles.row_content}>
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
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.row_title}>Native name</div>
                <div className={styles.row_content}>{country.nativeName}</div>
            </div>
            <div className={styles.row}>
                <div className={styles.row_title}>Gini</div>
                <div className={styles.row_content}>
                    <CustomRange value={~~country.gini} />
                </div>
            </div>
            <div className={styles.neighbours_row}>
                <div className={styles.row_title}>Neighbouring Countries</div>
                <div className={styles.neighbours}>
                    {
                        country.borders.map(border => {
                            const neighbour = countries.find(country => country.alpha3Code === border)
                            return (
                                <div className={styles.neighbour} key={neighbour.alpha3Code}>
                                    <Link href={`/details/${neighbour.alpha3Code.toLowerCase()}`}>
                                        <img className={styles.flag} src={neighbour.flag} alt={neighbour.name} />
                                    </Link>
                                    <span>{neighbour.name}</span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default CountryDetails
