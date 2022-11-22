import { styled } from '..'

export const Line = styled('hr', {
  borderColor: '$green700',
  border: '2px solid',
  width: 'calc(96% + 2rem)',
})

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

export const FormContainer = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  gap: '4rem',
})

export const InputContainer = styled('div', {
  flex: 1,

  label: {
    display: 'block',
    margin: '$5 0',
  },

  button: {
    width: '80%',
    margin: '0 auto',
  },
})

export const TextAreaContainer = styled('div', {
  flex: 1,

  textArea: {
    width: '100%',
    minHeight: '80%',
  },
})
