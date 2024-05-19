'use client'
import './style.css'

import React from "react";
import { data, ListMenu, ListPrices } from '@/utils/settings'
import IconeSVG from '@/components/icon';


export default function Preços() {

    function handleClick() {
        window.open(`https://wa.me/${data[0]}`, '_blanck')
    }

    return (
        <div id={ListMenu[2].id} className='price'>
            <div className='titulo'>
                <h1>Preços para todos os jardins</h1>
                <p>
                    Você quer transformar seu jardim em algo incrível,
                    mas não sabe por onde começar? Não se preocupe!
                    Temos os melhores profissionais para te ajudar a escolher o
                    modelo perfeito para o seu jardim. E o melhor de tudo? A primeira
                    visita é de graça! Então, o que está esperando? Agende agora e deixe que nós
                    cuidemos do seu jardim!
                </p>
            </div>
            <div className='listPrices'>
                {
                    ListPrices.map((item, index) => {
                        return (
                            <div key={index} className={`${item.focu ? 'divfocus' : ''}`}>
                                {item.focu ? <span className='mais'>Mais Assinado</span> : <></>}
                                <h2>{item.titulo}</h2>
                                <div className='value'>
                                    <span>à partir de</span>
                                    <span className='valueprice'>
                                        <strong>R$ {item.value}</strong>
                                        <strong className='tempo'>/{item.tempo}</strong>
                                    </span>
                                    <p>{item.description}</p>
                                </div>

                                <div className='benefi'>
                                    {
                                        item.beneficios.map((_item, _index) => {
                                            return (
                                                <span key={_index}>
                                                    <IconeSVG icone={'check'} />
                                                    <p>{_item}</p>
                                                </span>
                                            )
                                        })
                                    }
                                </div>
                                <button onClick={() => { handleClick() }} className={`${item.focu ? 'focus' : ''}`}>Agendar Visita ( GRÁTIS )</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}