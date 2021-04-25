import { Container, Title } from "./styles"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { Carousel } from "./Carousel"
import { Divider } from '../Divider'

export function Spotlight() {
  const [ref] = useKeenSlider<HTMLDivElement>({ 
    loop: true,
    slidesPerView: 1,
    duration: 700,
    // breakpoints: {
    //   '(min-width: 720px) and (max-width: 1000px)': {
    //     loop: false,
    //   }
    // }
  })

  return (
    <Container>
      <Divider title="Spotlight" />

      <div ref={ref} className="keen-slider">
        <Carousel 
          key="test1"
          title="React Native Course"
          description="Aprenda Python 3.8.5 com Expressões Lambdas, Iteradores, Geradores, Orientação a Objetos e muito mais!"
          price={49}
          reviews={6}
          priceBeforePromo={125}
          image="react.png"
        />

        <Carousel 
          key="test2"
          title="React Native Course"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus natus sed, voluptas quis illo eos officiis totam ipsum tempore impedit consectetur culpa facilis error dolorem minima. Ipsam id alias tempore."
          price={59}
          reviews={6}
          image="example.png"
        />
      </div>
    </Container>
  )
}