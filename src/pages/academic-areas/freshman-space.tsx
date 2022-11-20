import Image from 'next/image'
import HeroStudentGroup from '../../assets/images/Herofreshman-space.svg'
import { Hero } from '../../components/Hero'

export default function FreshmanSpace() {
  return (
    <>
      <Hero title="Espaços dos Calouros">
        <Image src={HeroStudentGroup} alt="" />
      </Hero>
    </>
  )
}
