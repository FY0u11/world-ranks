import styles from './CountryTable.module.css'
import React from 'react'
import SortingHeading from '../SortingHeading/SortingHeading'
import CustomRange from '../CustomRange/CustomRange'
import Link from 'next/link'

const CountryTable = ({ filteredCountries, sortHandler, sort }) => {
    return (
        <table className={styles.table}>
            <thead>
                <tr className={styles.desktop}>
                    <th></th>
                    <th><SortingHeading sortHandler={sortHandler} sort={sort}>Name</SortingHeading></th>
                    <th><SortingHeading sortHandler={sortHandler} sort={sort}>Population</SortingHeading></th>
                    <th><SortingHeading sortHandler={sortHandler} sort={sort}>Area</SortingHeading></th>
                    <th><SortingHeading sortHandler={sortHandler} sort={sort}>Gini</SortingHeading></th>
                </tr>
                <tr className={styles.mobile}>
                    <th><SortingHeading sortHandler={sortHandler} sort={sort}>Name</SortingHeading></th>
                    <th><SortingHeading sortHandler={sortHandler} sort={sort}>Population</SortingHeading></th>
                </tr>
            </thead>
            <tbody>
                {
                    filteredCountries.map(country => {
                        return (
                            <React.Fragment key={country.alpha3Code}>
                                <Link href={`/details/${country.alpha3Code.toLowerCase()}`}>
                                    <tr className={styles.desktop}>
                                        <td>
                                            <div className={styles.flag}>
                                                <img src={country.flag} alt="Country flag" />
                                            </div>
                                        </td>
                                        <td>{country.name}</td>
                                        <td>{country.population?.toLocaleString()}</td>
                                        <td>{(~~country.area)?.toLocaleString()}</td>
                                        <td>
                                            <CustomRange value={~~country.gini} />
                                        </td>
                                    </tr>
                                </Link>
                                <Link href={`/details/${country.alpha3Code.toLowerCase()}`}>
                                    <tr className={styles.mobile}>
                                        <td>{country.name}</td>
                                        <td>{country.population?.toLocaleString()}</td>
                                    </tr>
                                </Link>
                            </React.Fragment>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default CountryTable
