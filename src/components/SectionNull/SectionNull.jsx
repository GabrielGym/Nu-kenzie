import img from "../../assets/Captura de tela 2023-01-30 014720.png";
import Style from "./SectionNull.css"

export const SectionNull = () => {
    return (
        <section className="conteinerNull">
            <h2>Resumo financeiro</h2>
            <h1>Você ainda não possui nenhum lançamento</h1>
            <img src={img} alt="sem dados" />
            <img src={img} alt="sem dados" />
            <img src={img} alt="sem dados" />
        </section>
    )
}