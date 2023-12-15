import '@/app/global.scss'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Time Table for Aliah CSE 2nd year",
  description: "This website will show the time table for Aliah University, CSE students. And if any lecture time is modified by the professor then you can modify it so."

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}