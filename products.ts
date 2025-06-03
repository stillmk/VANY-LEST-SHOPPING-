import type { Product } from "./types"

export const products: Product[] = [
  {
    id: "1",
    name: "Classic Mozambican Print Shirt",
    description:
      "A vibrant shirt featuring traditional Mozambican patterns, perfect for casual and formal occasions. Made from 100% cotton for maximum comfort in warm weather.",
    price: 1500,
    image: "/placeholder.svg?height=400&width=400",
    category: "Men",
  },
  {
    id: "2",
    name: "Capulana Wrap Skirt",
    description:
      "Beautiful wrap skirt made from authentic Capulana fabric. This versatile piece can be styled in multiple ways for different occasions.",
    price: 1200,
    image: "/placeholder.svg?height=400&width=400",
    category: "Women",
  },
  {
    id: "3",
    name: "Beaded Necklace",
    description:
      "Handcrafted beaded necklace inspired by Mozambican coastal traditions. Each piece is unique and made by local artisans.",
    price: 800,
    image: "/placeholder.svg?height=400&width=400",
    category: "Accessories",
  },
  {
    id: "4",
    name: "Maputo Graphic T-Shirt",
    description:
      "Comfortable cotton t-shirt featuring a stylish graphic design of Maputo's skyline. Available in multiple colors.",
    price: 950,
    image: "/placeholder.svg?height=400&width=400",
    category: "Unisex",
  },
  {
    id: "5",
    name: "Handwoven Beach Bag",
    description:
      "Spacious beach bag handwoven from sustainable materials. Perfect for a day at the beach or as a stylish shopping bag.",
    price: 1100,
    image: "/placeholder.svg?height=400&width=400",
    category: "Accessories",
  },
  {
    id: "6",
    name: "Embroidered Linen Dress",
    description: "Elegant linen dress with traditional Mozambican embroidery. Light and breezy for hot summer days.",
    price: 1800,
    image: "/placeholder.svg?height=400&width=400",
    category: "Women",
  },
  {
    id: "7",
    name: "Wooden Bead Bracelet",
    description: "Stylish bracelet made from locally sourced wooden beads. Adjustable size fits most wrists.",
    price: 450,
    image: "/placeholder.svg?height=400&width=400",
    category: "Accessories",
  },
  {
    id: "8",
    name: "Patterned Swim Shorts",
    description:
      "Quick-dry swim shorts featuring colorful Mozambican-inspired patterns. Perfect for beach days and swimming.",
    price: 950,
    image: "/placeholder.svg?height=400&width=400",
    category: "Men",
  },
  {
    id: "9",
    name: "Capulana Headwrap",
    description: "Traditional Capulana headwrap in vibrant colors and patterns. A versatile accessory for any outfit.",
    price: 600,
    image: "/placeholder.svg?height=400&width=400",
    category: "Accessories",
  },
  {
    id: "10",
    name: "Linen Beach Shirt",
    description:
      "Lightweight linen shirt perfect for beach days and casual outings. Features subtle Mozambican-inspired details.",
    price: 1300,
    image: "/placeholder.svg?height=400&width=400",
    category: "Men",
  },
  {
    id: "11",
    name: "Capulana Tote Bag",
    description:
      "Sturdy tote bag made from authentic Capulana fabric. Spacious enough for daily essentials or shopping trips.",
    price: 750,
    image: "/placeholder.svg?height=400&width=400",
    category: "Accessories",
  },
  {
    id: "12",
    name: "Kids Patterned Dress",
    description:
      "Adorable dress for children featuring playful Mozambican patterns. Made from soft, comfortable cotton.",
    price: 850,
    image: "/placeholder.svg?height=400&width=400",
    category: "Kids",
  },
]

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id)
}
