import Image from 'next/image'
import HeroContact from '../../assets/images/HeroContact.svg'
import { Hero } from '../../components/Hero'

export default function Contact() {
  return (
    <>
      <Hero title="Como prefere falar com a gente?">
        <Image src={HeroContact} alt="" />
      </Hero>
    </>
  )
}
