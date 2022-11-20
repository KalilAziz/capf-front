import { ProductsArea, Text } from '@capfds-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import { ProductsContainer } from './styles'

export const Products = ({ products }) => {
  return (
    <ProductsContainer>
      {products.map((product, key) => (
        <ProductsArea.Root key={key} css={{ margin: 0 }}>
          <ProductsArea.Image>
            <Image
              src={product.image.url}
              alt={product.name}
              width={`${product.image.width}`}
              height={product.image.height}
            />
          </ProductsArea.Image>

          <div>
            <ProductsArea.container>{product.name}</ProductsArea.container>
            <Link
              style={{ color: 'inherit', textDecoration: 'none' }}
              href={`/products/${product.id}`}
            >
              <ProductsArea.Button>
                <Text css={{ color: '$white' }} size="xl">
                  Saiba Mais
                </Text>
              </ProductsArea.Button>
            </Link>
          </div>
        </ProductsArea.Root>
      ))}
    </ProductsContainer>
  )
}
