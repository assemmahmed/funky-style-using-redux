import SignUpForm from "../../components/sign-up-form/signupform.component";
import SignInForm from "../../components/sign-in-form/signinform.component";

import { AuthenticationContainer } from "./authentication.styles";

const Authentication = () => {
  return (
    <AuthenticationContainer>
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  );
};

export default Authentication;
