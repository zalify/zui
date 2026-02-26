import type { Metadata } from 'next'
import Script from 'next/script'
import { ThemeProvider } from 'next-themes'
import type { PropsWithChildren } from 'react'
import { Suspense } from 'react'
import { cx } from 'styled-system/css'
import { Toaster } from '@/components/ui'
import { Navbar } from '~/components/navigation/navbar'
import { ThemeTokens } from '~/components/theme/theme-tokens'
import { dmSans, inter, outfit, roboto, space } from './fonts'
import './index.css'
import { ThemeAttributes } from '~/components/theme/theme-attributes'
import { Analytics } from "@vercel/analytics/next"

export default async function RootLayout(props: PropsWithChildren) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cx(
        outfit.variable,
        inter.variable,
        roboto.variable,
        space.variable,
        dmSans.variable,
      )}
    >
      <head>
        <ThemeTokens />
        <Script src="https://plausible.io/js/plausible.js" data-domain="zui.sh" />
        <Suspense fallback={null}>
          <ThemeAttributes />
        </Suspense>
      </head>
      <body>
        <ThemeProvider attribute="class" disableTransitionOnChange>
          <Navbar />
          {props.children}
          <Toaster />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  metadataBase: new URL('https://zui.sh'),
  applicationName: 'ZUI',
  title: {
    default: 'Home | ZUI',
    template: '%s | ZUI',
  },
  description:
    'Beautifully designed components built with Ark UI and Panda CSS that work with a variety of JS frameworks.',
  manifest: '/site.webmanifest',
  keywords: ['Panda', 'CSS', 'Ark UI', 'Components', 'React', 'Solid'],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://zui.sh',
    description:
      'Beautifully designed components built with Ark UI and Panda CSS that work with a variety of JS frameworks.',
  },
  twitter: {
    creator: '@ZuiDevs',
  },
}
