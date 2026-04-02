import { useEffect } from 'react'

export function SEO() {
  useEffect(() => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'JewelryStore',
      name: 'Monarca Jóias',
      url: 'https://monarcajoias.com.br',
      logo: 'https://monarcajoias.com.br/images/logo.png',
      image: 'https://monarcajoias.com.br/images/logo.png',
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
      document.head.removeChild(script)
    }
  }, [])

  return null
}