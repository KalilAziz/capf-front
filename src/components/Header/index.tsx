import { Button, Header, Text } from '@capfds-ui/react'
import { IoIosArrowDown } from 'react-icons/io'
import { BsBoxArrowInRight, BsFillSunFill, BsMoon } from 'react-icons/bs'
import LogoCapf from '../../assets/images/logoCapf.svg'

import Link from 'next/link'
import Image from 'next/image'

import { useTheme } from 'next-themes'
import { ButtonTheme, Theme } from './styles'
import { useEffect, useState } from 'react'

export const HeaderComponent = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  const LinkStyle = {
    color: 'inherit',
    textDecoration: 'none',
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    mounted && (
      <Header.Root>
        <Header.Logo>
          <Link href="/">
            <Image src={LogoCapf} alt="Logo" />
          </Link>
        </Header.Logo>
        <Header.Navbar css={{ zIndex: '5' }}>
          <Header.Ul>
            <Link href="/" style={LinkStyle}>
              <Header.Li>Home</Header.Li>
            </Link>

            <Link href="/products" style={LinkStyle}>
              <Header.Li>Produtos</Header.Li>
            </Link>

            <Header.Li>
              <Link href="/about-us" style={LinkStyle}>
                <span>
                  Quem Somos <IoIosArrowDown />
                </span>
              </Link>
              <Header.Ul>
                <Link href="/about-us/contact" style={LinkStyle}>
                  <Header.Li>Contato</Header.Li>
                </Link>
                <Link href="/about-us/complaint" style={LinkStyle}>
                  <Header.Li>Reclamações</Header.Li>
                </Link>
              </Header.Ul>
            </Header.Li>

            <Header.Li>
              <span>
                Áreas Acadêmicas <IoIosArrowDown />
              </span>

              <Header.Ul>
                <Link href="/academic-areas/student-group" style={LinkStyle}>
                  <Header.Li>Grupo Estudantil</Header.Li>
                </Link>
                <Link href="/academic-areas/freshman-space" style={LinkStyle}>
                  <Header.Li>Espaço dos Calouros</Header.Li>
                </Link>
                <Link href="/academic-areas/colig" style={LinkStyle}>
                  <Header.Li>Colig</Header.Li>
                </Link>
              </Header.Ul>
            </Header.Li>

            <Link href="/events" style={LinkStyle}>
              <Header.Li>Eventos</Header.Li>
            </Link>

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
                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              >
                <Theme>
                  {theme === 'light' ? <BsFillSunFill /> : <BsMoon />}
                </Theme>
              </ButtonTheme>
            </Header.Li>
          </Header.Ul>
        </Header.Navbar>
      </Header.Root>
    )
  )
}
