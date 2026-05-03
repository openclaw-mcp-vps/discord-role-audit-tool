import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Discord Role Audit Tool — Visualize Server Permission Complexity",
  description: "Map out role hierarchies and permission overlaps in Discord servers to identify security gaps. Built for server admins and community managers."
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="13ad8188-03e8-4403-b62f-e488037e2af3"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
