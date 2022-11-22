import Image from 'next/image'
import HeroEvents from '../assets/images/HeroEvents.svg'
import { Hero } from '../components/Hero'
import { Events } from '../components/Events'
import { BackgroundNoCircle } from '../components/BackgroundSession'
export default function EventsPage() {
  return (
    <>
      <Hero title="Eventos disponíveis">
        <Image src={HeroEvents} alt="" />
      </Hero>
      <BackgroundNoCircle>
        <Events />
      </BackgroundNoCircle>
    </>
  )
}
