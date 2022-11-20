import Image from 'next/image'
import HeroStudentGroup from '../../assets/images/HeroAboutUs.svg'
import { Hero } from '../../components/Hero'

export default function AboutUs() {
  return (
    <>
      <Hero title="Quem Somos">
        <Image src={HeroStudentGroup} alt="" />
      </Hero>
    </>
  )
}
