import { useEffect } from 'react'

export function SEO() {
  useEffect(() => {
    // ── Meta tags básicas ──────────────────────────────────
    const metas: Record<string, string> = {
      description: 'Fábrica de alianças e joias em ouro 18k localizada na Sé, São Paulo. Desde 1991.',

      // Open Graph (WhatsApp, Facebook, Instagram)
      'og:type': 'website',
      'og:url': 'https://monarcajoias.com.br',
      'og:title': 'Monarca Jóias — Alianças e Joias em Ouro 18k',
      'og:description': 'Fábrica de alianças e joias em ouro 18k na Sé, São Paulo. Atendimento exclusivo desde 1991.',
      'og:image': 'https://monarcajoias.com.br/images/og-image.jpg',
      'og:image:width': '1200',
      'og:image:height': '630',
      'og:locale': 'pt_BR',
      'og:site_name': 'Monarca Jóias',

      // Twitter Card (também usado pelo WhatsApp como fallback)
      'twitter:card': 'summary_large_image',
      'twitter:title': 'Monarca Jóias — Alianças e Joias em Ouro 18k',
      'twitter:description': 'Fábrica de alianças e joias em ouro 18k na Sé, São Paulo. Atendimento exclusivo desde 1991.',
      'twitter:image': 'https://monarcajoias.com.br/images/og-image.jpg',
    }

    const injected: HTMLMetaElement[] = []

    Object.entries(metas).forEach(([key, content]) => {
      const attr = key.startsWith('og:') ? 'property' : 'name'
      const existing = document.head.querySelector(`meta[${attr}="${key}"]`)
      if (existing) return

      const meta = document.createElement('meta')
      meta.setAttribute(attr, key)
      meta.setAttribute('content', content)
      document.head.appendChild(meta)
      injected.push(meta)
    })

    // ── JSON-LD ────────────────────────────────────────────
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'JewelryStore',
      name: 'Monarca Jóias',
      url: 'https://monarcajoias.com.br',
      logo: 'https://monarcajoias.com.br/images/logo.png',
      image: 'https://monarcajoias.com.br/images/og-image.jpg',
      description: 'Fábrica de alianças e joias em ouro 18k localizada na Sé, São Paulo. Desde 1991.',
      priceRange: '$$$',
      telephone: '+55-11-3242-0141',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Rua Quintino Bocaiuva, 84 — 10º andar',
        addressLocality: 'São Paulo',
        addressRegion: 'SP',
        postalCode: '01004-010',
        addressCountry: 'BR',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: -23.549369461153294,
        longitude: -46.63764572388411,
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '18:00',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Saturday'],
          opens: '09:00',
          closes: '14:00',
        },
      ],
      sameAs: [
        'https://www.instagram.com/monarcajoias',
        'https://www.facebook.com/MonarcaFabricaDeAliancas',
      ],
    })

    document.head.appendChild(script)

    return () => {
      injected.forEach((meta) => document.head.removeChild(meta))
      document.head.removeChild(script)
    }
  }, [])

  return null
}