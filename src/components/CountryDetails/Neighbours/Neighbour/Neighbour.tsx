import { CountryType } from '../../../../types'
import Link from 'next/link'
import styles from './Neighbour.module.css'

interface INeighbourProps {
  neighbour: CountryType
}

const Neighbour = ({ neighbour }: INeighbourProps) => {
  return (
    <div className={styles.neighbour}>
      <Link href={`/details/${neighbour.alpha3Code.toLowerCase()}`}>
        <img
          className={styles.flag}
          src={neighbour.flag}
          alt={neighbour.name}
        />
      </Link>
      <span>{neighbour.name}</span>
    </div>
  )
}

export default Neighbour
