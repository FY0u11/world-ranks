import Link from 'next/link'
import selfStyles from './CountryRow.module.css'
import parentStyles from '../CountryTable.module.css'
import CustomRange from '../../CustomRange/CustomRange'
import React from 'react'

const CountryRow = ({ country }) => {
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
                    <td>{(~~country.area)?.toLocaleString()}</td>
                    <td>
                        <CustomRange value={~~country.gini} />
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
