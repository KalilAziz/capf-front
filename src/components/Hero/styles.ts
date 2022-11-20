import { Slot } from '@radix-ui/react-slot'
import { styled } from '../../styles'
import { SectionContent } from '@capfds-ui/react'

export const Container = styled('div', {
  backgroundColor: '$green150',
  zIndex: 1,

  [`& ${SectionContent}`]: {
    position: 'relative',
    height: 250,

    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
})

export const TitleHero = styled('h2', {
  fontSize: '$4xl',
})

export const ImageHero = styled(Slot, {
  position: 'absolute',
  right: 0,
  bottom: '-20%',
  zIndex: 2,
})
