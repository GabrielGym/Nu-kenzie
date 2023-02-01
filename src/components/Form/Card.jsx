import React from 'react'

export function Card({ atualizarLista, formData, setFormdata }) {
    return (
        <>
            <label htmlFor="">Descrição</label>
            <input
                type="text"
                name="description"
                placeholder="Digite aqui sua descrição"
                onChange={(event) => setFormdata({ ...formData, description: event.target.value })}
                required />
            <p className='exemplo'>Ex: Compra de roupas</p>
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
                        <option value="Entrada">Entrada</option>
                        <option value="Saída">Saída</option>
                    </select>
                </label>
            </fieldset>

            <button type='submit' onClick={atualizarLista}>Insirir valor</button>
        </>
    )
}
