export type ProductTranslation = {
  name: string
  material: string
  description: string
}

export type Product = {
  id: number
  image: string
  translations: {
    pt: ProductTranslation
    en: ProductTranslation
    es: ProductTranslation
  }
}

export const products: Product[] = [
  {
    id: 1,
    image: '/images/alliances.jpg',
    translations: {
      pt: { name: 'Par de Alianças Especial', material: 'Ouro 18k', description: '✨ Feminina 5mm com brilhantes • Masculina 6mm personalizada' },
      en: { name: 'Special Alliance Pair', material: '18k Gold', description: '✨ 5mm feminine with diamonds • 6mm personalized masculine' },
      es: { name: 'Par de Alianzas Especial', material: 'Oro 18k', description: '✨ Femenina 5mm con brillantes • Masculina 6mm personalizada' },
    },
  },
  {
    id: 2,
    image: '/images/two_alliance_flower.jpg',
    translations: {
      pt: { name: 'Aliança Flor', material: 'Ouro 18k', description: '✨ Design floral exclusivo • Símbolo de delicadeza e amor eterno' },
      en: { name: 'Flower Alliance', material: '18k Gold', description: '✨ Exclusive floral design • Symbol of delicacy and eternal love' },
      es: { name: 'Alianza Flor', material: 'Oro 18k', description: '✨ Diseño floral exclusivo • Símbolo de delicadeza y amor eterno' },
    },
  },
  {
    id: 3,
    image: '/images/beautifull_alliance.jpg',
    translations: {
      pt: { name: 'Aliança Luxo', material: 'Ouro 18k', description: '✨ Acabamento premium • Para quem quer o melhor do melhor' },
      en: { name: 'Luxury Alliance', material: '18k Gold', description: '✨ Premium finish • For those who want the very best' },
      es: { name: 'Alianza Lujo', material: 'Oro 18k', description: '✨ Acabado premium • Para quienes quieren lo mejor' },
    },
  },
  {
    id: 4,
    image: '/images/blue_alliance.jpg',
    translations: {
      pt: { name: 'Anel com Safira Azul', material: 'Ouro 18k com Safira', description: '✨ Pedra safira azul royal • Elegância e exclusividade' },
      en: { name: 'Blue Sapphire Ring', material: '18k Gold with Sapphire', description: '✨ Royal blue sapphire stone • Elegance and exclusivity' },
      es: { name: 'Anillo con Zafiro Azul', material: 'Oro 18k con Zafiro', description: '✨ Piedra zafiro azul real • Elegancia y exclusividad' },
    },
  },
  {
    id: 5,
    image: '/images/gold_alliance.jpg',
    translations: {
      pt: { name: 'Aliança Dourada', material: 'Ouro 18k', description: '✨ Clássica e atemporal • Perfeita para eternizar seu momento' },
      en: { name: 'Golden Alliance', material: '18k Gold', description: '✨ Classic and timeless • Perfect to eternalize your moment' },
      es: { name: 'Alianza Dorada', material: 'Oro 18k', description: '✨ Clásica y atemporal • Perfecta para eternizar tu momento' },
    },
  },
  {
    id: 6,
    image: '/images/par_alliance.jpg',
    translations: {
      pt: { name: 'Par de Alianças Clássico', material: 'Ouro 18k', description: '✨ Tradição e elegância • Fabricante direto desde 1991' },
      en: { name: 'Classic Alliance Pair', material: '18k Gold', description: '✨ Tradition and elegance • Direct manufacturer since 1991' },
      es: { name: 'Par de Alianzas Clásico', material: 'Oro 18k', description: '✨ Tradición y elegancia • Fabricante directo desde 1991' },
    },
  },
]