import { Button, Header, Text } from '@capfds-ui/react'
import { IoIosArrowDown } from 'react-icons/io'
import { BsBoxArrowInRight } from 'react-icons/bs'
import LogoCapf from '../assets/images/logoCapf.svg'

import Link from 'next/link'
import Image from 'next/image'

import { useContext, useEffect } from 'react'
import { ThemeContext } from '../context/themeContext/context'

import { styled } from '../styles'
import { setTheme } from '../context/themeContext/actions'

const ButtonTheme = styled('button', {
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
export const HeaderComponent = () => {
  const { state, dispatch } = useContext(ThemeContext)

  useEffect(() => {
    if (state.light !== undefined) {
    }
    window.localStorage.setItem('theme', state.theme)
  }, [state.theme])

  console.log(state.light)

  return (
    <Header.Root>
      <Header.Logo>
        <Link href="/">
          <Image src={LogoCapf} alt="Logo" />
        </Link>
      </Header.Logo>
      <Header.Navbar>
        <Header.Ul>
          <Header.Li>Home</Header.Li>

          <Header.Li>Produtos</Header.Li>

          <Header.Li>
            <span>
              Quem Somos <IoIosArrowDown />
            </span>
            <Header.Ul>
              <Header.Li>Contato</Header.Li>
              <Header.Li>Reclamações</Header.Li>
            </Header.Ul>
          </Header.Li>

          <Header.Li>
            <span>
              Áreas Acadêmicas <IoIosArrowDown />
            </span>

            <Header.Ul>
              <Header.Li>Grupo Estudantil</Header.Li>
              <Header.Li>Espaço dos Calouros</Header.Li>
              <Header.Li>Colig</Header.Li>
            </Header.Ul>
          </Header.Li>

          <Header.Li>Eventos</Header.Li>

          <Header.Li>
            <Button>
              <Text colors="green500" size="lg">
                Login
              </Text>
              <BsBoxArrowInRight />
            </Button>
          </Header.Li>
          <Header.Li>
            <ButtonTheme
              onClick={() => {
                setTheme(dispatch, !state.light)
              }}
            >
              <Header.Theme theme={state.light} />
            </ButtonTheme>
          </Header.Li>
        </Header.Ul>
      </Header.Navbar>
    </Header.Root>
  )
}
