import React from 'react'
import styles from './CustomRange.module.css'

interface ICustomRangeProps {
  value: number
}

const CustomRange = ({ value }: ICustomRangeProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.inner} style={{ width: value + '%' }} />
      </div>
      <span>{value}%</span>
    </div>
  )
}

export default CustomRange
