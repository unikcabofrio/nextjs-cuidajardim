import { Roboto } from 'next/font/google'
import './global.css'
import './icon.css'
import './animation.css'


export const roboto = Roboto({
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
})

