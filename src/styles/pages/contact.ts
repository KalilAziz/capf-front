import { styled } from '..'

export const ContactContainer = styled('div', {
  backgroundColor: '$green400',
  borderRadius: '10px',
  padding: '$4 $3',

  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',

  a: {
    flex: 1,
    textDecoration: 'none',

    padding: '10px 0',
    maxWidth: '320px',
    wordBreak: 'breakAll',

    display: 'flex',
    alignItems: 'center',
  },

  button: {
    backgroundColor: '$green400',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '10px',
    width: '100%',
    height: '100%',

    display: 'flex',
    alignItems: 'center',

    span: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '5px',

      svg: {
        minWidth: '40px',
        minHeight: '40px',

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        color: '$yellow900',
      },
    },
  },
})
