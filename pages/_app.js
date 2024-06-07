import { Global } from '@emotion/react'
import { globalStyles } from 'src/styles/global'
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'
import { RecoilRoot } from 'recoil'

export default function App({ Component, pageProps }) {
  return (
    <>
      <RecoilRoot>
        <Global styles={globalStyles} />
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  )
}
