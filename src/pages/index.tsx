import { CountryType, SortByType, SortType, StaticPropsType } from '../types'
import { useEffect, useState } from 'react'

import CountryTable from '../components/CountryTable/CountryTable'
import Layout from '../components/Layout/Layout'
import TextInput from '../components/TextInput/TextInput'
import styles from '../styles/Home.module.css'

const Home = ({ countries }: StaticPropsType<typeof getStaticProps>) => {
  const [filteredCountries, setFilteredCountries] = useState(countries)
  const [filter, setFilter] = useState('')
  const [sort, setSort] = useState({ by: 'name', as: 1 } as SortType)

  const sortHandler = (by: SortByType) => setSort({ by, as: -sort.as })

  useEffect(() => {
    window.localStorage.setItem('countries', JSON.stringify(countries))
  }, [])

  useEffect(() => {
    setFilteredCountries(countries)
  }, [countries])

  // sorting
  useEffect(() => {
    if (filteredCountries) {
      const oldFilteredCountries = [...filteredCountries]
      const sortingFn = (a: CountryType, b: CountryType) =>
        (a[sort.by] ?? 0) > (b[sort.by] ?? 0) ? sort.as : -sort.as
      setFilteredCountries(oldFilteredCountries.sort(sortingFn))
      filteredCountries.sort(sortingFn)
    }
  }, [sort])

  // filtering
  useEffect(() => {
    if (countries && filter) {
      const filterRegExp = new RegExp(filter.replace(/[^a-zA-Z ]/g, ''), 'i')
      setFilteredCountries(
        countries.filter(country => {
          return (
            filterRegExp.test(country.name) ||
            filterRegExp.test(country.region) ||
            filterRegExp.test(country.subregion)
          )
        })
      )
    } else setFilteredCountries(countries)
  }, [filter])

  return (
    <Layout>
      <div className={styles.count_search}>
        <div className={styles.country_count}>
          Found
          <span className={styles.accent}> {countries?.length ?? 0} </span>
          countries
        </div>
        <TextInput
          placeholder="Filter by name, region or subregion"
          setFilter={setFilter}
        />
      </div>
      {filteredCountries ? (
        <CountryTable
          filteredCountries={filteredCountries}
          sortHandler={sortHandler}
          sort={sort}
        />
      ) : null}
    </Layout>
  )
}

export async function getStaticProps() {
  try {
    const response = await fetch(
      'https://restcountries.eu/rest/v2/all?fields=name;population;gini;area;alpha3Code;flag;'
    )
    const countries = (await response.json()) as CountryType[]
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
