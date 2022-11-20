import { BoxContentSection, Button, Text } from '@capfds-ui/react'
import Image from 'next/image'
import Link from 'next/link'

interface ProductComponentProps {
  product: {
    id: string
    name: string
    value: string
    size: string
    image: {
      name: string
      url: string
      width: number
      height: number
    }
  }
}

const LinkStyle = {
  color: 'inherit',
  textDecoration: 'none',
}

export const ProductComponent = ({ product }: ProductComponentProps) => {
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
            <Image
              src={product.image.url}
              width={product.image.width}
              height={product.image.height}
              alt=""
            />
            <Text colors="green900" size="2xl">
              <strong>{product.name}</strong>
            </Text>
            <Text size="xl" colors="yellow900">
              <strong>{product.value}</strong>
            </Text>
          </BoxContentSection.BoxImage>
          <BoxContentSection.BoxContent>
            <Text size="2xl">
              <strong>Como pedir seu Produto:</strong>
            </Text>
            <Text size="xl">
              Nossas compras são realizadas através do whatsapp! Então basta
              seguir o passo a passo abaixo:
            </Text>
            <Text>
              1. Mande uma mensagem no nosso whatsapp para que possamos reservar
              sua unidade.
            </Text>
            <Text>
              2. Marque um dia para o pagamento e a entrega do produto;
            </Text>
            <Link style={LinkStyle} href="https://wa.me/5564984562437">
              <Button css={{ margin: '$4 auto' }}>
                <Text as="span" size="xl" colors="green500">
                  Compre pelo Whattsapp
                </Text>
              </Button>
            </Link>
          </BoxContentSection.BoxContent>
        </BoxContentSection.Content>
        <BoxContentSection.Box></BoxContentSection.Box>
      </BoxContentSection.Container>
      <BoxContentSection.Line />
    </BoxContentSection.Root>
  )
}
