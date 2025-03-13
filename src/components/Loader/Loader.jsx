import { TailSpin } from 'react-loader-spinner'
import css from './Loader.module.css'

export default function Loader() {
  return (
    <TailSpin
      visible={true}
      height="40"
      width="40"
      color="rgb(83, 72, 233)"
      radius="5"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClass={css.loader}
    />
  )
}
