import { Heading, Text } from '@capfds-ui/react'
import axios from 'axios'
import { GetStaticProps } from 'next'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import HeroStudentGroup from '../../assets/images/HeroStudentGroups.svg'
import { BackgroundNoCircle } from '../../components/BackgroundSession'
import { Hero } from '../../components/Hero'
import {
  ContentContainer,
  HeadingContainer,
  Line,
} from '../../styles/pages/student-group'

export interface StudentGroupProps {
  explanation: string
  Projects: {
    id: string
    name: string
    description: string
    subscribe: string
    works: string
    socialMediaFace: string
    socialMediaInsta: string
    image: {
      white: {
        url: string
        width: number
        height: number
      }
      dark: {
        url: string
        width: number
        height: number
      }
    }
  }[]
}

export default function StudentGroup({
  explanation,
  Projects,
}: StudentGroupProps) {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    mounted && (
      <>
        <Hero title="Grupos Estudantis">
          <Image src={HeroStudentGroup} alt="" />
        </Hero>
        <BackgroundNoCircle
          css={{
            padding: '$10 $4',
          }}
        >
          <HeadingContainer>
            <Heading size="4xl">
              <Text colors="green700" as="h2">
                <span>O que são os Grupos estudantis?</span>
                <Line />
              </Text>
            </Heading>
            <Text colors="black">{explanation}</Text>
          </HeadingContainer>
          {Projects.map((project, key) => (
            <ContentContainer key={key}>
              <div className="imageContainer">
                {theme === 'dark' ? (
                  <Image
                    src={project.image.dark.url}
                    alt=""
                    width={project.image.dark.width}
                    height={project.image.dark.height}
                  />
                ) : (
                  <Image
                    src={project.image.white.url}
                    alt=""
                    width={project.image.white.width}
                    height={project.image.white.height}
                  />
                )}
              </div>
              <div className="descriptionContainer">
                <Heading size="4xl">
                  <Text colors="green700" as="h3">
                    <span>{project.name}</span>
                    <Line />
                  </Text>
                </Heading>
                <Text colors="black">{project.description}</Text>
              </div>

              <div className="subscribeContainer">
                <Heading size="4xl">
                  <Text colors="green700" as="h3">
                    <span>Como fazer parte?</span>
                    <Line />
                  </Text>
                </Heading>
                <Text colors="black">{project.subscribe}</Text>
              </div>

              <div className="worksContainer">
                <Heading size="4xl">
                  <Text colors="green700" as="h3">
                    <span>Como funciona?</span>
                    <Line />
                  </Text>
                </Heading>
                <Text colors="black">{project.works}</Text>
              </div>

              <div className="contactContainer">
                <Heading size="4xl">
                  <Text colors="green700" as="h3">
                    <span>Como Entrar em contato?</span>
                    <Line />
                  </Text>
                </Heading>
                <Text>
                  <Link href={project.socialMediaFace}>Facebook</Link>
                </Text>
                <Text>
                  <Link href={project.socialMediaInsta}>Instagram</Link>
                </Text>
              </div>
            </ContentContainer>
          ))}
        </BackgroundNoCircle>
      </>
    )
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await axios
    .get('https://strapi-v4-capf.herokuapp.com/api/student-group?populate=deep')
    .then((response) => {
      return response.data
    })

  const Projects = response.data.attributes.Student_groups_project.map(
    (project) => {
      return {
        id: project.id,
        name: project.Student_groups_title,
        description: project.Student_groups_description,
        subscribe: project.Student_groups_subscribe,
        works: project.Student_groups_works,
        socialMediaFace: project.Student_groups_facebook,
        socialMediaInsta: project.Student_groups_instagram,
        image: {
          white: {
            url: project.Student_groups_image_white.data.attributes.url,
            width: project.Student_groups_image_white.data.attributes.width,
            height: project.Student_groups_image_white.data.attributes.height,
          },
          dark: {
            url: project.Student_groups_image_dark.data.attributes.url,
            width: project.Student_groups_image_dark.data.attributes.width,
            height: project.Student_groups_image_dark.data.attributes.height,
          },
        },
      }
    },
  )
  return {
    props: {
      explanation: response.data.attributes.Student_groups_explanation,
      Projects,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  }
}
