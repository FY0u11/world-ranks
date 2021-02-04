import Layout from '../../components/Layout/Layout'
import CountryCard from '../../components/CountryCard/CountryCard'
import CountryDetails from '../../components/CountryDetails/CountryDetails'
import styles from './Country.module.css'
import { useEffect, useState } from 'react'
import Router from 'next/router'

const Details = ({ country }) => {
    const [neighbours, setNeighbours] = useState([])
    useEffect(() => {
        if (!country) return
        const neighbours = []
        const countries = JSON.parse(window.localStorage.getItem('countries'))
        if (countries) {
            country.borders.forEach(code => neighbours.push(countries.find(country => country.alpha3Code.toLowerCase() === code.toLowerCase())))
            setNeighbours(neighbours)
        } else {
            Router.push('/')
        }
    }, [country])

    return (
        <Layout title={`World Ranks | ${country ? country.name : 'Not found' }`}>
            {
                country
                    ? <div className={styles.container}>
                        <CountryCard country={country} />
                        <CountryDetails country={country} neighbours={neighbours} />
                    </div>
                    : <div className={styles.not_found}>Country not found</div>
            }
        </Layout>
    )
}

export async function getServerSideProps({ params }) {
    try {
        const response = await fetch(`https://restcountries.eu/rest/v2/alpha/${params.code.toLowerCase()}?fields=name;alpha3Code;gini;flag;capital;population;area;nativeName;subregion;borders;languages;currencies;`)
        const country = await response.json()
        if (country.status && country.status !== 200) return { props: {} }
        return {
            props: {
                country
            }
        }
    } catch (e) {
        console.log(e)
        return { props: {} }
    }
}

export default Details
