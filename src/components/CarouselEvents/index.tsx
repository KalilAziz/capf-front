import {
  arrowStyles,
  CarouselComponent,
  indicatorStyles,
  Text,
} from '@capfds-ui/react'
import { MdOutlineArrowBackIosNew } from 'react-icons/md'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

export const CarrouselEvents = () => {
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
      <CarouselComponent.Item>
        <CarouselComponent.Content>
          <Text>Evento: XXXXX</Text>
        </CarouselComponent.Content>
      </CarouselComponent.Item>
      <CarouselComponent.Item>
        <CarouselComponent.Content>
          <Text>Evento: XXXXX</Text>
        </CarouselComponent.Content>
      </CarouselComponent.Item>
      <CarouselComponent.Item>
        <CarouselComponent.Content>
          <Text>Evento: XXXXX</Text>
        </CarouselComponent.Content>
      </CarouselComponent.Item>
    </Carousel>
  )
}
