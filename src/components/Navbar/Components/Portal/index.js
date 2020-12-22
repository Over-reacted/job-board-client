import { useRef, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

export const Portal = ({ children }) => {
  const ref = useRef()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    ref.current = document.querySelector('body')
    setMounted(true)
  }, [])

  return mounted ? createPortal(children, ref.current) : null
}
