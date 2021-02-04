import styles from './Neighbours.module.css'
import Neighbour from './Neighbour/Neighbour'

const Neighbours = ({ neighbours }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>Neighbouring Countries</div>
            <div className={styles.neighbours}>
                {
                    neighbours.map(neighbour => {
                        return <Neighbour neighbour={neighbour} key={neighbour.alpha3Code} />
                    })
                }
            </div>
        </div>
    )
}

export default Neighbours
