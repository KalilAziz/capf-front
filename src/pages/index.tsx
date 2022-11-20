import { Button, Heading, Text } from '@capfds-ui/react'
import { useTheme } from 'next-themes'
import { BsBoxArrowInRight } from 'react-icons/bs'
import { CarrouselEvents } from '../components/CarouselEvents'

import { GetStaticProps } from 'next'
import axios from 'axios'
import { CarouselPartners } from '../components/CarouselPartners'
import { Products } from '../components/Products'
import {
  BackgroundCircle,
  BackgroundNoCircle,
} from '../components/BackgroundSession'
import Link from 'next/link'
import { HeroHome } from '../components/HeroHome'

export interface Product {
  products: [
    {
      id: string
      name: string
      description: string
      value: number
      image: {
        name: string
        url: string
        width: number
        height: number
      }
    },
  ]
  partnerships: [
    {
      id: string
      image: {
        name: string
        url: string
        width: number
        height: number
      }
    },
  ]
}

export default function Home({ products, partnerships }: Product) {
  const { theme } = useTheme()
  return (
    <>
      <HeroHome />
      <BackgroundCircle theme={theme}>
        <CarrouselEvents />
        <Heading size="4xl">
          <Text>Calendário de Eventos</Text>
        </Heading>
        <Button css={{ margin: 'auto' }}>
          <Text colors="green700" size="lg">
            TextComponent
          </Text>
          <BsBoxArrowInRight />
        </Button>
      </BackgroundCircle>

      <BackgroundNoCircle
        css={{
          overflow: 'hidden',
          backgroundColor: '$green300',

          p: {
            textAlign: 'center',
          },
        }}
      >
        <Heading size="2xl">
          <Text
            colors="green50"
            css={{
              margin: '$10',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '$2',
            }}
          >
            <BsBoxArrowInRight /> Nossos Parceiros
          </Text>
        </Heading>
        <CarouselPartners partnerships={partnerships} />
      </BackgroundNoCircle>

      <BackgroundCircle theme={theme}>
        <Heading size="2xl">
          <Text css={{ textAlign: 'center' }}>Nossos Produtos</Text>
        </Heading>
        <Products products={products} />
        <Link
          href="/products"
          style={{ color: 'inherit', textDecoration: 'none' }}
        >
          <Button css={{ margin: 'auto' }}>
            <Text colors="green700" size="lg">
              Ver produtos
            </Text>
            <BsBoxArrowInRight />
          </Button>
        </Link>
      </BackgroundCircle>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const ProductStrapi = await axios
    .get('https://strapi-v4-capf.herokuapp.com/api/products?populate=deep')
    .then((response) => {
      return response.data
    })

  const products = ProductStrapi.data.map((product) => {
    return {
      id: product.attributes.product[0].id,
      name: product.attributes.product[0].Product_name,
      value: product.attributes.product[0].Product_value,
      size: product.attributes.product[0].Product_size,
      image: {
        name: product.attributes.product[0].Product_image.data.attributes.name,
        url: product.attributes.product[0].Product_image.data.attributes.url,
        width:
          product.attributes.product[0].Product_image.data.attributes.width,
        height:
          product.attributes.product[0].Product_image.data.attributes.height,
      },
    }
  })

  const PartnershipStrapi = await axios
    .get('https://strapi-v4-capf.herokuapp.com/api/home?populate=deep')
    .then((response) => {
      return response.data
    })

  const partnerships = PartnershipStrapi.data.attributes.Partnership.map(
    (partnership) => {
      return {
        id: partnership.id,
        image: {
          name: partnership.Partner_icon.data.attributes.name,
          url: partnership.Partner_icon.data.attributes.url,
          width: partnership.Partner_icon.data.attributes.width,
          height: partnership.Partner_icon.data.attributes.height,
        },
      }
    },
  )

  return {
    props: {
      products,
      partnerships,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  }
}
