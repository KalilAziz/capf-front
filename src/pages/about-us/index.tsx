import { Heading, Text } from '@capfds-ui/react'
import axios from 'axios'
import { GetStaticProps } from 'next'
import Image from 'next/image'
import HeroStudentGroup from '../../assets/images/HeroAboutUs.svg'
import { BackgroundNoCircle } from '../../components/BackgroundSession'
import { Hero } from '../../components/Hero'
import { Management } from '../../components/Management'
import { HeadingContainer, Line } from '../../styles/pages/about-us'

export interface AboutUsProps {
  information: {
    explanation: string
    mission: string
    Management: {
      id: number
      Management_Year: string
      Manager: {
        id: number
        Manager_Field: string
        Manager_Name: string
        Manager_image
      }[]
    }[]
  }
}

export default function AboutUs({ information }: AboutUsProps) {
  return (
    <>
      <Hero title="Quem Somos">
        <Image src={HeroStudentGroup} alt="" />
      </Hero>
      <BackgroundNoCircle>
        <HeadingContainer>
          <Heading size="4xl">
            <Text colors="green700" as="h3">
              <span>Centro Acadêmico Santo Paulo Francescantonio</span>
              <Line />
            </Text>
          </Heading>
          <Text
            colors="black"
            dangerouslySetInnerHTML={{ __html: information.explanation }}
          />

          <Heading size="4xl">
            <Text colors="green700" as="h3">
              <span>Missão</span>
              <Line />
            </Text>
          </Heading>
          <Text
            colors="black"
            dangerouslySetInnerHTML={{ __html: information.mission }}
          />
        </HeadingContainer>
        <Management managers={information.Management} />
      </BackgroundNoCircle>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await axios
    .get('https://strapi-v4-capf.herokuapp.com/api/about-us?populate=deep')
    .then((res) => res.data)

  return {
    props: {
      information: {
        explanation: response.data.attributes.Explanation_Paragraph,
        mission: response.data.attributes.Mission,
        Management: response.data.attributes.Management,
      },
    },
    revalidate: 60 * 60 * 24, // 24 hours
  }
}
