import { Inter } from 'next/font/google'
import './globals.css'
import { Provider } from './Provider'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ClickLunch',
  description: 'artick monkeys god y el tercer album de mcr es god (no leo lloros)',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  )
}