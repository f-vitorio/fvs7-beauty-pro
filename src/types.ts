export interface Service {
  id: number
  category: string
  name: string
  description: string
  price: string
  duration: string
  image?: string
}

export interface Professional {
  id: number
  name: string
  specialty: string
  description: string
  services: string[]
  image?: string
}

export interface GalleryItem {
  id: number
  url: string
  caption: string
}