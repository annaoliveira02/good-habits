import Header from "../../components/Header";
import { DashboardContainer } from "../../styles/mainContainers";
import SideMenu from "../../components/SideMenu";
import { DashboardMainBox } from "../DashboardMain/style";
import Footer from "../../components/Footer";
import GroupCreatorPopup from "../../components/GroupCreator";
import { useState } from "react";
import { Modal } from '@material-ui/core';

const DashboardGroups = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpen = () => {
    setOpenModal(true);
  }

  const handleClose = () => {
    setOpenModal(false);
  };


  return (
    <div>
      <Header />
      <DashboardContainer>
        <SideMenu />
        <DashboardMainBox>
          <div className="mainHabits">Meus grupos</div>
          <div className="mainGroups">
            Criar grupo
            <button onClick={handleOpen}>Novo grupo</button>
          </div>
          <Modal
            open={openModal}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description" >

            <GroupCreatorPopup />

          </Modal>
        </DashboardMainBox>
      </DashboardContainer>
      <Footer />
    </div>
  )
};

export default DashboardGroups;
