<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  opacity: number
}

const initParticles = () => {
  const canvas = document.getElementById('particle-canvas') as HTMLCanvasElement
  const ctx = canvas.getContext('2d')
  if (!ctx) return

  let particles: Particle[] = []
  let animationFrameId: number

  const resizeCanvas = () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  }

  const createParticle = (): Particle => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 2 + 1,
    speedX: (Math.random() - 0.5) * 0.5,
    speedY: (Math.random() - 0.5) * 0.5,
    opacity: Math.random() * 0.5 + 0.2
  })

  const initializeParticles = () => {
    particles = Array(50).fill(null).map(createParticle)
  }

  const drawParticle = (particle: Particle) => {
    if (!ctx) return
    ctx.beginPath()
    ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`
    ctx.fill()
  }

  const updateParticle = (particle: Particle) => {
    particle.x += particle.speedX
    particle.y += particle.speedY

    if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1
    if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1
  }

  const animate = () => {
    if (!ctx) return
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    particles.forEach(particle => {
      updateParticle(particle)
      drawParticle(particle)
    })

    animationFrameId = requestAnimationFrame(animate)
  }

  window.addEventListener('resize', resizeCanvas)
  resizeCanvas()
  initializeParticles()
  animate()

  return () => {
    window.removeEventListener('resize', resizeCanvas)
    cancelAnimationFrame(animationFrameId)
  }
}

onMounted(() => {
  const cleanup = initParticles()
  onUnmounted(() => cleanup && cleanup())
})
</script>

<template>
  <canvas
    id="particle-canvas"
    class="fixed inset-0 pointer-events-none z-0"
  ></canvas>
</template>