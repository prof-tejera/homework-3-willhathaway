import "./Input.css";

const Input = (props) => {
  return <div className="inputDiv">
    <p className="inputName">{props.inputName+":"}</p><input />
    </div>
};

export default Input;
