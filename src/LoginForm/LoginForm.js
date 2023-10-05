import Button from "components/Button/Button";
import "./LoginForm.css";
import Input from "components/Input/Input";
import RadioBtn from "components/RadioBtn/RadioBtn";

const LoginForm = () => {
  return (
    <div className="inputForm">
      <Input inputName="Username" />
      <Input inputName="Password" />
      <RadioBtn name="Remember me:" />
      <Button text="Submit"/>
    </div>
  );
};

export default LoginForm;
