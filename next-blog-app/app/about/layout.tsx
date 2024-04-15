import Link from "next/link"

export default function AboutLayout({
    children,
  }: Readonly<{
    children: React.ReactNode
  }>) {
    return (
        <div>
            <h1>About us</h1>
            <ul>
                {/** Stex grum enq amboxj path@. href="about/contacts" */}
                <li><Link href="/about/contacts">Contacts</Link></li> 
                <li><Link href="/about/team">Team</Link></li> 
            </ul>
            {children} 
            {/**childrenner@ about folderi meji page.tsx filenrn en kam folderneri meji page.tsx-er@ */}
        </div>
    )
  }