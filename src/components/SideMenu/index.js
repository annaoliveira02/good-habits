import { MenuButton, MenuContainer } from "./style";
import { useHistory } from "react-router";
import { useState } from "react";
import UpdateUser from "../updateUser";
import React from "react";
import { useAuthentication } from "../../Providers/Authentication";
import Modal from "../Modal";

const SideMenu = () => {
  const [open, setOpen] = useState(false);
  const { setAuthenticated } = useAuthentication();
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
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
      <Modal openModal={open} setOpenModal={handleClose}>
        <UpdateUser />
      </Modal>
      <MenuButton onClick={handleLogout}>Logout</MenuButton>
    </MenuContainer>
  );
};

export default SideMenu;
