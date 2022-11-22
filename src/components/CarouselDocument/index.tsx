import {
  arrowStyles,
  Button,
  CarouselComponent,
  indicatorStyles,
  Text,
} from '@capfds-ui/react'
import { MdOutlineArrowBackIosNew } from 'react-icons/md'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import DocumentImage from '../../assets/images/document.svg'
import { useState } from 'react'
import Image from 'next/image'
export interface CarouselDocumentProps {
  documents: {
    id: number
    name: string
    media: {
      name: string
      url: string
    }
  }[]
}

export const CarrouselDocument = ({ documents }: CarouselDocumentProps) => {
  console.log(documents[0].media.url)
  const [isView, setIsView] = useState(false)

  return (
    <Carousel
      infiniteLoop
      showStatus={false}
      showThumbs={false}
      statusFormatter={(current, total) =>
        `Current slide: ${current} / Total: ${total}`
      }
      renderArrowPrev={(onClickHandler, hasPrev, label) =>
        hasPrev && (
          <button
            type="button"
            onClick={onClickHandler}
            title={label}
            style={{ ...arrowStyles, left: 15 }}
          >
            <MdOutlineArrowBackIosNew style={{ fontSize: '20px' }} />
          </button>
        )
      }
      renderArrowNext={(onClickHandler, hasNext, label) =>
        hasNext && (
          <button
            type="button"
            onClick={onClickHandler}
            title={label}
            style={{ ...arrowStyles, right: 15 }}
          >
            <MdOutlineArrowBackIosNew
              style={{ transform: 'rotate(180deg)', fontSize: '20px' }}
            />
          </button>
        )
      }
      renderIndicator={(onClickHandler, isSelected, index, label) => {
        if (isSelected) {
          return (
            <li
              style={{ ...indicatorStyles, background: '#000' }}
              aria-label={`Selected: ${label} ${index + 1}`}
              title={`Selected: ${label} ${index + 1}`}
            />
          )
        }
        return (
          <li
            style={indicatorStyles}
            onClick={onClickHandler}
            onKeyDown={onClickHandler}
            value={index}
            key={index}
            role="button"
            tabIndex={0}
            title={`${label} ${index + 1}`}
            aria-label={`${label} ${index + 1}`}
          />
        )
      }}
    >
      {documents.map((document, key) => (
        <CarouselComponent.Item key={key}>
          <CarouselComponent.Content
            css={{
              maxWidth: '500px',
              gap: '$4',
              transition: 'all 0.3s ease-in-out',
            }}
          >
            <Text colors="green900" size="2xl">
              <strong>{document.name}</strong>
            </Text>
            {isView && (
              <iframe src={document.media.url} width="100%" height="500px" />
            )}
            {!isView && <Image src={DocumentImage} alt="Document" />}
            <Button onClick={() => setIsView(!isView)}>
              <Text size="sm" color="white">
                Visualizar
              </Text>
            </Button>
          </CarouselComponent.Content>
        </CarouselComponent.Item>
      ))}
    </Carousel>
  )
}
