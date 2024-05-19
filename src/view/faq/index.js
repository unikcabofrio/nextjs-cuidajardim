'use client'
import './style.css'

import React from "react";
import { data, ListMenu, ListFAQ } from '@/utils/settings'
import Imagem from '@/components/image';
import Logo from '@/assets/logo-cuidajardim-1.44d33e9bef80c.webp'


export default function FAQ() {

    function handleClick() {
        window.open(`https://wa.me/${data[0]}`, '_blanck')
    }

    let Contato = data[0].replace('55', '')
    const DDD = `${Contato.charAt(0)}${Contato.charAt(1)}`
    const Number = `${data[0].replace('55', '').replace(DDD, '')}`
    Contato = `(${DDD}) ${Number.slice(0, -4)}-${Number.slice(-4)}`

    return (
        <div id={ListMenu[4].id} className='faq'>
            <div className='titulo'>
                <h1>Perguntas Frequentes</h1>
                <p>
                    Tem alguma outra pergunta?
                    de um oi no Whatsapp! <button onClick={() => { handleClick() }}>{Contato}</button>
                </p>
            </div>
            <div className='listFAQ'>
                <div>
                    {
                        ListFAQ.map((item, index) => {
                            return (
                                <details key={index}>
                                    <summary>{item.pergunta}</summary>
                                    <p>{item.resposta}</p>
                                </details>
                            )
                        })
                    }
                </div>
                <Imagem src={Logo} />
            </div>
        </div>
    )
}