import Style from './TotalMoney.css'

export const TotalMoney = ({ array }) => {
    const newValue = []
    const add = []
    const sub = []
    const valores = array.map(lista => {
        newValue.push(lista.value)
    })
    newValue.forEach(valor => {
        if(valor >= 0) {
           return add.push(valor)
        } else {
            sub.push(valor)
        }
    })

    let valorP = add.reduce((acumulador, valorTotal) => acumulador + valorTotal, 0)
    let valorN = sub.reduce((acumulador, valorTotal) => acumulador + valorTotal, 0)

    let soma = valorP + valorN
    
    return (
        <div className='conteinerValor'>
            <h2>Valor total:</h2>
            <p className='valor'>$ {soma}</p>
            <p className='info'>O valor se refere ao saldo</p>
        </div>
    )
}

