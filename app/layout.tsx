import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Tab Rescuer — Recover Lost Browser Sessions',
  description: 'Auto-backup and restore browser tabs, forms, and scroll positions across crashes and restarts.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="ffce314b-7f05-48aa-8733-2dd80ace5125"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
