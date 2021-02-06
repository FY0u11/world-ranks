import { SortByType, SortType } from '../../../types'

import React from 'react'
import SortingHeading from './SortingHeading/SortingHeading'
import parentStyles from '../CountryTable.module.css'
import selfStyles from './TableHeading.module.css'

interface ITableHeadingProps {
  sortHandler: (by: SortByType) => void
  sort: SortType
}

const TableHeading = ({ sortHandler, sort }: ITableHeadingProps) => {
  return (
    <>
      <tr className={`${parentStyles.desktop} ${selfStyles.row}`}>
        <th />
        <th>
          <SortingHeading sortHandler={sortHandler} sort={sort} sortBy="name">
            Name
          </SortingHeading>
        </th>
        <th>
          <SortingHeading
            sortHandler={sortHandler}
            sort={sort}
            sortBy="population"
          >
            Population
          </SortingHeading>
        </th>
        <th>
          <SortingHeading sortHandler={sortHandler} sort={sort} sortBy="area">
            Area (km)
          </SortingHeading>
        </th>
        <th>
          <SortingHeading sortHandler={sortHandler} sort={sort} sortBy="gini">
            Gini
          </SortingHeading>
        </th>
      </tr>
      <tr className={`${parentStyles.mobile} ${selfStyles.row}`}>
        <th>
          <SortingHeading sortHandler={sortHandler} sort={sort} sortBy="name">
            Name
          </SortingHeading>
        </th>
        <th>
          <SortingHeading
            sortHandler={sortHandler}
            sort={sort}
            sortBy="population"
          >
            Population
          </SortingHeading>
        </th>
      </tr>
    </>
  )
}

export default TableHeading
