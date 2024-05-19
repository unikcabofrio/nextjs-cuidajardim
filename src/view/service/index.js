'use client'
import './style.css'

import React from "react";

import Imagem from '@/components/image'
import { ListMenu, ListServices } from '@/utils/settings'

import Foto1 from '@/assets/servico-decoracao.5375e18eb83b63.webp'
import Foto2 from '@/assets/servico-grama.04445839a5b13007f3.webp'
import Foto3 from '@/assets/servico-plantar.7882bcc9de73bd4e.webp'
import Foto4 from '@/assets/servico-podar.a70d03d76e7d364729.webp'


export default function Serviços() {

    return (
        <div id={ListMenu[1].id} className='service'>
            <div className='titulo'>
                <h1>Serviços de Jardinagem e Paisagismo</h1>
                <p>
                    Transforme seu espaço externo com nossos serviços de jardinagem e paisagismo.
                    Oferecemos tudo o que você precisa e temos também itens de decoração para deixar seu jardim ainda mais bonito.
                    Cuidamos de tudo pra você.
                </p>
            </div>
            <div className='listServices'>
                <div className='gridList'>
                    {
                        ListServices.map((item, index) => {
                            return (
                                <div key={index}>
                                    <h2>{item.title}</h2>
                                    <p>{item.description}</p>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='imagens'>
                    <Imagem src={Foto1} />
                    <Imagem src={Foto2} />
                    <Imagem src={Foto3} />
                    <Imagem src={Foto4} />
                </div>
            </div>
        </div>
    )
}