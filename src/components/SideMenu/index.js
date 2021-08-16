import { MenuButton, MenuContainer } from "./style";
import { useHistory } from "react-router";

const SideMenu = () => {

    const history = useHistory();

    const handleLogout = () => {
        localStorage.clear()
        history.push("/")
    }

    return (
        <MenuContainer>
            <img src="https://i.pravatar.cc/120" alt="avatar"/>
            <MenuButton onClick={() => history.push("/dashboardMain")}>Início</MenuButton>
            <MenuButton onClick={() => history.push("/dashboardHabits")}>Meus hábitos</MenuButton>
            <MenuButton onClick={() => history.push("/dashboardGroups")}>Meus grupos</MenuButton>
            <MenuButton>Configurações</MenuButton>
            <MenuButton onClick={handleLogout}>Logout</MenuButton>
        </MenuContainer>       
    )
}

export default SideMenu;