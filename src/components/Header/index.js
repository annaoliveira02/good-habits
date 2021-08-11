import { HeaderMain } from "./style"
import { useHistory } from "react-router";
import { MainButton } from "../../styles/mainContainers";

const Header = () => {

    const history = useHistory();
    
    return (
        <HeaderMain>
            <div onClick={() => history.push("/")} className="HeaderLogo">
                Goodhabits
            </div>
            <div className="HeaderButtons">
                <MainButton onClick={() => history.push("/Login")}>Login</MainButton>
                <MainButton onClick={() => history.push("/SignUp")}>Cadastre-se</MainButton>
            </div>
        </HeaderMain>
    )
}

export default Header;