import { CountryType } from '../../../types'
import Neighbour from './Neighbour/Neighbour'
import styles from './Neighbours.module.css'

interface INeighboursProps {
  neighbours: Array<CountryType | undefined>
}

const Neighbours = ({ neighbours }: INeighboursProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Neighbouring Countries</div>
      <div className={styles.neighbours}>
        {neighbours.map((neighbour, i) => {
          if (neighbour) return <Neighbour neighbour={neighbour} key={i} />
        })}
      </div>
    </div>
  )
}

export default Neighbours
