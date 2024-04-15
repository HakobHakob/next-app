import type { Metadata } from "next"
import { Inter } from "next/font/google" // Sa kpnum a google fonter@
import "./globals.css"
import { TheHeader } from "@/components/TheHeader"
import { TheFooter } from "@/components/TheFooter"

const inter = Inter({ subsets: ["latin"] })

// Es Metadata-n CEO-i hamar a u cankalia amen ejum drvi
export const metadata: Metadata = {
  title: "Next App", // Sa mer projecti anunna dnm browseri tab-i mej
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TheHeader />
        <main className="container ">{children}</main>
        <TheFooter />
      </body>
    </html>
  )
}