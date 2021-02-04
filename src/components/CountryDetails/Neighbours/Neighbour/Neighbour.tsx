import styles from './Neighbour.module.css'
import Link from 'next/link'

const Neighbour = ({ neighbour }) => {
    return (
        <div className={styles.neighbour}>
            <Link href={`/details/${neighbour.alpha3Code.toLowerCase()}`}>
                <img className={styles.flag} src={neighbour.flag} alt={neighbour.name} />
            </Link>
            <span>{neighbour.name}</span>
        </div>
    )
}

export default Neighbour
