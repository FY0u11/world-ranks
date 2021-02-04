import styles from './CustomRange.module.css'
import React from 'react'

const CustomRange = ({ value }) => {
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
