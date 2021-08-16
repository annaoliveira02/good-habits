import { MenuButton, MenuContainer } from "./style";
import { useHistory } from "react-router";
import { Modal } from "@material-ui/core";
import { useState } from "react";

const SideMenu = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const history = useHistory();

  const handleLogout = () => {
    localStorage.clear();
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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      ></Modal>
      <MenuButton onClick={handleLogout}>Logout</MenuButton>
    </MenuContainer>
  );
};

export default SideMenu;
