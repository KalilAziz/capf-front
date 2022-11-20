import Image from 'next/image'
import HeroComplaint from '../../assets/images/HeroComplaint.svg'
import { Hero } from '../../components/Hero'

export default function Complaint() {
  return (
    <>
      <Hero title="Reclamações? Fale conosco!">
        <Image src={HeroComplaint} alt="" />
      </Hero>
    </>
  )
}
