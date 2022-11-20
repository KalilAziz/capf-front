import Image from 'next/image'
import HeroStudentGroup from '../../assets/images/HeroColig.svg'
import { Hero } from '../../components/Hero'

export default function Colig() {
  return (
    <>
      <Hero title="Colig">
        <Image src={HeroStudentGroup} alt="" />
      </Hero>
    </>
  )
}
