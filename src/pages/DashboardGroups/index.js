import Header from "../../components/Header";
import { DashboardContainer } from "../../styles/mainContainers";
import SideMenu from "../../components/SideMenu";
import { DashboardMainBox } from "../DashboardMain/style";
import Footer from "../../components/Footer";
import { useState } from "react";
import { Drawer } from "@material-ui/core";
import DrawerMenu from "../../components/DrawerMenu";
import ModalComponent from '../../components/Modal';
import GroupCreatorPopup from "../../components/GroupCreator";
import GroupCard from "../../components/GroupCard";
import { useContext } from "react";
import { GroupsContext } from "../../Providers/groups";
import { Redirect } from "react-router-dom";
import { useAuthentication } from "../../Providers/Authentication";
import { GroupsBox } from "./style";
import SubscribeGroup from '../../components/SubscribeGroup';

const DashboardGroups = () => {
  const [openModalCreator, setOpenModalCreator] = useState(false);
  const [openModalSubscribe, setOpenModalSubscribe] = useState(false);
  const { groupsList } = useContext(GroupsContext);
  const [showDrawer, setShowDrawer] = useState(false);
  const { authenticated } = useAuthentication();


  const handleOpenCreator = () => {
    setOpenModalCreator(true);
  };

  const handleOpenSubscribe = () => {
    setOpenModalSubscribe(true);
  }

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
          <GroupsBox>
            <h1 className="DashboardTitle">meus grupos</h1>
            {groupsList.map((group) => (
              <GroupCard key={group.id} group={group} />
            ))}
            <button onClick={handleOpenCreator}>Novo grupo</button>
            <ModalComponent
              openModal={openModalCreator}
              setOpenModal={setOpenModalCreator}
            >
              <GroupCreatorPopup />
            </ModalComponent>
          </GroupsBox>
          <GroupsBox>
            <h1 className="DashboardTitle">explorar grupos</h1>
            <div className="GroupExplorer">
              <button onClick={handleOpenSubscribe} > Procurar grupo novo </button>
            </div>
            <ModalComponent openModal={openModalSubscribe} setOpenModal={setOpenModalSubscribe}>
              <SubscribeGroup />
            </ModalComponent>
          </GroupsBox>
        </DashboardMainBox>
      </DashboardContainer>
      <Footer />
    </div>
  );
};

export default DashboardGroups;
