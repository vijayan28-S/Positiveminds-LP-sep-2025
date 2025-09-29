import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://yourdomain.com'),
  title: 'Top-Rated After-School Math & Abacus Programs | Elementary & Middle School',
  description: 'Expert math tutoring for K-8 students. Certified abacus training improves focus & mental math. 92% grade improvement rate. Free assessment available.',
  keywords: 'after-school math, abacus program, elementary math tutoring, middle school math help, mental math training, math homework help',
  authors: [{ name: 'Positive Mind Learning Center' }],
  creator: 'Positive Mind Learning Center',
  publisher: 'Positive Mind Learning Center',
  openGraph: {
    title: 'Top-Rated After-School Math & Abacus Programs',
    description: 'Expert math tutoring for K-8 students. Certified abacus training improves focus & mental math. 92% grade improvement rate.',
    url: 'https://yourdomain.com/after-school-math-abacus',
    siteName: 'Positive Mind Learning Center',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Students learning math with abacus',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Top-Rated After-School Math & Abacus Programs',
    description: 'Expert math tutoring for K-8 students. Certified abacus training improves focus & mental math.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "Positive Mind Learning Center",
              "description": "After-school math and abacus programs for elementary and middle school students",
              "url": "https://yourdomain.com/after-school-math-abacus",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Your City",
                "addressRegion": "Your State",
                "addressCountry": "US"
              },
              "telephone": "+1-555-0123",
              "email": "info@yourdomain.com",
              "openingHours": "Mo-Fr 15:00-19:00, Sa 09:00-15:00",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Math Programs",
                "itemListElement": [
                  {
                    "@type": "Course",
                    "name": "Elementary Math Tutoring",
                    "description": "K-5 foundational math skills and homework help",
                    "provider": {
                      "@type": "EducationalOrganization",
                      "name": "Positive Mind Learning Center"
                    }
                  },
                  {
                    "@type": "Course", 
                    "name": "Middle School Math Prep",
                    "description": "Grades 6-8 pre-algebra and geometry preparation",
                    "provider": {
                      "@type": "EducationalOrganization",
                      "name": "Positive Mind Learning Center"
                    }
                  },
                  {
                    "@type": "Course",
                    "name": "Abacus Math Training",
                    "description": "Mental math and concentration improvement program",
                    "provider": {
                      "@type": "EducationalOrganization",
                      "name": "Positive Mind Learning Center"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
