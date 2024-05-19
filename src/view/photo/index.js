/* eslint-disable @next/next/no-img-element */
'use client'
import './style.css'

import React from "react";
import { ListMenu, ListGaleria } from '@/utils/settings'

export default function Galeria() {
    return (
        <div id={ListMenu[3].id} className='galeria'>
            <div className='photo'>
                {
                    ListGaleria.map((item, index) => {
                        // eslint-disable-next-line jsx-a11y/alt-text
                        return <img src={`/gallery/${item}.webp`} key={index} />
                    })
                }
            </div>
        </div>
    )
}