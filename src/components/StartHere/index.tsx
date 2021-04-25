import { Divider } from "../Divider";
import { Container } from "./styles";
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

export function StartHere() {
  const [sliderRef] = useKeenSlider({ slidesPerView: 3, spacing: 15 })

  return (
    <Container>
      <Divider title="StartHere" />
      
      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide number-slide1">
          <img src="/example.png" width="400px" alt=""/>
        </div>
        <div className="keen-slider__slide number-slide2">
        <img src="/3.png" width="400px" alt=""/>
          
        </div>
        <div className="keen-slider__slide number-slide3">
        <img src="/react.png" width="400px" alt=""/>

        </div>
        <div className="keen-slider__slide number-slide4">
        <img src="/python.jpeg" width="400px" alt=""/>

        </div>
        <div className="keen-slider__slide number-slide5">
        <img src="/example.png" width="400px" alt=""/>

        </div>
        <div className="keen-slider__slide number-slide6">
        <img src="/example.png" width="400px" alt=""/>

        </div>
      </div>
    </Container>
  )
}