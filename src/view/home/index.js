'use client'
import './style.css'

import React from "react";

import Imagem from '@/components/image'
import { ListMenu,data } from '@/utils/settings'

import Foto from '@/assets/home-jardim-cuidado.d1a087e1126a.webp'


export default function Home() {

    function handleClick() {
        window.open(`https://wa.me/${data[0]}`, '_blanck')
    }

    return (
        <div id={ListMenu[0].id} className='home'>
            <div className={'text'} >
                <h1>Cuidamos do seu <span>Jardim</span></h1>
                <p >
                    Cortamos e aparamos sua grama, adulbamos, plantamos flores e vegetais,
                    podamos e deixamos tudo limpo
                </p>
                <div className={`button`}>
                    <button onClick={() => { handleClick() }}>Agendar Visita ( GRÁTIS )</button>
                    <button onClick={() => { handleClick() }}>Saber Mais</button>
                </div>
            </div>
            <Imagem src={Foto}/>
        </div>
    )
}