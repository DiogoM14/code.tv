interface CarouselProps {
  key: string
  title: string
  description: string
  reviews: number
  price: number
  priceBeforePromo?: number
  image: string
}

export function Carousel({ key, title, description, price, reviews, priceBeforePromo, image }: CarouselProps) {
  return (
      <div className="keen-slider__slide" itemID={key}>
        <div className="slider__right-side">
          <h1>{title}</h1>
          <p>{description}</p>
          <div className="reviews">
            ⭐⭐⭐⭐⭐
            {reviews} Reviews
          </div>

          { priceBeforePromo ? (
            <div className="promo">
              <h2>${price}</h2>
              <h3>${priceBeforePromo}</h3>
            </div>
          ) : (
            <h2>${price}</h2>
          )}
          <button>Learn more</button>
        </div>
        <img src={`/${image}`} />
      </div>
  )
}