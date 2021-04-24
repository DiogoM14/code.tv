import { Container } from "./styles"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

export function Spotlight() {
  const [ref] = useKeenSlider<HTMLDivElement>({ 
    loop: true,
    duration: 700,
    // breakpoints: {
    //   '(min-width: 720px) and (max-width: 1000px)': {
    //     loop: false,
    //   }
    // }
  })

  return (
    <Container>
      <h1>Spotlight</h1>

      <div ref={ref} className="keen-slider">
        <div className="keen-slider__slide number-slide1">
          <div className="slider__right-side">
            <h1>ola</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus natus sed, voluptas quis illo eos officiis totam ipsum tempore impedit consectetur culpa facilis error dolorem minima. Ipsam id alias tempore.</p>
          </div>
          <img src="/example.png" />
        </div>
        <div className="keen-slider__slide number-slide2">
          <div className="slider__right-side">
            <h1>ola</h1>
          </div>
          <img src="/example.png" />
        </div>
        <div className="keen-slider__slide number-slide3">
          <div className="slider__right-side">
            <h1>ola</h1>
          </div>
          <img src="/example.png" />
        </div>
        <div className="keen-slider__slide number-slide4">4</div>
        <div className="keen-slider__slide number-slide5">5</div>
        <div className="keen-slider__slide number-slide6">6</div>
      </div>
    </Container>
  )
}