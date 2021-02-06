import { CountryType, StaticPropsType } from '../../types'
import { useEffect, useState } from 'react'

import CountryCard from '../../components/CountryCard/CountryCard'
import CountryDetails from '../../components/CountryDetails/CountryDetails'
import Layout from '../../components/Layout/Layout'
import Router from 'next/router'
import styles from './Country.module.css'

const Details = ({ country }: StaticPropsType<typeof getServerSideProps>) => {
  const [neighbours, setNeighbours] = useState(
    [] as Array<CountryType | undefined>
  )
  useEffect(() => {
    if (!country) return
    const countriesJSON = window.localStorage.getItem('countries')
    if (countriesJSON) {
      const countries = JSON.parse(countriesJSON) as CountryType[]
      const neighbours = [] as Array<CountryType | undefined>
      country.borders.forEach(code =>
        neighbours.push(
          countries.find(
            country => country.alpha3Code.toLowerCase() === code.toLowerCase()
          )
        )
      )
      setNeighbours(neighbours)
    } else {
      Router.push('/')
    }
  }, [country])

  return (
    <Layout title={`World Ranks | ${country ? country.name : 'Not found'}`}>
      {country ? (
        <div className={styles.container}>
          <CountryCard country={country} />
          <CountryDetails country={country} neighbours={neighbours} />
        </div>
      ) : (
        <div className={styles.not_found}>Country not found</div>
      )}
    </Layout>
  )
}

export async function getServerSideProps({
  params
}: {
  params: { code: string }
}) {
  try {
    const response = await fetch(
      `https://restcountries.eu/rest/v2/alpha/${params.code.toLowerCase()}?fields=name;alpha3Code;gini;flag;capital;population;area;nativeName;subregion;borders;languages;currencies;`
    )
    const country = (await response.json()) as CountryType | { status: number }
    if ('status' in country) return { props: {} }
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
