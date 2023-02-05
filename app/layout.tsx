import './globals.css'

import Kontakt from '@/components/Kontakt'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className='flex flex-col'>
        {children}
        <Kontakt/>
      </body>
    </html>
  )
}
