import styles from './CountryTable.module.css'
import React from 'react'
import CountryRow from './CountryRow/CountryRow'
import TableHeading from './TableHeading/TableHeading'

const CountryTable = ({ filteredCountries, sortHandler, sort }) => {
    return (
        <table className={styles.table}>
            <thead>
                <TableHeading sort={sort} sortHandler={sortHandler} />
            </thead>
            <tbody>
                {filteredCountries.map(country => <CountryRow country={country} key={country.alpha3Code} />)}
            </tbody>
        </table>
    )
}

export default CountryTable
