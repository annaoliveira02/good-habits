import Header from "../../components/Header";
import { DashboardContainer } from "../../styles/mainContainers";
import SideMenu from "../../components/SideMenu";
import { DashboardMainBox } from "../DashboardMain/style";
import Footer from "../../components/Footer";
import { useState } from "react";
import { Drawer } from "@material-ui/core";
import DrawerMenu from "../../components/DrawerMenu";
import GroupCreatorPopup from "../../components/GroupCreator";
import GroupEditorPopup from '../../components/GroupEditor';
import { Modal } from "@material-ui/core";

const DashboardGroups = () => {
  const [openModalCreator, setOpenModalCreator] = useState(false);
  const [openModalEditor, setOpenModalEditor] = useState(false);

  const [showDrawer, setShowDrawer] = useState(false);

  const handleOpenCreator = () => {
    setOpenModalCreator(true);
  };

  const handleCloseCreator = () => {
    setOpenModalCreator(false);
  };

  const handleOpenEditor = () => {
    setOpenModalEditor(true);
  };

  const handleCloseEditor = () => {
    setOpenModalEditor(false);
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
          <Modal
            open={openModalCreator}
            onClose={handleCloseCreator}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            <GroupCreatorPopup />
          </Modal>
          <button onClick={handleOpenEditor}> Editar grupo </button>
          <Modal
            open={openModalEditor}
            onClose={handleCloseEditor}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            <GroupEditorPopup />
          </Modal>

        </DashboardMainBox>
      </DashboardContainer>
      <Footer />
    </div>
  );
};

export default DashboardGroups;
