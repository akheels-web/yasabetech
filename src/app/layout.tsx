import type { Metadata, Viewport } from "next"
import { Plus_Jakarta_Sans, Outfit } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
})

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  display: "swap",
})

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
}

export const metadata: Metadata = {
  title: "Yasabe Technologies | Enterprise Networking, AI Services & Managed IT",
  description:
    "Yasabe Technologies provides authorized enterprise networking, sovereign private AI infrastructure, and 24/7 managed IT services with guaranteed SLA performance. Connect. Secure. Empower.",
  keywords: [
    "Enterprise Networking",
    "AI Services",
    "Managed IT Services",
    "Yasabe Technologies",
    "SD-WAN",
    "Wi-Fi 7",
    "GPU Compute",
    "Cisco Partner",
    "NVIDIA Partner",
  ],
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${outfit.variable} light scroll-smooth`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-sky-500/20 selection:text-sky-900">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
