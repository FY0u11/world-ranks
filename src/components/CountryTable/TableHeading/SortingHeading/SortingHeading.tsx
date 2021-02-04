import { ExpandMore, ExpandLess } from '@material-ui/icons'
import styles from './SortingHeading.module.css'

const SortingHeading = ({ sortHandler, sort, children }) => {
    return (
        <div
            className={styles.wrapper}
            onClick={() => sortHandler(children.toLowerCase())}
        >
            <span>{children}</span>
            <span>
                {
                    sort.by === children.toLowerCase()
                        ? sort.as === 1
                            ? <ExpandLess />
                            : <ExpandMore />
                        : ''
                }
            </span>
        </div>
    )
}

export default SortingHeading
