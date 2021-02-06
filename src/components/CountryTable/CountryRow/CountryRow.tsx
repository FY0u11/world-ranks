import { CountryType } from '../../../types'
import CustomRange from '../../CustomRange/CustomRange'
import Link from 'next/link'
import React from 'react'
import parentStyles from '../CountryTable.module.css'
import selfStyles from './CountryRow.module.css'

interface ICountryRowProps {
  country: CountryType
}

const CountryRow = ({ country }: ICountryRowProps) => {
  return (
    <React.Fragment>
      <Link href={`/details/${country.alpha3Code.toLowerCase()}`}>
        <tr className={`${parentStyles.desktop} ${selfStyles.row}`}>
          <td>
            <div className={selfStyles.flag}>
              <img src={country.flag} alt="Country flag" />
            </div>
          </td>
          <td>{country.name}</td>
          <td>{country.population?.toLocaleString()}</td>
          <td>{(country.area ?? 0)?.toLocaleString()}</td>
          <td>
            <CustomRange value={~~(country.gini ?? 0)} />
          </td>
        </tr>
      </Link>
      <Link href={`/details/${country.alpha3Code.toLowerCase()}`}>
        <tr className={`${parentStyles.mobile} ${selfStyles.row}`}>
          <td>{country.name}</td>
          <td>{country.population?.toLocaleString()}</td>
        </tr>
      </Link>
    </React.Fragment>
  )
}

export default CountryRow
