import { styled } from '..'

export const HeadingContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  h2: {
    textAlign: 'center',
    display: 'inline-block',
    margin: '$5 auto',

    span: {
      marginLeft: '1rem',
    },
  },

  p: {
    textAlign: 'center',
  },
})

export const ContentContainer = styled('div', {
  margin: '$5 0',
  h3: {
    display: 'inline-block',

    span: {
      display: 'block',
      marginLeft: '1rem',
    },

    '@bp1': {
      display: 'block',
      margin: '1rem 0',
      span: {
        textAlign: 'center',
      },
    },
  },

  img: {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
  },

  '.imageContainer, .descriptionContainer, .subscribeContainer, .worksContainer':
    {
      margin: '0 0 $5 0',
    },
})

export const Line = styled('hr', {
  borderColor: '$green700',
  border: '2px solid',
  width: 'calc(96% + 2rem)',
})
