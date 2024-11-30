'use client'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const featuredProducts = [
  { id: 1, name: "Stylish Watch", price: 199.99, image: "/StylishWatch.png?height=200&width=200" },
  { id: 2, name: "Leather Bag", price: 149.99, image: "/leatherBag.png?height=200&width=200" },
  { id: 3, name: "Sunglasses", price: 89.99, image: "/sunglass.png?height=1000&width=1000" },
  { id: 4, name: "Sneakers", price: 129.99, image: "/placeholder.svg?height=200&width=200" },
]

const categories = [
  { name: "Electronics", image: "/ElectronicsCategory.png?height=300&width=400" },
  { name: "Clothing", image: "/clothingCategory.png?height=300&width=400" },
  { name: "Home & Furniture", image: "/placeholder.svg?height=300&width=400" },
  { name: "Sports & Outdoors", image: "/placeholder.svg?height=300&width=400" },
]

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/login" className="text-2xl font-bold text-gray-900">ShopNow</Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/products" className="text-gray-700 hover:text-gray-900">Products</Link>
            <Link href="/categories" className="text-gray-700 hover:text-gray-900">Categories</Link>
            <Link href="/cart" className="text-gray-700 hover:text-gray-900">Cart</Link>
          </div>
        </nav>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to Corners Shop</h1>
              <p className="text-xl text-gray-700 mb-6">In every Corner of your country.</p>
              <Button asChild>
                <Link href="/products">Shop Now</Link>
              </Button>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/backgroundImage.png"
                alt="Background Image"
                width={600}
                height={400}
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredProducts.map((product) => (
                <Card key={product.id}>
                  <CardHeader>
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={200}
                      height={200}
                      className="rounded-t-lg"
                    />
                  </CardHeader>
                  <CardContent>
                    <CardTitle>{product.name}</CardTitle>
                    <p className="text-gray-700">${product.price.toFixed(2)}</p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <Link href={`/products/${product.id}`}>View Product</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="bg-gray-100 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Shop by Category</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {categories.map((category, index) => (
                <Link key={index} href={`/categories/${category.name.toLowerCase().replace(' & ', '-')}`} className="group">
                  <div className="relative overflow-hidden rounded-lg shadow-md aspect-w-4 aspect-h-3">
                    <Image
                      src={category.image}
                      alt={category.name}
                      layout="fill"
                      objectFit="cover"
                      className="group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                      <h3 className="text-white text-2xl font-bold">{category.name}</h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-primary text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Join Our Newsletter</h2>
            <p className="text-xl mb-8">Stay updated with our latest offers and products.</p>
            <div className="max-w-md mx-auto flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-2 rounded-l-lg focus:outline-none text-gray-900"
              />
              <Button className="rounded-l-none">Subscribe</Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <p>Corners Shop is your one-step destination for all your shopping needs.</p>
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

