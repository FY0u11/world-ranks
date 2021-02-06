import { Search } from '@material-ui/icons'
import styles from './TextInput.module.css'

interface ITextInputProps {
  setFilter: (filter: string) => void
  [key: string]: any
}

const TextInput = ({ setFilter, ...rest }: ITextInputProps) => {
  return (
    <div className={styles.wrapper}>
      <Search />
      <input
        type="text"
        className={styles.input}
        {...rest}
        onChange={e => setFilter(e.target.value)}
      />
    </div>
  )
}

export default TextInput
