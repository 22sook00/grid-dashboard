import { Global } from '@emotion/react'
import { globalStyles } from 'src/styles/global'
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Global styles={globalStyles} />
      <Component {...pageProps} />
    </>
  )
}
