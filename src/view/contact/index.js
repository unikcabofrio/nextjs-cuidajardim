'use client'
import './style.css'

import React from "react";
import { data } from '@/utils/settings'
import IconeSVG from '@/components/icon';
import Imagem from '@/components/image';
import Logo from '@/assets/photo-1520333789090-1afc82db536a.webp'

export default function Contato() {

    let Contato = data[0].replace('55', '')
    const DDD = `${Contato.charAt(0)}${Contato.charAt(1)}`
    const Number = `${data[0].replace('55', '').replace(DDD, '')}`
    Contato = `(${DDD}) ${Number.slice(0, -4)}-${Number.slice(-4)}`

    return (
        <div className='contato'>
            <div className='titulo'>
                <h1>Atendimento</h1>
                <p>Fale com um de nossos atendentes. Respondemos em algumas horas.</p>
            </div>
            <div className='listContato'>
                <section>
                    <div className='boxcontacto'>
                        <IconeSVG icone='phone_in_talk' />
                        <div>
                            <a href={`https://wa.me/${data[0]}`} target='_blank'>{Contato}</a>
                            <p>Este número é Whatsapp</p>
                            <p>Todos os dias de 9h às 19h.</p>
                        </div>
                    </div>
                    <div className='boxcontacto'>
                        <IconeSVG icone='email' />
                        <div>
                            <a href={`mailton:${data[1]}`} target='_blank'>{data[1]}</a>
                        </div>
                    </div>
                </section>
                <Imagem src={Logo} />
            </div>

        </div>
    )
}