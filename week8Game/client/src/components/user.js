import { useState } from "react";

const UserForm = (props) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    props.grabUser(value);
    console.log(value);
    setValue("");
  };

  return (
    <div className="ListMain">
      <div className="header">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Please enter your name"
            className="input"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default UserForm;