import { MenuContainer } from "./style";
import { useHistory } from "react-router";

const SideMenu = () => {

    const history = useHistory();

    return (
        <MenuContainer>
            <img src="" alt="avatar"/>
            <button onClick={() => history.push("/dashboardMain")}>Início</button>
            <button onClick={() => history.push("/dashboardHabits")}>Meus hábitos</button>
            <button onClick={() => history.push("/dashboardGroups")}>Meus grupos</button>
            <button>Configurações</button>
            <button onClick={() => history.push("/")}>Logout</button>
        </MenuContainer>
    )
}

export default SideMenu;