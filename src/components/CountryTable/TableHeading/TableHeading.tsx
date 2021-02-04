import selfStyles from './TableHeading.module.css'
import parentStyles from '../CountryTable.module.css'
import SortingHeading from './SortingHeading/SortingHeading'
import React from 'react'

const TableHeading = ({ sortHandler, sort }) => {
    return (
        <>
            <tr className={`${parentStyles.desktop} ${selfStyles.row}`}>
                <th />
                <th><SortingHeading sortHandler={sortHandler} sort={sort}>Name</SortingHeading></th>
                <th><SortingHeading sortHandler={sortHandler} sort={sort}>Population</SortingHeading></th>
                <th><SortingHeading sortHandler={sortHandler} sort={sort}>Area</SortingHeading></th>
                <th><SortingHeading sortHandler={sortHandler} sort={sort}>Gini</SortingHeading></th>
            </tr>
            <tr className={`${parentStyles.mobile} ${selfStyles.row}`}>
                <th><SortingHeading sortHandler={sortHandler} sort={sort}>Name</SortingHeading></th>
                <th><SortingHeading sortHandler={sortHandler} sort={sort}>Population</SortingHeading></th>
            </tr>
        </>
    )
}

export default TableHeading
