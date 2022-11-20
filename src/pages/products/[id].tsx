import axios from 'axios'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { BackgroundNoCircle } from '../../components/BackgroundSession'
import { Hero } from '../../components/Hero'
import { ProductComponent } from '../../components/Product'
import HeroProduct from '../../assets/images/HeroProduct.svg'

interface ProductProps {
  products: {
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

export default function Product({ products }: ProductProps) {
  const { isFallback } = useRouter()
  const { theme } = useTheme()

  if (isFallback) return <p>Carregando...</p>

  return (
    <>
      <Hero title="Detalhes do Produtos">
        <Image src={HeroProduct} alt="" />
      </Hero>
      <BackgroundNoCircle theme={theme}>
        <ProductComponent product={products} />
      </BackgroundNoCircle>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { id: '1' } },
      { params: { id: '2' } },
      { params: { id: '3' } },
    ],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const productId = Number(params.id)

  const products = await axios
    .get(
      `https://strapi-v4-capf.herokuapp.com/api/products/${productId}?populate=deep`,
    )
    .then((response) => {
      return response.data
    })

  console.log(products.data.attributes.product[0])

  return {
    props: {
      products: {
        id: products.data.id,
        name: products.data.attributes.product[0].Product_name,
        value: products.data.attributes.product[0].Product_value,
        size: products.data.attributes.product[0].Product_size,
        image: {
          name: products.data.attributes.product[0].Product_image.data
            .attributes.name,
          url: products.data.attributes.product[0].Product_image.data.attributes
            .url,
          width:
            products.data.attributes.product[0].Product_image.data.attributes
              .width,
          height:
            products.data.attributes.product[0].Product_image.data.attributes
              .height,
        },
      },
    },
    revalidate: 60 * 60 * 24, // 24 hours
  }
}
