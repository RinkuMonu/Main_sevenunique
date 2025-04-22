import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, User, Tag, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from "lucide-react"

// Sample blog post data (in a real app, this would come from a database or CMS)
const blogPosts = [
  {
    title: "10 UI/UX Design Trends to Watch in 2023",
    content: `
      <p>The field of UI/UX design is constantly evolving, with new trends and techniques emerging each year. As we move through 2023, several key trends are shaping the way designers approach their work and how users interact with digital products.</p>
      
      <h2>1. Dark Mode Everywhere</h2>
      <p>Dark mode has moved beyond being just a feature to becoming a standard design option. Not only does it reduce eye strain and save battery life on OLED screens, but it also offers a sleek, modern aesthetic that many users prefer.</p>
      
      <h2>2. Micro-interactions</h2>
      <p>These small, functional animations add delight to the user experience and provide visual feedback. From button hover states to loading animations, micro-interactions make interfaces feel more responsive and engaging.</p>
      
      <h2>3. 3D Elements</h2>
      <p>With improvements in browser capabilities and device performance, 3D elements are becoming more common in web and app design. They add depth and realism to interfaces, creating more immersive experiences.</p>
      
      <h2>4. Voice User Interfaces (VUI)</h2>
      <p>As voice assistants become more sophisticated, designers are increasingly incorporating voice interactions into their products. This requires a different approach to UX design, focusing on conversation flows rather than visual elements.</p>
      
      <h2>5. Augmented Reality (AR)</h2>
      <p>AR is transforming how users interact with products, especially in e-commerce. Virtual try-on features and the ability to visualize products in your own space are becoming expected features rather than novel additions.</p>
      
      <h2>6. Glassmorphism</h2>
      <p>This design trend features frosted glass-like elements with background blur effects. It creates a sense of depth while maintaining a clean, modern look that works well with both light and dark modes.</p>
      
      <h2>7. Accessibility-First Design</h2>
      <p>Designing for accessibility is no longer an afterthought but a primary consideration. This includes considerations for color contrast, keyboard navigation, screen reader compatibility, and more.</p>
      
      <h2>8. Minimalist Navigation</h2>
      <p>Simplified navigation patterns are becoming more common, with hidden menus, tab bars, and gesture-based navigation replacing complex menu structures. This creates cleaner interfaces that focus on content.</p>
      
      <h2>9. Data Visualization</h2>
      <p>As products become more data-driven, effective data visualization is increasingly important. Interactive charts, graphs, and infographics help users understand complex information at a glance.</p>
      
      <h2>10. Personalized UX</h2>
      <p>Leveraging user data to create personalized experiences is a growing trend. From content recommendations to custom interfaces based on user behavior, personalization makes products feel more relevant and engaging.</p>
      
      <h2>Conclusion</h2>
      <p>These trends reflect broader shifts in technology and user expectations. As designers, staying aware of these trends while focusing on user needs is key to creating effective, engaging digital experiences. The most successful designs will be those that thoughtfully incorporate these trends in service of user goals rather than simply following the latest fashion.</p>
    `,
    image: "/placeholder.svg?height=600&width=1200",
    date: "June 15, 2023",
    author: "Jessica Chen",
    slug: "ui-ux-design-trends-2023",
    category: "Design",
    tags: ["UI/UX", "Design Trends", "Web Design"],
    authorImage: "/placeholder.svg?height=100&width=100",
    authorBio:
      "Jessica is a Senior UI/UX Designer with over 8 years of experience in creating user-centered digital experiences.",
  },
]

// Static params function to be used for static export
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  // Find the blog post with the matching slug
  const post = blogPosts.find((post) => post.slug === params.slug)

  // If no post is found, handle this case
  if (!post) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
        <p className="mb-8">The blog post you're looking for doesn't exist or has been removed.</p>
        <Link href="/blog">
          <Button>Back to Blog</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{post.title}</h1>
              <div className="flex flex-wrap justify-center items-center gap-4 text-sm">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-1" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center">
                  <Tag className="h-4 w-4 mr-1" />
                  <span>{post.category}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center text-[#ab6545] dark:text-[#e8ab8f] mb-8 hover:underline"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>

          {/* Blog Content */}
          <article className="prose prose-lg dark:prose-invert max-w-none mb-12">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </article>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-12">
            {post.tags.map((tag) => (
              <Link
                key={tag}
                href={`/blog?tag=${tag}`}
                className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm hover:bg-purple-100 dark:hover:bg-purple-900/30 hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
              >
                #{tag}
              </Link>
            ))}
          </div>

          {/* Share */}
          <div className="border-t border-b py-6 mb-12">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="font-medium">Share this article</div>
              <div className="flex gap-2">
                <Button variant="outline" size="icon" className="rounded-full">
                  <Facebook className="h-4 w-4" />
                  <span className="sr-only">Share on Facebook</span>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Twitter className="h-4 w-4" />
                  <span className="sr-only">Share on Twitter</span>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Linkedin className="h-4 w-4" />
                  <span className="sr-only">Share on LinkedIn</span>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Share2 className="h-4 w-4" />
                  <span className="sr-only">Copy link</span>
                </Button>
              </div>
            </div>
          </div>

          {/* Author Bio */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-12">
            <div className="flex items-center gap-4">
              <Image
                src={post.authorImage || "/placeholder.svg"}
                alt={post.author}
                width={64}
                height={64}
                className="rounded-full"
              />
              <div>
                <h3 className="text-xl font-bold">{post.author}</h3>
                <p className="text-gray-600 dark:text-gray-400">{post.authorBio}</p>
              </div>
            </div>
          </div>

          {/* Related Posts (placeholder) */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
                <div className="h-48 relative">
                  <Image src="/placeholder.svg?height=400&width=600" alt="Related post" fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-2">The Importance of User Testing in Design</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">May 28, 2023</p>
                  <Link href="#" className="text-[#ab6545] dark:text-[#e8ab8f] text-sm hover:underline">
                    Read more
                  </Link>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
                <div className="h-48 relative">
                  <Image src="/placeholder.svg?height=400&width=600" alt="Related post" fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-2">Color Theory for Digital Designers</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">April 15, 2023</p>
                  <Link href="#" className="text-[#ab6545] dark:text-[#e8ab8f] text-sm hover:underline">
                    Read more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
