import { Background, SectionContent } from '@capfds-ui/react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export const BackgroundCircle = ({ children, ...props }) => {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    mounted && (
      <Background.Root
        theme={theme}
        {...props}
        css={{
          overflow: 'hidden',
          padding: '$5 0',

          p: {
            textAlign: 'center',
          },
        }}
      >
        <Background.CL />
        <Background.Content>
          <SectionContent>{children}</SectionContent>
        </Background.Content>
        <Background.CR />
      </Background.Root>
    )
  )
}

export const BackgroundNoCircle = ({ children, ...props }) => {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    mounted && (
      <Background.Root {...props} theme={theme}>
        <Background.Content>
          <SectionContent>{children}</SectionContent>
        </Background.Content>
      </Background.Root>
    )
  )
}
