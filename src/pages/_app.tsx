import type { AppProps } from 'next/app'
import { HeaderComponent } from '../components/Header'
import { globalStyles } from '../styles/global'
import { ThemeProvider } from 'next-themes'
import { FooterComponent } from '../components/Footer'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider enableColorScheme={false}>
        <HeaderComponent />
        <Component {...pageProps} />
        <FooterComponent />
      </ThemeProvider>
    </>
  )
}
