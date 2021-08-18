import { HeaderMain } from "./style";
import { useHistory } from "react-router";
import { MainButton } from "../../styles/mainContainers";
import { AiOutlineMenu } from "react-icons/ai";
import { useAuthentication } from "../../Providers/Authentication";

const Header = ({ setShowDrawer }) => {
  const { authenticated } = useAuthentication();

  const history = useHistory();

  return (
    <HeaderMain>
      {authenticated && (
        <div className="MenuButton" onClick={() => setShowDrawer(true)}>
          <AiOutlineMenu />
        </div>
      )}

      <div onClick={() => history.push("/")} className="HeaderLogo">
        <h1 className="Logo1">good</h1>
        <h1 className="Logo2">habits.</h1>
      </div>
      <div className="HeaderButtons">
        <MainButton onClick={() => history.push("/Login")}>Login</MainButton>
        <MainButton onClick={() => history.push("/SignUp")}>
          Cadastro
        </MainButton>
      </div>
    </HeaderMain>
  );
};

export default Header;
