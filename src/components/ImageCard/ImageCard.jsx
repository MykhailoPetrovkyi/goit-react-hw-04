import css from './ImageCard.module.css'
export default function ImageCard({ data, onImageClick }) {
  const handleClick = () => {
    onImageClick(data.urls.regular)
  }

  return (
    <div>
      <img src={data.urls.small} alt="photo" className={css.photo} onClick={handleClick} />
    </div>
  )
}
