import ImageCard from '../ImageCard/ImageCard'
import { nanoid } from 'nanoid'
import css from './ImageGallery.module.css'
export default function ImageGallery({ items, onImageClick }) {
  return (
    <ul className={css.list}>
      {items.map((item) => (
        <li key={nanoid()} className={css.item}>
          <ImageCard data={item} onImageClick={onImageClick} />
        </li>
      ))}
    </ul>
  )
}
