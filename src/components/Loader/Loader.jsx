import { ClipLoader } from 'react-spinners'
import css from './Loader.module.css'

export default function Loader() {
  return (
    <div className={css.loader}>
      <ClipLoader size={40} color="rgb(83, 72, 233)" />
    </div>
  )
}
