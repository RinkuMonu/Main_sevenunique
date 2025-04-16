"use client"

import type React from "react"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  href: string
  index: number
}

export default function ServiceCard({ icon, title, description, href, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow group"
    >
      <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center text-[#ab6545] dark:text-[#e8ab8f] mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
      <Link
        href={href}
        className="inline-flex items-center text-[#ab6545] dark:text-[#e8ab8f] font-medium group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors"
      >
        Learn more
        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </motion.div>
  )
}
