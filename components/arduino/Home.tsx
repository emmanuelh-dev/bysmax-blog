'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ChevronDown, CircuitBoard, Cpu, Database, Menu, Microchip } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="mx-auto lg:flex">
      {/* Sidebar */}
      <div className="flex h-[calc(100vh-4rem)] w-64 transform border-r border-gray-800 bg-black p-4 transition-transform md:translate-x-0">
        <nav className="space-y-6">
          <div className="space-y-2">
            <h2 className="flex items-center text-sm font-semibold">
              Getting Started <ChevronDown className="ml-2 h-4 w-4" />
            </h2>
            <div className="ml-4 space-y-1">
              <Link className="block text-sm text-gray-400 hover:text-white" href="/arduino">
                Introduction
              </Link>
              <Link className="block text-sm text-gray-400 hover:text-white" href="/arduino">
                Hardware Setup
              </Link>
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="flex items-center text-sm font-semibold">
              Projects <ChevronDown className="ml-2 h-4 w-4" />
            </h2>
            <div className="ml-4 space-y-1">
              <Link className="block text-sm text-gray-400 hover:text-white" href="/arduino">
                LED Control
              </Link>
              <Link className="block text-sm text-gray-400 hover:text-white" href="/arduino">
                Sensors
              </Link>
              <Link className="block text-sm text-gray-400 hover:text-white" href="/arduino">
                Motors
              </Link>
            </div>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <main className="pt-16">
        <div className="container px-4 py-12">
          <div className="mb-12 text-center">
            <div className="text-primary mb-4 text-sm font-medium">
              Built with Arduino, Sensors, and Electronics
            </div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Arduino Project Course
            </h1>
            <p className="mx-auto max-w-2xl text-gray-400">
              The Arduino Project Course is your gateway to the world of electronics and
              programming. Learn to build interactive projects with hands-on tutorials.
            </p>
            <div className="mt-8 flex justify-center space-x-4">
              <Input
                className="max-w-xs bg-gray-900"
                placeholder="example@email.com"
                type="email"
              />
              <Button>Notify Me</Button>
            </div>
          </div>

          <section>
            <h2 className="mb-8 text-2xl font-bold">Featured Projects</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="group relative overflow-hidden rounded-lg border border-gray-800 bg-gray-900">
                <div className="aspect-video overflow-hidden">
                  <div className="flex h-full items-center justify-center bg-gray-800">
                    <Microchip className="text-primary h-12 w-12" />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="mb-2 font-semibold">LED Matrix Display</h3>
                  <p className="text-sm text-gray-400">
                    Create stunning visual displays with LED matrices and Arduino
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg border border-gray-800 bg-gray-900">
                <div className="aspect-video overflow-hidden">
                  <div className="flex h-full items-center justify-center bg-gray-800">
                    <Cpu className="text-primary h-12 w-12" />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="mb-2 font-semibold">Temperature Monitor</h3>
                  <p className="text-sm text-gray-400">
                    Build a smart temperature monitoring system with sensors
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg border border-gray-800 bg-gray-900">
                <div className="aspect-video overflow-hidden">
                  <div className="flex h-full items-center justify-center bg-gray-800">
                    <Database className="text-primary h-12 w-12" />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="mb-2 font-semibold">Data Logger</h3>
                  <p className="text-sm text-gray-400">
                    Create a data logging system with SD card storage
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section>
            <h2 className="mb-8 text-2xl font-bold">Featured Projects</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="group relative overflow-hidden rounded-lg border border-gray-800 bg-gray-900">
                <div className="aspect-video overflow-hidden">
                  <div className="flex h-full items-center justify-center bg-gray-800">
                    <Microchip className="text-primary h-12 w-12" />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="mb-2 font-semibold">LED Matrix Display</h3>
                  <p className="text-sm text-gray-400">
                    Create stunning visual displays with LED matrices and Arduino
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg border border-gray-800 bg-gray-900">
                <div className="aspect-video overflow-hidden">
                  <div className="flex h-full items-center justify-center bg-gray-800">
                    <Cpu className="text-primary h-12 w-12" />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="mb-2 font-semibold">Temperature Monitor</h3>
                  <p className="text-sm text-gray-400">
                    Build a smart temperature monitoring system with sensors
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg border border-gray-800 bg-gray-900">
                <div className="aspect-video overflow-hidden">
                  <div className="flex h-full items-center justify-center bg-gray-800">
                    <Database className="text-primary h-12 w-12" />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="mb-2 font-semibold">Data Logger</h3>
                  <p className="text-sm text-gray-400">
                    Create a data logging system with SD card storage
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section>
            <h2 className="mb-8 text-2xl font-bold">Featured Projects</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="group relative overflow-hidden rounded-lg border border-gray-800 bg-gray-900">
                <div className="aspect-video overflow-hidden">
                  <div className="flex h-full items-center justify-center bg-gray-800">
                    <Microchip className="text-primary h-12 w-12" />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="mb-2 font-semibold">LED Matrix Display</h3>
                  <p className="text-sm text-gray-400">
                    Create stunning visual displays with LED matrices and Arduino
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg border border-gray-800 bg-gray-900">
                <div className="aspect-video overflow-hidden">
                  <div className="flex h-full items-center justify-center bg-gray-800">
                    <Cpu className="text-primary h-12 w-12" />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="mb-2 font-semibold">Temperature Monitor</h3>
                  <p className="text-sm text-gray-400">
                    Build a smart temperature monitoring system with sensors
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg border border-gray-800 bg-gray-900">
                <div className="aspect-video overflow-hidden">
                  <div className="flex h-full items-center justify-center bg-gray-800">
                    <Database className="text-primary h-12 w-12" />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="mb-2 font-semibold">Data Logger</h3>
                  <p className="text-sm text-gray-400">
                    Create a data logging system with SD card storage
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section>
            <h2 className="mb-8 text-2xl font-bold">Featured Projects</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="group relative overflow-hidden rounded-lg border border-gray-800 bg-gray-900">
                <div className="aspect-video overflow-hidden">
                  <div className="flex h-full items-center justify-center bg-gray-800">
                    <Microchip className="text-primary h-12 w-12" />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="mb-2 font-semibold">LED Matrix Display</h3>
                  <p className="text-sm text-gray-400">
                    Create stunning visual displays with LED matrices and Arduino
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg border border-gray-800 bg-gray-900">
                <div className="aspect-video overflow-hidden">
                  <div className="flex h-full items-center justify-center bg-gray-800">
                    <Cpu className="text-primary h-12 w-12" />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="mb-2 font-semibold">Temperature Monitor</h3>
                  <p className="text-sm text-gray-400">
                    Build a smart temperature monitoring system with sensors
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg border border-gray-800 bg-gray-900">
                <div className="aspect-video overflow-hidden">
                  <div className="flex h-full items-center justify-center bg-gray-800">
                    <Database className="text-primary h-12 w-12" />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="mb-2 font-semibold">Data Logger</h3>
                  <p className="text-sm text-gray-400">
                    Create a data logging system with SD card storage
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <div className="flex h-[calc(100vh-4rem)] w-64 transform border-l border-gray-800 bg-black p-4 transition-transform md:translate-x-0">
        <nav className="space-y-6">
          <div className="space-y-2">
            <h2 className="flex items-center text-sm font-semibold">
              Getting Started <ChevronDown className="ml-2 h-4 w-4" />
            </h2>
            <div className="ml-4 space-y-1">
              <Link className="block text-sm text-gray-400 hover:text-white" href="/arduino">
                Introduction
              </Link>
              <Link className="block text-sm text-gray-400 hover:text-white" href="/arduino">
                Hardware Setup
              </Link>
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="flex items-center text-sm font-semibold">
              Projects <ChevronDown className="ml-2 h-4 w-4" />
            </h2>
            <div className="ml-4 space-y-1">
              <Link className="block text-sm text-gray-400 hover:text-white" href="/arduino">
                LED Control
              </Link>
              <Link className="block text-sm text-gray-400 hover:text-white" href="/arduino">
                Sensors
              </Link>
              <Link className="block text-sm text-gray-400 hover:text-white" href="/arduino">
                Motors
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}
