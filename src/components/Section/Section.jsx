import React from 'react'
import { Form } from '../Form/Form'
import { List } from '../List/List'
import { TotalMoney } from '../TotalMoney/TotalMoney'

export function Section({ listTransactions, setListTransactions, removeObject, addObject }) {
  
  
  return (
    <main className='conteinerPrincipal'>
    <Form listTransactions={listTransactions} setListTransactions={setListTransactions} addObject={addObject} />

    <section>
      <TotalMoney array={listTransactions} />
      <ul className='conteinerFinanceiro'>
        <h1 className='title'>Resumo financeiro</h1>
        <List array={listTransactions} removeObject={removeObject} />
      </ul>
    </section>

  </main>
  )
  
}

