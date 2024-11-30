import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const categories = [
  {
    name: "Electronics",
    description: "Discover the latest gadgets and tech innovations.",
    image: "/ElectonicsCategory.png?height=300&width=400",
    slug: "electronics"
  },
  {
    name: "Clothing",
    description: "Find your perfect style with our diverse fashion collection.",
    image: "/clothingCategory.png?height=300&width=400",
    slug: "clothing"
  },
  {
    name: "Sports & Outdoors",
    description: "Gear up for your next adventure with our sports and outdoor equipment.",
    image: "/placeholder.svg?height=300&width=400",
    slug: "sports-and-outdoors"
  },
  {
    name: "Grocery",
    description: "Stock up on fresh produce and pantry staples for your daily needs.",
    image: "/placeholder.svg?height=300&width=400",
    slug: "grocery"
  },
  {
    name: "Mobile Phones",
    description: "Stay connected with the latest smartphones and accessories.",
    image: "/placeholder.svg?height=300&width=400",
    slug: "mobile-phones"
  },
  {
    name: "Home And Furniture",
    description: "Create your dream home with our stylish furniture and decor.",
    image: "/placeholder.svg?height=300&width=400",
    slug: "home-and-furniture"
  }
]

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-gray-900">ShopNow</Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/products" className="text-gray-700 hover:text-gray-900">Products</Link>
            <Link href="/categories" className="text-gray-700 hover:text-gray-900">Categories</Link>
            <Link href="/cart" className="text-gray-700 hover:text-gray-900">Cart</Link>
          </div>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Shop by Category</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Card key={category.slug} className="overflow-hidden">
              <div className="aspect-w-16 aspect-h-9 relative">
                <Image
                  src={category.image}
                  alt={category.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-2">{category.name}</h2>
                <p className="text-gray-600 mb-4">{category.description}</p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href={`/categories/${category.slug}`}>
                    Explore {category.name}
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>

      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <p>Corners Shop is your one-stop destination for all your shopping needs.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="hover:underline">About</Link></li>
                <li><Link href="/contact" className="hover:underline">Contact</Link></li>
                <li><Link href="/faq" className="hover:underline">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-gray-300">Facebook</a>
                <a href="#" className="hover:text-gray-300">Twitter</a>
                <a href="#" className="hover:text-gray-300">Instagram</a>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-800 pt-8 text-center">
            <p>&copy; 2023 ShopNow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}