import React from 'react'
import { Form } from '../Form/Form'
import { List } from '../List/List'
import { TotalMoney } from '../TotalMoney/TotalMoney'

export function Section({ listTransactions, setListTransactions, removeObject, addObject }) {


  return (
    <main className='conteinerPrincipal'>
      <section>
        <Form listTransactions={listTransactions} setListTransactions={setListTransactions} addObject={addObject} />

        <TotalMoney array={listTransactions} />
      </section>
      <aside>
      <h1 className='title'>Resumo financeiro</h1>
        <ul className='conteinerFinanceiro'>
          <List array={listTransactions} removeObject={removeObject} />
        </ul>
      </aside>

    </main>
  )

}

