import { styled } from '../../styles'

export const ContentContainer = styled('div', {
  backgroundColor: '$green600',
  display: 'flex',
  justifyContent: 'space-between',
  borderRadius: '$lg',
  padding: '$3 $4',

  img: {
    minWidth: '300px',
    maxWidth: '300px',
    height: 'auto',
    objectFit: 'cover',
    borderRadius: '$lg',
  },
})
