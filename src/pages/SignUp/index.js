import Header from "../../components/Header";
import { InitialContainer } from "../../styles/mainContainers";
import Footer from "../../components/Footer";
import SignUpForm from "../../components/SignUpForm";

const SignUp = () => {
  return (
    <div>
      <Header />
      <InitialContainer>
        <SignUpForm />
      </InitialContainer>
      <Footer />
    </div>
  );
};

export default SignUp;
