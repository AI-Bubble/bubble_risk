import './globals.css'

export const metadata = {
  title: 'AI Risk Dashboard',
  description: 'Dashboard',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
