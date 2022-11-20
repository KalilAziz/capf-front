import { styled } from '../../styles'
import { Slot } from '@radix-ui/react-slot'

export const ButtonTheme = styled('button', {
  all: 'unset',
  display: 'flex',
  cursor: 'pointer',
  alignItems: 'center',
  justifyContent: 'center',
  width: '30px',
  height: '30px',

  svg: {
    objectFit: 'cover',
    width: '100%',
    height: '100%',
  },
})

export const Theme = styled(Slot, {
  div: {
    all: 'unset',
    display: 'none',
  },
})
