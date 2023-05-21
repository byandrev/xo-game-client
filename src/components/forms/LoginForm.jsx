import Input from "./Input.jsx";
import { Button } from "../base/Buttons.jsx";
import Text from "../base/Text.jsx";
import Flex from "../base/Flex.jsx";
import { useState } from "react";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeEmail = (evt) => setEmail(evt.target.value);
  const handleChangePassword = (evt) => setPassword(evt.target.value);

  const handleLogin = () => {
    console.log("Login...");
  };

  const handleLoginWithGoogle = () => {
    console.log("Login with google");
  };

  return (
    <Flex direction="column">
      <Input placeholder="Email" type="email" mb={16} value={email} onChange={handleChangeEmail} />
      <Input
        placeholder="Password"
        type="password"
        mb={16}
        value={password}
        onChange={handleChangePassword}
      />
      <Button mb={32} onClick={handleLogin}>
        Login
      </Button>
      <Text align="center" mb={32}>
        Or login with
      </Text>
      <Button onClick={handleLoginWithGoogle}>Google</Button>
    </Flex>
  );
}

export default LoginForm;
