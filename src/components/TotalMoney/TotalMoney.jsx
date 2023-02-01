import Style from './TotalMoney.css'
import { useState } from 'react'

export const TotalMoney = ({ array }) => {
    const add = []
    const sub = []

    const valores = array.map(lista => {
        if (lista.type === 'Entrada') {
            const valor = lista.value
            add.push(Number(valor))
        } else {
            const valor = lista.value
            sub.push(Number(valor))
        }
    })

    const somaAdd = add.reduce((acumulador, valorTotal) => acumulador + valorTotal, 0) 
    const somaSub = sub.reduce((acumulador, valorTotal) => acumulador + valorTotal, -0) 

    const soma = somaAdd - somaSub 

    return (
        <div className='conteinerValor'>
            <h2>Valor total: </h2>
            <p className='valor'>$ {soma}</p>
            <p className='info'>O valor se refere ao saldo</p>
        </div>
    )
}

