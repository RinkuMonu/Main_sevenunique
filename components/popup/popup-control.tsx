"use client"

import { useState } from "react"
import Popup from "@/components/popup/popup"

const PopupControl = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(true)

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen)
  }

  return (
    <div className="p-4">
      <Popup isOpen={isPopupOpen} onClose={togglePopup} />
    </div>
  )
}

export default PopupControl
