import Image from 'next/image'
import HeroStudentGroup from '../../assets/images/HeroColig.svg'
import { BackgroundNoCircle } from '../../components/BackgroundSession'
import { Events } from '../../components/Events'
import { Hero } from '../../components/Hero'

export default function Colig() {
  return (
    <>
      <Hero title="Colig">
        <Image src={HeroStudentGroup} alt="" />
      </Hero>
      <BackgroundNoCircle>
        <Events />
      </BackgroundNoCircle>
    </>
  )
}
