const Header = (props) => {

  let message;
  if (props.user) {
    message = `Welcome to my game ${props.user}`;
  } else {
    message = `Welcome to my game`;
  }
  
  return (
    <div className={"textHeader"}>
      <h3>{message}</h3>
    </div>
  );
};

export default Header;