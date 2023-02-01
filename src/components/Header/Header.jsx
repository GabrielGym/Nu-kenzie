import nuImg from "../../assets/Nu Kenzie DashBoard.svg"
import Styles from "./Header.css"

export const Header = ({ BtnLogout }) => {

    return (
        <header>
            <nav className="header">
                <img src={nuImg} alt="logo Kenzie" />
                <button onClick={BtnLogout}>Inicio</button>
            </nav>
        </header>

    )
}