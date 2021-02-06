import { ExpandLess, ExpandMore } from '@material-ui/icons'
import { SortByType, SortType } from '../../../../types'

import styles from './SortingHeading.module.css'

interface ISortingHeadingProps {
  sortHandler: (by: SortByType) => void
  sort: SortType
  sortBy: SortByType
  children: string
}

const SortingHeading = ({
  sortHandler,
  sort,
  sortBy,
  children
}: ISortingHeadingProps) => {
  return (
    <div className={styles.wrapper} onClick={() => sortHandler(sortBy)}>
      <span>{children}</span>
      <span>
        {sort.by === sortBy ? (
          sort.as === 1 ? (
            <ExpandLess />
          ) : (
            <ExpandMore />
          )
        ) : (
          ''
        )}
      </span>
    </div>
  )
}

export default SortingHeading
