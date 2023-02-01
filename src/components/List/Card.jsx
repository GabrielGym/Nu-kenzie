import React from 'react'
import Style from './List.css'
import lixo from '../../assets/ButtonTrash.svg'

export function Card({ transaction, index, removeObject}) {
    return (
        <li className='card' key={index}>
            <h2 className='description'>{transaction.description}</h2>
            <p className='type'>{transaction.type}</p>
            <p className='value'>R$ {transaction.value}</p>
            <button onClick={() => removeObject(transaction.id)} ><img src={lixo} alt="remover" /></button>
        </li>
    )
}
