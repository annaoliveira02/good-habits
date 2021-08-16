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

const DashboardMain = () => {
  const { habitsList, editHabit } = useHabits();
  const { groupsList } = useContext(GroupsContext)
  const [showDrawer, setShowDrawer] = useState(false)

  return (
    <div>
      <Drawer anchor="left" open={showDrawer} onClose={() => setShowDrawer(false)}>
        <DrawerMenu/>
      </Drawer>
      <Header setShowDrawer={setShowDrawer}/>
      <DashboardContainer>
        <SideMenu />
        <DashboardMainBox>
          <div className="mainHabits">
            <h3>Acompanhe seus hábitos</h3>
            {habitsList.map((habits) => {
              return (
                <div>
                  <h4>{habits.title}</h4>
                  <button onClick={() => editHabit(habits)}>
                    editar hábito
                  </button>
                </div>
              );
            })}
          </div>
          <div className="mainGroups">Meus grupos
            {groupsList.map((group) => {
              <div>
                {group.name} - {group.category}
              </div>
            })}
          </div>
        </DashboardMainBox>
      </DashboardContainer>
      <Footer />
    </div>
  );
};

export default DashboardMain;
