import Layout from '../components/Layout/Layout'
import styles from '../styles/Home.module.css'
import TextInput from '../components/TextInput/TextInput'
import CountryTable from '../components/CountryTable/CountryTable'
import { useEffect, useState } from 'react'

const Home = ({ countries = [] }) => {
    const [filteredCountries, setFilteredCountries] = useState(countries)
    const [filter, setFilter] = useState('')
    const [sort, setSort] = useState({ by: 'name', as: 1 })

    const sortHandler = by => setSort({ by, as: sort.as * -1 })

    useEffect(() => {
        window.localStorage.setItem('countries', JSON.stringify(countries))
    }, [])

    // sorting
    useEffect(() => {
        const oldFilteredCountries = [...filteredCountries]
        setFilteredCountries(oldFilteredCountries
            .sort(
                (a, b) => ~~a[sort.by] > ~~b[sort.by]
                    ? sort.as
                    : sort.as * -1
            ))
        countries
            .sort(
                (a, b) => ~~a[sort.by] > ~~b[sort.by]
                    ? sort.as
                    : sort.as * -1
            )
    }, [sort])

    // filtering
    useEffect(() => {
        if (filter) {
            const filterRegExp = new RegExp(filter.replace(/[^a-zA-Z ]/g, ''), 'i')
            setFilteredCountries(countries.filter(country => {
                return filterRegExp.test(country.name) ||
                    filterRegExp.test(country.region) ||
                    filterRegExp.test(country.subregion)
            }))
        } else setFilteredCountries(countries)
    }, [filter])

    return (
        <Layout>
            <div className={styles.count_search}>
                <div className={styles.country_count}>
                    Found
                    <span className={styles.accent}> {countries.length} </span>
                    countries
                </div>
                <TextInput placeholder="Filter by name, region or subregion" setFilter={setFilter} />
            </div>
            {
                countries.length
                    ? <CountryTable filteredCountries={filteredCountries} sortHandler={sortHandler} sort={sort} />
                    : null
            }
        </Layout>
    )
}

export async function getStaticProps () {
    try {
        const response = await fetch('https://restcountries.eu/rest/v2/all?fields=name;population;gini;area;alpha3Code;flag;')
        const countries = await response.json()
        return {
            props: {
                countries
            }
        }
    } catch (e) {
        console.log(e)
        return { props: {} }
    }
}

export default Home
