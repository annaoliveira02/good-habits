import { DrawerButton, DrawerContainer } from "./style";
import { useHistory } from "react-router";
import { useContext } from "react";
import { UserContext } from "../../Providers/user";

const DrawerMenu = () => {

    const history = useHistory();
    const { userName } = useContext(UserContext)

    const handleLogout = () => {
        localStorage.clear()
        history.push("/")
    }

    return (
        <DrawerContainer>
            <img src="https://i.pravatar.cc/120" alt="avatar"/>
            <h4 className="userTitle">Olá, {userName}</h4>
            <DrawerButton onClick={() => history.push("/dashboardMain")}>Início</DrawerButton>
            <DrawerButton onClick={() => history.push("/dashboardHabits")}>Meus hábitos</DrawerButton>
            <DrawerButton onClick={() => history.push("/dashboardGroups")}>Meus grupos</DrawerButton>
            <DrawerButton>Configurações</DrawerButton>
            <DrawerButton onClick={handleLogout}>Logout</DrawerButton>
        </DrawerContainer>        
    )
}

export default DrawerMenu;