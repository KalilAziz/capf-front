import { Accordion, Heading, Text } from '@capfds-ui/react'
import axios from 'axios'
import { GetStaticProps } from 'next'
import Image from 'next/image'
import HeroStudentGroup from '../../assets/images/Herofreshman-space.svg'
import { BackgroundNoCircle } from '../../components/BackgroundSession'
import { Hero } from '../../components/Hero'
import {
  ContentContainer,
  FaqContainer,
  HeadingContainer,
  Line,
} from '../../styles/pages/freshman-space'
import Faq from '../../assets/images/FAQ.svg'
import { CarrouselDocument } from '../../components/CarouselDocument'
export interface FreshmanSpaceProps {
  information: {
    id: string
    generalInfo: string
    faq: {
      id: string
      Question: string
      Answer: string
    }[]
  }
  documents: {
    id: number
    name: string
    media: {
      name: string
      url: string
    }
  }[]
}

export default function FreshmanSpace({
  information,
  documents,
}: FreshmanSpaceProps) {
  return (
    <>
      <Hero title="Espaços dos Calouros">
        <Image src={HeroStudentGroup} alt="" />
      </Hero>
      <BackgroundNoCircle>
        <HeadingContainer>
          <Heading size="4xl">
            <Text colors="green700" as="h3">
              <span>O que são os Grupos estudantis?</span>
              <Line />
            </Text>
          </Heading>
          <Text colors="black">
            Nesta sessão separamos para você, calouro, todos os documentos e
            informações que podem te ajudar para que esse período de transição
            seja o mais tranquilo possível. <br />
            Estamos sempre dispostos a te ajudar.
          </Text>
        </HeadingContainer>
        <ContentContainer>
          <Heading size="4xl">
            <Text colors="green700" as="h3">
              <span>Informações</span>
              <Line />
            </Text>
          </Heading>
          <Text colors="black">{information.generalInfo}</Text>
        </ContentContainer>
      </BackgroundNoCircle>
      <BackgroundNoCircle
        css={{
          backgroundColor: '$green300',
        }}
      >
        <CarrouselDocument documents={documents} />
      </BackgroundNoCircle>
      <BackgroundNoCircle>
        <FaqContainer>
          <div className="header">
            <Heading size="4xl">
              <Text colors="green700" as="h3">
                <span>Perguntas Frequentes</span>
              </Text>
            </Heading>
            <Image src={Faq} alt="" />
          </div>
          <Line />
          <div className="content">
            <Accordion.Root type="single" defaultValue="1" collapsible={true}>
              {information.faq.map((faq, key) => (
                <Accordion.Item value={String(faq.id)} key={key}>
                  <Accordion.Trigger>
                    <Text css={{ color: 'white' }}>
                      <strong>{faq.Question}</strong>
                    </Text>
                  </Accordion.Trigger>
                  <Accordion.Content>
                    <Text css={{ color: 'white' }}>{faq.Answer}</Text>
                  </Accordion.Content>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </div>
        </FaqContainer>
      </BackgroundNoCircle>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await axios
    .get('https://strapi-v4-capf.herokuapp.com/api/freshman-area?populate=deep')
    .then((res) => res.data)

  const documents = response.data.attributes.Useful_Document.Documents.map(
    (doc) => ({
      id: doc.id,
      name: doc.Document_title,
      descricao: doc.Document_description,
      media: {
        name: doc.Document_media.data[0].attributes.name,
        url: doc.Document_media.data[0].attributes.url,
      },
    }),
  )

  return {
    props: {
      information: {
        id: response.data.id,
        generalInfo: response.data.attributes.General_Info,
        faq: response.data.attributes.FAQ.Question_item,
      },
      documents,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  }
}
