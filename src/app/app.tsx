import type { AppProps } from 'next/app'
import { Quicksand } from 'next/font/google'
import { Layout } from '@/shared/ui/components/Layout'
import './globals.css'

const quicksand = Quicksand({ subsets: ['latin'] })




 
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout className={`${quicksand.className}`}>
      <Component {...pageProps} />
    </Layout>
  )
}