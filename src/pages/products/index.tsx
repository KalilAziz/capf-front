import { BackgroundNoCircle } from '../../components/BackgroundSession'
import { Products } from '../../components/Products'
import { useTheme } from 'next-themes'
import axios from 'axios'
import { GetStaticProps } from 'next'
import { Hero } from '../../components/Hero'
import Image from 'next/image'
import HeroProduct from '../../assets/images/HeroProduct.svg'
export default function Producs({ products }) {
  const { theme } = useTheme()
  return (
    <>
      <Hero title="Confira nossos Produtos">
        <Image src={HeroProduct} alt="" />
      </Hero>
      <BackgroundNoCircle theme={theme}>
        <Products products={products} />
      </BackgroundNoCircle>
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

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  }
}
