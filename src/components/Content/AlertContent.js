const AlertContent = (props) => {
  return (
    <div className="content">
      <p className="content--p">
        You don't need to be on this site. You can go about your business.
      </p>
      <img
        className="content--img"
        alt=""
        src="https://zombiesruineverything.files.wordpress.com/2013/11/obs3.jpg"
      />
      <button onClick={props.handleClick}>Try again</button>
    </div>
  );
};

export default AlertContent;
