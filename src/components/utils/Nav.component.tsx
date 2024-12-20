'use client'

import { useState } from 'react'

import { motion } from 'framer-motion'
import { Code } from 'lucide-react'
import navItems from "../../shared/links";
import { StartupName } from '../../shared/protoData';

export default function Navbar() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

    return (
        <nav className="bg-gray-900 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <a href="/" className="flex items-center space-x-2 text-xl font-bold">
                    <Code size={24} className='text-[#fca700]' />
                    <span>{StartupName}</span>
                </a>
                <ul className="flex space-x-6">
                    {navItems.map((item, index) => (
                        <li key={item.name}>
                            <a href={item.href} className="relative px-3 py-2 transition duration-300 ease-in-out">
                                <motion.span
                                    className="relative z-10"
                                    onHoverStart={() => setHoveredIndex(index)}
                                    onHoverEnd={() => setHoveredIndex(null)}
                                >
                                    {item.name}
                                </motion.span>
                                {hoveredIndex === index && (
                                    <motion.div
                                        className="absolute inset-0 bg-[#fca700] rounded-md z-0"
                                        layoutId="hoverBackground"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 0.8 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

