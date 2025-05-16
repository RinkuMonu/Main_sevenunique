"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Banner from "@/components/banner"
import SectionHeading from "@/components/section-heading"
import BlogCard from "@/components/blog-card"
import { Search, Filter, ChevronDown } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import SEO from "@/components/SEO/SEO"

// Sample data for the banner
const bannerSlides = [
  {
    image: "/image/banner/Blog.jpg",
    title: "Our Blog",
    description: "Insights, news, and updates from our team",
  },
]

// Sample data for blog posts
const allBlogPosts = [
  {
    title: "10 UI/UX Design Trends to Watch in 2023",
    excerpt: "Explore the latest trends in UI/UX design that are shaping the digital landscape in 2023 and beyond.",
    image: "/ui-ux-representations-with-laptop.jpg",
    date: "June 15, 2023",
    author: "Jessica Chen",
    slug: "ui-ux-design-trends-2023",
    category: "Design",
    tags: ["UI/UX", "Design Trends", "Web Design"],
  },
  {
    title: "The Future of Mobile App Development",
    excerpt:
      "Discover the emerging technologies and methodologies that are transforming the mobile app development landscape.",
    image: "/mobile-application-design-illustrator-creativity-concept.jpg",
    date: "May 28, 2023",
    author: "David Wilson",
    slug: "future-of-mobile-app-development",
    category: "Development",
    tags: ["Mobile Apps", "Technology", "Development"],
  },
  {
    title: "How to Optimize Your Website for Speed",
    excerpt: "Learn practical tips and techniques to improve your website's loading speed and enhance user experience.",
    image: "/website-hosting-concept-with-search-bar.jpg",
    date: "May 12, 2023",
    author: "Michael Brown",
    slug: "optimize-website-speed",
    category: "Web Development",
    tags: ["Web Performance", "Optimization", "User Experience"],
  },
  {
    title: "The Role of AI in Modern Software Development",
    excerpt: "Explore how artificial intelligence is revolutionizing software development processes and outcomes.",
    image: "/softwere.avif",
    date: "April 30, 2023",
    author: "Alex Morgan",
    slug: "ai-in-software-development",
    category: "Technology",
    tags: ["AI", "Software Development", "Innovation"],
  },
  {
    title: "Building Accessible Web Applications",
    excerpt: "Discover best practices for creating web applications that are accessible to users with disabilities.",
    image: "/accessbility.avif",
    date: "April 18, 2023",
    author: "Emma Thompson",
    slug: "building-accessible-web-applications",
    category: "Web Development",
    tags: ["Accessibility", "Web Development", "Inclusive Design"],
  },
  {
    title: "The Power of Content Marketing for Tech Companies",
    excerpt: "Learn how content marketing can help tech companies build brand awareness and generate leads.",
    image: "/marketing.avif",
    date: "April 5, 2023",
    author: "Sarah Johnson",
    slug: "content-marketing-for-tech-companies",
    category: "Marketing",
    tags: ["Content Marketing", "Digital Marketing", "Lead Generation"],
  },
  {
    title: "Introduction to Game Development with Unity",
    excerpt: "A beginner's guide to getting started with game development using the Unity engine.",
    image: "/game development.avif",
    date: "March 22, 2023",
    author: "David Wilson",
    slug: "introduction-to-game-development-unity",
    category: "Game Development",
    tags: ["Unity", "Game Development", "Programming"],
  },
  {
    title: "The Importance of Cybersecurity in Modern Applications",
    excerpt: "Understand why cybersecurity should be a priority in your application development process.",
    image: "/Cybersecurity.avif",
    date: "March 10, 2023",
    author: "Alex Morgan",
    slug: "importance-of-cybersecurity",
    category: "Security",
    tags: ["Cybersecurity", "Application Security", "Data Protection"],
  },
  {
    title: "Responsive Design Best Practices",
    excerpt: "Learn the essential principles and techniques for creating responsive websites that work on all devices.",
    image: "/responsive.avif",
    date: "February 28, 2023",
    author: "Jessica Chen",
    slug: "responsive-design-best-practices",
    category: "Design",
    tags: ["Responsive Design", "Web Design", "Mobile First"],
  },
]

// Extract unique categories and tags
const allCategories = [...new Set(allBlogPosts.map((post) => post.category))]
const allTags = [...new Set(allBlogPosts.flatMap((post) => post.tags))]

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  // Filter blog posts based on search query, selected categories, and tags
  const filteredPosts = allBlogPosts.filter((post) => {
    const matchesSearch =
      searchQuery === "" ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(post.category)

    const matchesTags = selectedTags.length === 0 || post.tags.some((tag) => selectedTags.includes(tag))

    return matchesSearch && matchesCategory && matchesTags
  })

  return (
    <>
    <SEO/>
      {/* Banner Section */}
      <Banner slides={bannerSlides} />

      {/* Blog Section */}
      <section className="py-16 md:py-24 md:px-24">
        <div className="container mx-auto px-4">
          <SectionHeading title="Latest Articles" subtitle="Stay updated with our latest insights, news, and tips" />

          {/* Search and Filter */}
          <div className="mb-12 flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Search articles..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Filter className="h-4 w-4" />
                    Categories
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  {allCategories.map((category) => (
                    <DropdownMenuCheckboxItem
                      key={category}
                      checked={selectedCategories.includes(category)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          setSelectedCategories([...selectedCategories, category])
                        } else {
                          setSelectedCategories(selectedCategories.filter((c) => c !== category))
                        }
                      }}
                    >
                      {category}
                    </DropdownMenuCheckboxItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Filter className="h-4 w-4" />
                    Tags
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  {allTags.map((tag) => (
                    <DropdownMenuCheckboxItem
                      key={tag}
                      checked={selectedTags.includes(tag)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          setSelectedTags([...selectedTags, tag])
                        } else {
                          setSelectedTags(selectedTags.filter((t) => t !== tag))
                        }
                      }}
                    >
                      {tag}
                    </DropdownMenuCheckboxItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {(selectedCategories.length > 0 || selectedTags.length > 0 || searchQuery) && (
                <Button
                  variant="ghost"
                  onClick={() => {
                    setSelectedCategories([])
                    setSelectedTags([])
                    setSearchQuery("")
                  }}
                >
                  Clear Filters
                </Button>
              )}
            </div>
          </div>

          {/* Blog Posts Grid */}
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <BlogCard
                  key={post.slug}
                  title={post.title}
                  excerpt={post.excerpt}
                  image={post.image}
                  date={post.date}
                  author={post.author}
                  slug={post.slug}
                  index={index}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-bold mb-2">No articles found</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">Try adjusting your search or filter criteria.</p>
              <Button
                variant="outline"
                onClick={() => {
                  setSelectedCategories([])
                  setSelectedTags([])
                  setSearchQuery("")
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
