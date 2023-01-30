import { useState } from 'react'
import Styles from './Form.css'

export const Form = ({ listTransactions, setListTransactions, addObject }) => {
    const [formData, setFormdata] = useState({
        decription: "",
        type: "entrada",
        value: "",
    })

    const submit = (event) => {
        event.preventDefault()
        addObject(formData)
    }

    return (
        <form className="conteinerForm" onSubmit={submit}>
            <label htmlFor="">Descrição</label>
            <input
                type="text"
                name="description"
                placeholder="Digite aqui sua descrição"
                onChange={(event) => setFormdata({ ...formData, decription: event.target.value })}
                required />
            <fieldset>
                <label htmlFor="">Valor
                    <input
                        type="number"
                        name="value"
                        placeholder="R$"
                        className='inputs'
                        onChange={(event) => setFormdata({ ...formData, value: event.target.value })}
                        required />
                </label>
                <label htmlFor="">Tipo de valor
                    <select required className='inputs'
                        onChange={(event) => setFormdata({ ...formData, type: event.target.value })}>
                        <option value="entrada">Entrada</option>
                        <option value="saída">Saída</option>
                    </select>
                </label>
            </fieldset>


            <button type='submit'>Insirir valor</button>
        </form>
    )



}

