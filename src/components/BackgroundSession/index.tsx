import { Background, SectionContent } from '@capfds-ui/react'

export const BackgroundCircle = ({ children, theme, ...props }) => {
  return (
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
}

export const BackgroundNoCircle = ({ children, ...props }) => {
  return (
    <Background.Root {...props}>
      <Background.Content>
        <SectionContent>{children}</SectionContent>
      </Background.Content>
    </Background.Root>
  )
}
