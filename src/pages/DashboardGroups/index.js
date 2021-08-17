import Header from "../../components/Header";
import { DashboardContainer } from "../../styles/mainContainers";
import SideMenu from "../../components/SideMenu";
import { DashboardMainBox } from "../DashboardMain/style";
import Footer from "../../components/Footer";
import { useState } from "react";
import { Drawer } from "@material-ui/core";
import DrawerMenu from "../../components/DrawerMenu";
import Modal from "../../components/Modal";
import GroupCreatorPopup from "../../components/GroupCreator";
import GroupCard from "../../components/GroupCard";
import { useContext } from "react";
import { GroupsContext } from "../../Providers/groups";
import { Redirect } from "react-router-dom";
import { useAuthentication } from "../../Providers/Authentication";
import { GroupsBox } from "./style";

const DashboardGroups = (authenticated) => {
  const [openModalCreator, setOpenModalCreator] = useState(false);
  const { groupsList } = useContext(GroupsContext);
  const [showDrawer, setShowDrawer] = useState(false);
  const { authenticated } = useAuthentication();

  const handleOpenCreator = () => {
    setOpenModalCreator(true);
  };

  if (authenticated === false) {
    return <Redirect to="/login" />;
  }

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
<<<<<<< HEAD
          <div className="mainHabits">
            Meus grupos
            {groupsList.map((group) => (
              <GroupCard key={group.id} group={group} />
            ))}
          </div>
          <div className="mainGroups">
            Criar grupo
            <button onClick={handleOpenCreator}>Novo grupo</button>
          </div>
=======
          <GroupsBox>
            <h1 className="DashboardTitle">meus grupos</h1>
            {groupsList.map((group) => (
              <GroupCard key={group.id} group={group} />
            ))}
          </GroupsBox>
          <GroupsBox>
            <h1 className="DashboardTitle">explorar grupos</h1>
            <div className="GroupExplorer">
              <button onClick={handleOpenCreator}>Novo grupo</button>
            </div>
          </GroupsBox>
>>>>>>> f58ec73834399765bb973414f09d2207aaa518d5
          <Modal
            openModal={openModalCreator}
            setOpenModal={setOpenModalCreator}
          >
            <GroupCreatorPopup />
          </Modal>
        </DashboardMainBox>
      </DashboardContainer>
      <Footer />
    </div>
  );
};

export default DashboardGroups;
