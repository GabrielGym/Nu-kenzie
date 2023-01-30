import nuImg from "../../assets/Nu Kenzie.svg"
import imgHome from "../../assets/Group 262.svg"
import styles from "./Home.css"

export const Home = ({btnLogin}) => {
    return (
        <div className="conteinerHomePage">
            <img src={nuImg} alt="Logo Kenzie" />
            <h1>Centralize o controle das suas finanças</h1>
            <p>de forma rápida e segura</p>
            <button onClick={btnLogin}>Iniciar</button>
            <img src={imgHome} alt="exemplo" className="fundo"/>
        </div>
    )
}