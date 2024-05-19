'use client'
import './style.css'
import { useState } from 'react'

import Imagem from '@/components/image'
import IconeSVG from '@/components/icon'
import { ListMenu } from '@/utils/settings'

import Logo from '@/assets/logo.webp'


export default function TopMenu() {
    const [Menu, setMenu] = useState(false)
    function handleClick(id) {
        setMenu(!Menu)
        const section = document.getElementById(id)
        section.scrollIntoView(true)
    }
    return (
        <nav className="navbar">
            <div className='menuButton'>
                <Imagem src={Logo} />
                <IconeSVG icone={'menu'} onClick={() => { setMenu(!Menu) }} />
            </div>
            <div className={`menuList ${Menu ? 'show' : ''}`}>
                {
                    ListMenu.map((item, index) => {
                        return <span key={index} onClick={() => { handleClick(item.id) }}>{item.name}</span>
                    })
                }
            </div>
        </nav>
    )
}