import { useState } from 'react'
import './App.css'
import { Form } from './components/Form/Form'
import { TotalMoney } from './components/TotalMoney/TotalMoney'
import { Home } from './components/HomePage/Home'
import { Header } from './components/DashBoard/Header'
import { SectionNull } from './components/SectionNull/SectionNull'
import { List } from './components/List/List.jsx'
import { v4 as uuidv4 } from 'uuid'

function App() {

  const [listTransactions, setListTransactions] = useState([
        { description: "Salário recebido", type: "entrada", value: 2500 },
        { description: "Conta de luz", type: "saída", value: -150 }
  ])

  let [user, setUser] = useState(false)

  const Login = () => {
    setUser(user = true)
  }

  const Logout = () => {
    setUser(user = false)
  }

  const addObject = (objects) => {
    const newObject = { ...objects, id: uuidv4()}
    setListTransactions([ ...listTransactions, newObject])
  }


  if (user) {
    return (
      <div className='colorFundo'>
        <div className='conteiner'>
          <header>
            <Header BtnLogout={Logout} />
          </header>
          <main className='conteinerPrincipal'>
            <Form listTransactions={listTransactions} setListTransactions={setListTransactions} addObject={addObject}/>

            {listTransactions.length > 0 ? (
              <section>
                <TotalMoney array={listTransactions} />
                <ul className='conteinerFinanceiro'>
                  <h1 className='title'>Resumo financeiro</h1>
                  <List array={listTransactions}/>
                </ul>
              </section>
            ) : (
              <SectionNull />
            )}

          </main>
        </div>
      </div>
      )
  } else {
    return (
      <div className='conteinerHome'>
        <Home btnLogin={Login} />
      </div>
    )
  }
}

export default App
