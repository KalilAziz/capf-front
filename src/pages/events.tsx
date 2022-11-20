import Image from 'next/image'
import HeroEvents from '../assets/images/HeroEvents.svg'
import { Hero } from '../components/Hero'
export default function Events() {
  return (
    <>
      <Hero title="Eventos disponíveis">
        <Image src={HeroEvents} alt="" />
      </Hero>
    </>
  )
}
