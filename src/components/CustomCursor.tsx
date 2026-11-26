import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false)
  const [hovering, setHovering] = useState(false)
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const springX = useSpring(x, { stiffness: 380, damping: 28, mass: 0.4 })
  const springY = useSpring(y, { stiffness: 380, damping: 28, mass: 0.4 })

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches
    const wide = window.matchMedia('(min-width: 1024px)').matches
    if (!fine || !wide) return

    setEnabled(true)
    document.documentElement.classList.add('cursor-none-desktop')

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null
      const interactive = target?.closest('a, button, [role="button"], input, textarea')
      setHovering(Boolean(interactive))
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseover', onOver)

    return () => {
      document.documentElement.classList.remove('cursor-none-desktop')
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
    }
  }, [x, y])

  if (!enabled) return null

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-[100] mix-blend-multiply"
      style={{
        x: springX,
        y: springY,
        translateX: '-50%',
        translateY: '-50%',
      }}
    >
      <div
        className={`rounded-full border transition-[width,height,background-color,border-color] duration-200 ${
          hovering
            ? 'h-10 w-10 border-accent bg-primary/50'
            : 'h-3 w-3 border-secondary bg-secondary/70'
        }`}
      />
    </motion.div>
  )
}
