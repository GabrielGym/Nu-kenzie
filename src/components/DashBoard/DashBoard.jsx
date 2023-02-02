import React, { useState } from 'react'
import { Header } from '../Header/Header'
import { Section } from '../Section/Section'
import { SectionNull } from '../SectionNull/SectionNull'
import { v4 as uuidv4 } from 'uuid'


export function DashBoard({ Logout }) {

    const [listTransactions, setListTransactions] = useState([])

    const addObject = (objects) => {
        const newObject = { ...objects, id: uuidv4() }
        setListTransactions([...listTransactions, newObject])
    }

    const removeObject = (objectId) => {

        const newObject = listTransactions.filter(object => object.id !== objectId)
        setListTransactions(newObject)
    }

    return (
        <div className='colorFundo'>
            <div className='conteiner'>
                <Header BtnLogout={Logout} />
                
                {listTransactions.length > 0 ? (
                    <Section listTransactions={listTransactions} setListTransactions={setListTransactions} removeObject={removeObject} addObject={addObject} />
                ) : (
                    <SectionNull listTransactions={listTransactions} setListTransactions={setListTransactions} addObject={addObject}/>
                )}
            </div>
        </div>
    )

}

