

export const GifItem = ({title, urlimg}) => {

  return (
    <div className="card">

        <img src={urlimg} alt={`Gif-${title}`} />
        <p>{title}</p>

    </div>
  )
}
