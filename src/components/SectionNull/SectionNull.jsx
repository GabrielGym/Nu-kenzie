import img from "../../assets/Captura de tela 2023-01-30 014720.png";
import { Form } from "../Form/Form";
import Style from "./SectionNull.css"

export const SectionNull = ({ listTransactions, setListTransactions,  addObject}) => {
    return (
        <main className='conteinerPrincipal'>
            <Form listTransactions={listTransactions} setListTransactions={setListTransactions} addObject={addObject} />

            <section className="conteinerNull">
                <h2>Resumo financeiro</h2>
                <h1>Você ainda não possui nenhum lançamento</h1>
                <img src={img} alt="sem dados" />
                <img src={img} alt="sem dados" />
                <img src={img} alt="sem dados" />
            </section>
        </main>
    )
}