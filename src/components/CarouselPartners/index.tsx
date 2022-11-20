import {
  arrowStyles,
  CarouselComponent,
  indicatorStyles,
} from '@capfds-ui/react'
import Image from 'next/image'
import { MdOutlineArrowBackIosNew } from 'react-icons/md'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

export const CarouselPartners = ({ partnerships }) => {
  console.log(partnerships)
  return (
    <Carousel
      infiniteLoop
      // centerMode
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
      {partnerships.map((item, key) => (
        <CarouselComponent.Item key={key} style={{ padding: '50px' }}>
          <CarouselComponent.Content
            border="full"
            css={{
              maxWidth: '300px',
              maxHeight: '300px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Image
              src={item.image.url}
              width={300}
              height={300}
              alt={item.image.name}
            />
          </CarouselComponent.Content>
          <CarouselComponent.Legend></CarouselComponent.Legend>
        </CarouselComponent.Item>
      ))}
    </Carousel>
  )
}
