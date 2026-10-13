"use client"

import * as React from "react"
import * as THREE from "three"

export function Hero3DScene() {
  const mountRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const container = mountRef.current
    if (!container) return

    const width = container.clientWidth || 400
    const height = container.clientHeight || 400

    // Scene, Camera, Renderer
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000)
    camera.position.z = 24

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    container.appendChild(renderer.domElement)

    // Main 3D Group
    const mainGroup = new THREE.Group()
    scene.add(mainGroup)

    // 1. Inner Wireframe Geodesic Sphere
    const sphereGeometry = new THREE.IcosahedronGeometry(7, 3)
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0x0284c7,
      wireframe: true,
      transparent: true,
      opacity: 0.22,
    })
    const wireframeSphere = new THREE.Mesh(sphereGeometry, wireframeMaterial)
    mainGroup.add(wireframeSphere)

    // 2. Glowing Core Nodes (Vertices)
    const pointCount = 140
    const pointsGeometry = new THREE.BufferGeometry()
    const positions = new Float32Array(pointCount * 3)
    const colors = new Float32Array(pointCount * 3)

    const colorCyan = new THREE.Color(0x00b4d8)
    const colorIndigo = new THREE.Color(0x6355ec)

    for (let i = 0; i < pointCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / pointCount)
      const theta = Math.sqrt(pointCount * Math.PI) * phi
      const radius = 7 + (Math.random() - 0.5) * 1.5

      positions[i * 3] = radius * Math.cos(theta) * Math.sin(phi)
      positions[i * 3 + 1] = radius * Math.sin(theta) * Math.sin(phi)
      positions[i * 3 + 2] = radius * Math.cos(phi)

      const mixedColor = Math.random() > 0.5 ? colorCyan : colorIndigo
      colors[i * 3] = mixedColor.r
      colors[i * 3 + 1] = mixedColor.g
      colors[i * 3 + 2] = mixedColor.b
    }

    pointsGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3))
    pointsGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3))

    const pointsMaterial = new THREE.PointsMaterial({
      size: 0.38,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
    })
    const particleNodes = new THREE.Points(pointsGeometry, pointsMaterial)
    mainGroup.add(particleNodes)

    // 3. Orbiting Data Rings
    const ring1Geom = new THREE.TorusGeometry(10.5, 0.05, 16, 100)
    const ring1Mat = new THREE.MeshBasicMaterial({
      color: 0x00b4d8,
      transparent: true,
      opacity: 0.55,
    })
    const ring1 = new THREE.Mesh(ring1Geom, ring1Mat)
    ring1.rotation.x = Math.PI / 3
    mainGroup.add(ring1)

    const ring2Geom = new THREE.TorusGeometry(12, 0.04, 16, 100)
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: 0x6355ec,
      transparent: true,
      opacity: 0.45,
    })
    const ring2 = new THREE.Mesh(ring2Geom, ring2Mat)
    ring2.rotation.y = Math.PI / 4
    ring2.rotation.x = Math.PI / 6
    mainGroup.add(ring2)

    // 4. Floating Satellites / Data Packets on Ring
    const packetGeom = new THREE.SphereGeometry(0.35, 16, 16)
    const packetMat = new THREE.MeshBasicMaterial({ color: 0x00b4d8 })
    const packet = new THREE.Mesh(packetGeom, packetMat)
    mainGroup.add(packet)

    // Mouse Interaction
    let targetRotationX = 0
    let targetRotationY = 0
    let mouseX = 0
    let mouseY = 0

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      mouseX = ((event.clientX - rect.left) / rect.width) * 2 - 1
      mouseY = -(((event.clientY - rect.top) / rect.height) * 2 - 1)
      targetRotationY = mouseX * 0.75
      targetRotationX = -mouseY * 0.75
    }

    window.addEventListener("mousemove", handleMouseMove)

    // Animation Loop
    let animationFrameId: number
    const startTime = performance.now()

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate)
      const elapsedTime = (performance.now() - startTime) * 0.001

      // Smooth mouse follow
      mainGroup.rotation.y += (targetRotationY - mainGroup.rotation.y) * 0.05
      mainGroup.rotation.x += (targetRotationX - mainGroup.rotation.x) * 0.05

      // Continuous autonomous rotation
      wireframeSphere.rotation.y += 0.003
      particleNodes.rotation.y += 0.003
      ring1.rotation.z += 0.006
      ring2.rotation.z -= 0.005

      // Orbit packet on Ring 1
      const angle = elapsedTime * 1.5
      packet.position.x = 10.5 * Math.cos(angle)
      packet.position.y = 10.5 * Math.sin(angle) * Math.cos(Math.PI / 3)
      packet.position.z = 10.5 * Math.sin(angle) * Math.sin(Math.PI / 3)

      renderer.render(scene, camera)
    }

    animate()

    // Resize Handler
    const handleResize = () => {
      if (!container) return
      const newWidth = container.clientWidth
      const newHeight = container.clientHeight
      camera.aspect = newWidth / newHeight
      camera.updateProjectionMatrix()
      renderer.setSize(newWidth, newHeight)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationFrameId)
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
      renderer.dispose()
      sphereGeometry.dispose()
      wireframeMaterial.dispose()
      pointsGeometry.dispose()
      pointsMaterial.dispose()
      ring1Geom.dispose()
      ring1Mat.dispose()
      ring2Geom.dispose()
      ring2Mat.dispose()
      packetGeom.dispose()
      packetMat.dispose()
    }
  }, [])

  return (
    <div
      ref={mountRef}
      className="w-full h-full min-h-[380px] sm:min-h-[460px] cursor-grab active:cursor-grabbing relative flex items-center justify-center pointer-events-auto"
    />
  )
}
