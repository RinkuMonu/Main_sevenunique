"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Star } from "lucide-react"

interface TestimonialCardProps {
  content: string
  author: string
  position: string
  company: string
  avatar: string
  rating: number
  index: number
}

export default function TestimonialCard({
  content,
  author,
  position,
  company,
  avatar,
  rating,
  index,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 h-full flex flex-col"
    >
      <div className="flex mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300 dark:text-gray-600"}`}
          />
        ))}
      </div>
      <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow">"{content}"</p>
      <div className="flex items-center">
        <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
          <Image src={avatar || "/placeholder.svg"} alt={author} fill className="object-cover" />
        </div>
        <div>
          <h4 className="font-bold">{author}</h4>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {position}, {company}
          </p>
        </div>
      </div>
    </motion.div>
  )
}
