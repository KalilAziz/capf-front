import type { AppProps } from 'next/app'
import { HeaderComponent } from '../components/Header'
import { ThemeProvider } from '../context/themeContext'
import { globalStyles } from '../styles/global'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider>
        <HeaderComponent />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
