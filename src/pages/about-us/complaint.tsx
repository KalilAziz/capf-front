import { Box, Button, Heading, Input, Text, TextArea } from '@capfds-ui/react'
import Image from 'next/image'
import HeroComplaint from '../../assets/images/HeroComplaint.svg'
import { BackgroundNoCircle } from '../../components/BackgroundSession'
import { Hero } from '../../components/Hero'
import {
  ContentContainer,
  FormContainer,
  HeadingContainer,
  InputContainer,
  Line,
  TextAreaContainer,
} from '../../styles/pages/complaint'

import { HiOutlineMail } from 'react-icons/hi'

export default function Complaint() {
  return (
    <>
      <Hero title="Reclamações? Fale conosco!">
        <Image src={HeroComplaint} alt="" />
      </Hero>
      <BackgroundNoCircle>
        <HeadingContainer>
          <Heading size="4xl">
            <Text colors="green700" as="h3">
              <span>Nos envie um e-mail ;)</span>
              <Line />
            </Text>
          </Heading>
        </HeadingContainer>
        <ContentContainer>
          <Box>
            <FormContainer>
              <InputContainer>
                <label htmlFor="">
                  <Text colors="green50" size="lg">
                    <span>Nome</span>
                  </Text>
                  <Input.Root>
                    <Input.icon>
                      <HiOutlineMail />
                    </Input.icon>
                    <Input.Input placeholder="Digite seu nome" type="text" />
                  </Input.Root>
                </label>

                <label htmlFor="">
                  <Text colors="green50" size="lg">
                    <span>Email</span>
                  </Text>
                  <Input.Root>
                    <Input.icon>
                      <HiOutlineMail />
                    </Input.icon>
                    <Input.Input placeholder="Digite seu e-mail" type="email" />
                  </Input.Root>
                </label>

                <label htmlFor="">
                  <Text colors="green50" size="lg">
                    <span>Telefone</span>
                  </Text>
                  <Input.Root>
                    <Input.icon>
                      <HiOutlineMail />
                    </Input.icon>
                    <Input.Input placeholder="Digite seu telefone" type="cel" />
                  </Input.Root>
                </label>
                <Button css={{}}>
                  <Text
                    colors="white"
                    size="lg"
                    css={{
                      display: 'block',
                      margin: '0 auto',
                    }}
                  >
                    <span>Enviar</span>
                  </Text>
                </Button>
              </InputContainer>
              <TextAreaContainer>
                <label htmlFor="">
                  <Text colors="green50">Nos descreva seu problema:</Text>
                  <TextArea />
                </label>
              </TextAreaContainer>
            </FormContainer>
          </Box>
        </ContentContainer>
      </BackgroundNoCircle>
    </>
  )
}
