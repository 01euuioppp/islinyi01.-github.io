import React from 'react'
import { motion } from 'framer-motion'
import { Github, Twitter, Linkedin, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const BauhausShape = ({ className, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1, delay, ease: "easeOut" }}
    className={className}
  />
)

export default function App() {
  return (
    <div className="min-h-screen bg-[#F0F0F0] text-[#1A1A1A] overflow-hidden font-sans relative">
      {/* Background Shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Yellow Circle */}
        <BauhausShape 
          className="absolute top-[-10%] right-[-5%] w-[40vw] h-[40vw] rounded-full bg-[#F6B800] mix-blend-multiply opacity-80"
          delay={0.2}
        />
        {/* Red Square */}
        <BauhausShape 
          className="absolute bottom-[10%] left-[-10%] w-[30vw] h-[30vw] bg-[#D21F3C] mix-blend-multiply opacity-80 rotate-12"
          delay={0.4}
        />
        {/* Blue Triangle (approximated with clip-path or just a rotated square) */}
        <BauhausShape 
          className="absolute top-[20%] left-[20%] w-[15vw] h-[15vw] bg-[#1D5897] mix-blend-multiply opacity-60 rounded-full"
          delay={0.6}
        />
      </div>

      <main className="relative z-10 container mx-auto px-6 h-screen flex flex-col justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-2">
              <h2 className="text-xl font-bold tracking-widest uppercase text-[#1D5897]">
                Creative Developer
              </h2>
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none">
                ISLINYI<br/>
                <span className="text-[#D21F3C]">DESIGN</span>
              </h1>
            </div>

            <p className="text-xl md:text-2xl font-light max-w-md border-l-4 border-[#F6B800] pl-6 py-2">
              Crafting digital experiences with precision, form, and function. 
              Minimalist aesthetics meets modern technology.
            </p>

            <div className="flex gap-4 pt-4">
              <Button size="lg" className="bg-[#1A1A1A] hover:bg-[#333] text-white rounded-none px-8 text-lg group">
                View Projects
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-[#1A1A1A] text-[#1A1A1A] rounded-none px-8 text-lg hover:bg-[#1A1A1A] hover:text-white transition-colors">
                Contact Me
              </Button>
            </div>

            <div className="flex gap-6 pt-8">
              <SocialLink href="#" icon={<Github />} label="GitHub" />
              <SocialLink href="#" icon={<Twitter />} label="Twitter" />
              <SocialLink href="#" icon={<Linkedin />} label="LinkedIn" />
            </div>
          </motion.div>

          {/* Graphic/Image Side */}
          <motion.div 
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:flex justify-center items-center relative"
          >
            <div className="relative w-96 h-96">
               <div className="absolute inset-0 bg-[#1D5897] translate-x-4 translate-y-4 mix-blend-multiply opacity-80"></div>
               <div className="absolute inset-0 border-4 border-[#1A1A1A] bg-white flex items-center justify-center overflow-hidden">
                  {/* Abstract content or Image placeholder */}
                  <div className="w-full h-full grid grid-cols-2 grid-rows-2">
                    <div className="bg-[#D21F3C]"></div>
                    <div className="bg-[#F6B800] rounded-bl-full"></div>
                    <div className="bg-[#F0F0F0]"></div>
                    <div className="bg-[#1A1A1A]"></div>
                  </div>
               </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  )
}

const SocialLink = ({ href, icon, label }) => (
  <a 
    href={href} 
    className="p-3 border-2 border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-colors duration-300"
    aria-label={label}
  >
    {icon}
  </a>
)