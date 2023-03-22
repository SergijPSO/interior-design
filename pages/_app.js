import '@/styles/scss/globals.scss'
import '@/styles/scss/reset.scss'
import Layout from '../components/Layout'

export default function App({ Component, pageProps }) {
  return (
    <Layout>
        <Component {...pageProps} />
    </Layout>
  )
}
