"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Facebook, Twitter, Linkedin } from "lucide-react"

interface TeamMemberProps {
  name: string
  position: string
  image: string
  socialLinks: {
    facebook?: string
    twitter?: string
    linkedin?: string
  }
  index: number
}

export default function TeamMember({ name, position, image, socialLinks, index }: TeamMemberProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="relative overflow-hidden rounded-lg mb-4">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          width={400}
          height={500}
          className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
          <div className="flex space-x-3">
            {socialLinks.facebook && (
              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-colors"
              >
                <Facebook className="h-4 w-4" />
                <span className="sr-only">Facebook</span>
              </a>
            )}
            {socialLinks.twitter && (
              <a
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-blue-400 hover:bg-blue-400 hover:text-white transition-colors"
              >
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </a>
            )}
            {socialLinks.linkedin && (
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-blue-700 hover:bg-blue-700 hover:text-white transition-colors"
              >
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </a>
            )}
          </div>
        </div>
      </div>
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="text-gray-600 dark:text-gray-400">{position}</p>
    </motion.div>
  )
}
