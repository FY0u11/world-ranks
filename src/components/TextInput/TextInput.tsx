import styles from './TextInput.module.css';
import { Search } from '@material-ui/icons'

const TextInput = ({ setFilter, ...rest }) => {
    return (
        <div className={styles.wrapper}>
            <Search />
            <input type="text" className={styles.input} {...rest} onChange={e => setFilter(e.target.value)} />
        </div>
    )
}

export default TextInput
