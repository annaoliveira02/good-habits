import Header from "../../components/Header";
import { DashboardContainer } from "../../styles/mainContainers";
import SideMenu from "../../components/SideMenu";
import { DashboardMainBox } from "../DashboardMain/style";
import Footer from "../../components/Footer";
import { useState } from "react";
import { Drawer } from "@material-ui/core";
import DrawerMenu from "../../components/DrawerMenu";
import Modal from '../../components/Modal';
import GroupCreatorPopup from "../../components/GroupCreator";
// import { Modal } from "@material-ui/core";

const DashboardGroups = () => {
  const [openModalCreator, setOpenModalCreator] = useState(false);

  const [showDrawer, setShowDrawer] = useState(false);

  const handleOpenCreator = () => {
    setOpenModalCreator(true);
  };

  const handleCloseCreator = () => {
    setOpenModalCreator(false);
  };

  return (
    <div>
      <Drawer
        anchor="left"
        open={showDrawer}
        onClose={() => setShowDrawer(false)}
      >
        <DrawerMenu />
      </Drawer>
      <Header setShowDrawer={setShowDrawer} />
      <DashboardContainer>
        <SideMenu />
        <DashboardMainBox>
          <div className="mainHabits">Meus grupos</div>
          <div className="mainGroups">
            Criar grupo
            <button onClick={handleOpenCreator}>Novo grupo</button>
          </div>
          {/* <Modal
            open={openModalCreator}
            onClose={handleCloseCreator}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
        </Modal> */}
          <Modal openModal={openModalCreator} setOpenModal={setOpenModalCreator}>
            <GroupCreatorPopup />
          </Modal>
        </DashboardMainBox>
      </DashboardContainer>
      <Footer />
    </div>
  );
};

export default DashboardGroups;
