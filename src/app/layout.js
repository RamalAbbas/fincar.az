import { Inter } from 'next/font/google'
import './globals.css'
import ClientLayout from '../components/Common/ClientLayout/ClientLayout'
import Layout from '../components/Common/Layout/Layout'

const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'Anbardan Al',
//   description: 'anbardan al',
// }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientLayout>
          <Layout>{children}</Layout>
        </ClientLayout>
      </body>
    </html>
  )
}
