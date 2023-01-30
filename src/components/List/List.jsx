import Style from './List.css'
import lixo from '../../assets/ButtonTrash.svg'

export const List = ({ array }) => {
    return array.map((transaction, index) => {
        return (
            <li className='card' key={index}>
                <h2 className='description'>{transaction.description}</h2>
                <p className='type'>{transaction.type}</p>
                <p className='value'>R$ {transaction.value}</p>
                <button><img src={lixo} alt="remover" /></button>
            </li>
        )
    })
}
