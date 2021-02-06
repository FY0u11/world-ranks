import { CountryType, SortByType, SortType } from '../../types'

import CountryRow from './CountryRow/CountryRow'
import React from 'react'
import TableHeading from './TableHeading/TableHeading'
import styles from './CountryTable.module.css'

interface ICountryTableProps {
  filteredCountries: Array<CountryType>
  sortHandler: (by: SortByType) => void
  sort: SortType
}
const CountryTable = ({
  filteredCountries,
  sortHandler,
  sort
}: ICountryTableProps) => {
  return (
    <table className={styles.table}>
      <thead>
        <TableHeading sort={sort} sortHandler={sortHandler} />
      </thead>
      <tbody>
        {filteredCountries.map(country => (
          <CountryRow country={country} key={country.alpha3Code} />
        ))}
      </tbody>
    </table>
  )
}

export default CountryTable
