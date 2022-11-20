import { SectionContent } from '@capfds-ui/react'
import { Container, TitleHero, ImageHero } from './styles'

export const Hero = ({ children, title }) => {
  return (
    <Container>
      <SectionContent>
        <TitleHero>{title}</TitleHero>
        <ImageHero>{children}</ImageHero>
      </SectionContent>
    </Container>
  )
}
