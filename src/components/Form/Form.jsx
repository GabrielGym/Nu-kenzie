import { useState } from 'react'
import { Card } from './Card'
import Styles from './Form.css'

export const Form = ({ listTransactions, addObject }) => {
    const [formData, setFormdata] = useState({
        description: "",
        type: "Entrada",
        value: "",
    })

    const submit = (event) => {
        event.preventDefault()
        addObject(formData)
    }

    const atualizarLista = () => {
        const novoArray = {...listTransactions, formData}
        return novoArray
    }

    return (
        <form className="conteinerForm" onSubmit={submit}>
            <Card formData={formData} atualizarLista={atualizarLista} setFormdata={setFormdata}/>
        </form>
    )
}

