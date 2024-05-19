import { ListSections1, ListSections2, ListSections3, ListSections4 } from "@/utils/settings"
import IconeSVG from "@/components/icon"

export function Section1() {
    return (
        <div>
            <h1>Área de atendimento - Região dos Lagos</h1>
            <p>Serviços de Jardinagem e Paisagismo em toda a Região dos Lagos, RJ. Horário de atendimento 09:00 até as 19:00h.</p>
            <div>
                {
                    ListSections1.map((item, index) => {
                        return (
                            <span key={index}>
                                <strong>{item.city}</strong>
                                <p>{item.description}</p>
                            </span>
                        )
                    })
                }

            </div>
        </div>
    )
}

export function Section2() {
    return (
        <div>
            <h1>Jardinagem e Paisagismo de confiança na Região dos Lagos, RJ</h1>
            <div>
                {
                    ListSections2.map((item, index) => {
                        return (
                            <span key={index}>
                                <strong>{item.count}</strong>
                                <p>{item.description}</p>
                            </span>
                        )
                    })
                }

            </div>
        </div>
    )
}

export function Section3() {
    return (
        <div>
            <h3>Tudo para o seu jardim</h3>
            <h2>Em um único lugar</h2>
            <p>
                Seu jardim merece o melhor! Com nosso serviço completo, você tem tudo o que precisa em um único lugar.
                Desde adubação e plantio até manutenção e instalação. Deixe seu jardim impecável e desfrute dele ao máximo.
            </p>
            <div>
                {
                    ListSections3.map((item, index) => {
                        return (
                            <span key={index}>
                                <IconeSVG icone={'check'} />
                                <p>{item.description}</p>
                            </span>
                        )
                    })
                }

            </div>
        </div>
    )
}

export function Section4() {
    return (
        <div>
            <h1>Nosso negócio só floresce com você.</h1>
            <p>
                Nós entendemos que o seu tempo é precioso, e por isso, sempre damos prioridade em responder às suas perguntas o
                mais rápido possível. Somos totalmente transparentes em tudo o que fazemos e prometemos cuidar do seu jardim como
                se fosse nosso próprio. Com isso, temos a certeza de que você ficará completamente satisfeito com os nossos serviços!
            </p>
            <div>
                {
                    ListSections4.map((item, index) => {
                        return (
                            <span key={index}>
                                <IconeSVG icone={item.icone} />
                                <strong>{item.titulo}</strong>
                                <p>{item.description}</p>
                            </span>
                        )
                    })
                }

            </div>
        </div>
    )
}