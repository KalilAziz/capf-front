import { Button, Text } from '@capfds-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import HeroContact from '../../assets/images/HeroContact.svg'
import { BackgroundNoCircle } from '../../components/BackgroundSession'
import { Hero } from '../../components/Hero'
import { ContactContainer } from '../../styles/pages/contact'
import { AiOutlineMail } from 'react-icons/ai'
import { BsQuestionLg } from 'react-icons/bs'
import { CgInstagram } from 'react-icons/cg'
export default function Contact() {
  return (
    <>
      <Hero title="Como prefere falar com a gente?">
        <Image src={HeroContact} alt="" />
      </Hero>
      <BackgroundNoCircle css={{ padding: '$20 0' }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15288.102635271984!2d-49.2468397!3d-16.6755994!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x45407a3f9909d28f!2sCentro%20Acad%C3%AAmico%20Paulo%20Francescantonio!5e0!3m2!1spt-BR!2sbr!4v1669147473416!5m2!1spt-BR!2sbr"
          width="80%"
          height="300"
          style={{
            display: 'block',
            border: 'border: 0',
            margin: '0 auto',
            borderRadius: ' 10px 10px 0 0',
          }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <ContactContainer>
          <Link href="">
            <Button>
              <Text colors="white" size="lg">
                <span>
                  <CgInstagram /> @capf_pucgo
                </span>
              </Text>
            </Button>
          </Link>
          <Link href="">
            <Button>
              <Text colors="white" size="lg">
                <span>
                  <AiOutlineMail /> capfmedpucgo@gmail.com
                </span>
              </Text>
            </Button>
          </Link>
          <Link href="">
            <Button>
              <Text colors="white" size="lg">
                <span>
                  <BsQuestionLg /> Tem alguma reclamação ou sugestão? Clique
                  aqui
                </span>
              </Text>
            </Button>
          </Link>
        </ContactContainer>
      </BackgroundNoCircle>
    </>
  )
}
