import { BoxContentSection, Text } from '@capfds-ui/react'
import Image from 'next/image'
import notEvents from '../../assets/images/notEvents.svg'

export const Events = () => {
  return (
    <BoxContentSection.Root css={{ margin: '$10 0' }}>
      <BoxContentSection.Line />
      <BoxContentSection.Container>
        <BoxContentSection.Content>
          <BoxContentSection.BoxImage
            css={{
              gap: '$4',
              img: {
                objectFit: 'fill',
              },
            }}
          >
            <Image src={notEvents} alt="" />
          </BoxContentSection.BoxImage>
          <BoxContentSection.BoxContent
            css={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',

              p: {
                textAlign: 'center',
              },
            }}
          >
            <Text colors="green50" size="2xl">
              <strong>Não foram encontrados eventos no momento.</strong>
            </Text>
            <Text size="xl">Em breve teremos novidades.</Text>
          </BoxContentSection.BoxContent>
        </BoxContentSection.Content>
        <BoxContentSection.Box></BoxContentSection.Box>
      </BoxContentSection.Container>
      <BoxContentSection.Line />
    </BoxContentSection.Root>
  )
}
