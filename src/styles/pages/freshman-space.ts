import { styled } from '..'

export const HeadingContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  h3: {
    textAlign: 'center',
    display: 'inline-block',
    margin: '$5 auto',

    span: {
      marginLeft: '1rem',
    },
  },

  p: {
    textAlign: 'start',
  },
})

export const ContentContainer = styled('div', {
  margin: '$5 0',
  display: 'flex',
  flexDirection: 'column',
  h3: {
    textAlign: 'center',
    display: 'inline-block',
    margin: '$5 auto',

    span: {
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
})

export const Line = styled('hr', {
  borderColor: '$green700',
  border: '2px solid',
  width: 'calc(96% + 2rem)',
})

export const FaqContainer = styled('div', {
  '.header': {
    display: 'flex',
    alignItems: 'end',
    justifyContent: 'space-between',
  },
  '.content': {
    margin: '$10 0',
  },

  hr: {
    width: '100%',
    borderColor: '$green700',
  },
})
