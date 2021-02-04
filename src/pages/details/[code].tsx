import Layout from '../../components/Layout/Layout'
import CountryCard from '../../components/CountryCard/CountryCard'
import CountryDetails from '../../components/CountryDetails/CountryDetails'
import styles from './Country.module.css'

const Details = ({ country, countries }) => {
    return (
        <Layout title={`World Ranks | ${country.name}`}>
            <div className={styles.container}>
                <CountryCard country={country} />
                <CountryDetails country={country} countries={countries} />
            </div>
        </Layout>
    )
}

export async function getServerSideProps({ params }) {
    const response = await fetch('https://restcountries.eu/rest/v2/all')
    const countries = await response.json()
    const country = countries.find(country =>
        country.alpha3Code.toLowerCase() === params.code.toLowerCase() ||
        country.alpha2Code.toLowerCase() === params.code.toLowerCase()
    )

    return {
        props: {
            country,
            countries
        }
    }
}

export default Details
