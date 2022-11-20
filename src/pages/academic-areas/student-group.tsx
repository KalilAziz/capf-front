import Image from 'next/image'
import HeroStudentGroup from '../../assets/images/HeroStudentGroups.svg'
import { Hero } from '../../components/Hero'

export default function StudentGroup() {
  return (
    <>
      <Hero title="Grupos Estudantis">
        <Image src={HeroStudentGroup} alt="" />
      </Hero>
    </>
  )
}
