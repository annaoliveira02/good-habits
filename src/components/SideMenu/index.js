import { MenuButton, MenuContainer } from "./style";
import { useHistory } from "react-router";
import ModalComponent from '../Modal';
import { useState } from "react";
import UpdateUser from "../updateUser";
import React from "react";
import { useAuthentication } from "../../Providers/Authentication";
import Modal from "../Modal";
import { useContext } from "react";
import { UserContext } from "../../Providers/user";

const SideMenu = () => {
  const [open, setOpen] = useState(false);
  const { setAuthenticated } = useAuthentication();
  const { userName } = useContext(UserContext);
  const handleOpen = () => {
    setOpen(true);
  };

  const history = useHistory();

  const handleLogout = () => {
    localStorage.clear();
    setAuthenticated(false);
    history.push("/");
  };

  return (
    <MenuContainer>
      <img src="https://i.pravatar.cc/120" alt="avatar" />
      <h4 className="userTitle">Olá, {userName}</h4>
      <MenuButton onClick={() => history.push("/dashboardMain")}>
        Início
      </MenuButton>
      <MenuButton onClick={() => history.push("/dashboardHabits")}>
        Meus hábitos
      </MenuButton>
      <MenuButton onClick={() => history.push("/dashboardGroups")}>
        Meus grupos
      </MenuButton>
      <MenuButton onClick={handleOpen}>Configurações</MenuButton>
      <ModalComponent openModal={open} setOpenModal={setOpen}>
        <UpdateUser />
      </ModalComponent>
      <MenuButton onClick={handleLogout}>Logout</MenuButton>
    </MenuContainer>
  );
};

export default SideMenu;
