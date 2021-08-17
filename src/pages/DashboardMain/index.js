import SideMenu from "../../components/SideMenu";
import Header from "../../components/Header";
import { DashboardContainer } from "../../styles/mainContainers";
import { DashboardMainBox } from "./style";
import Footer from "../../components/Footer";
import { useHabits } from "../../Providers/habits";
import { useState } from "react";
import { Drawer } from "@material-ui/core";
import DrawerMenu from "../../components/DrawerMenu";
import { useContext } from "react";
import { GroupsContext } from "../../Providers/groups";
import { Redirect } from "react-router-dom";
import { useAuthentication } from "../../Providers/Authentication";

<<<<<<< HEAD
const DashboardMain = ({ authenticated }) => {
  const { habitsList, editHabit } = useHabits();
  const { groupsList } = useContext(GroupsContext);
  const [showDrawer, setShowDrawer] = useState(false);
=======
const DashboardMain = () => {
  const { habitsList, editHabit } = useHabits();
  const { groupsList } = useContext(GroupsContext);
  const [showDrawer, setShowDrawer] = useState(false);
  const { authenticated } = useAuthentication();
>>>>>>> 2dc38dfaa0cd26bb6932001efe1750cc44cf0aad

  if (!authenticated) {
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

          <div className="mainHabits">
            <h1 className="DashboardTitle">meus hábitos</h1>
            {habitsList.map((habits, index) => {
              return (
                <div key={index}>
                  <h4>{habits.title}</h4>
                  <button onClick={() => editHabit(habits)}>
                    editar hábito
                  </button>
                </div>
              );
            })}
          </div>
<<<<<<< HEAD

          <div className="mainGroups"> Meus grupos
=======
          <div className="mainGroups">
            <h1 className="DashboardTitle">meus grupos</h1>
>>>>>>> 2dc38dfaa0cd26bb6932001efe1750cc44cf0aad
            {groupsList.map((group, index) => {
              return (
                <div key={index}>
                  {group.name} - {group.category}
                </div>
              );
            })}
          </div>

        </DashboardMainBox>
      </DashboardContainer>
      <Footer />
    </div>
  );
};

export default DashboardMain;
