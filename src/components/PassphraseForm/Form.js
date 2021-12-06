const Form = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const password = event.target.passphrase.value;
    props.onFormSubmit && props.onFormSubmit(password);
  };

  return (
    <form onSubmit={handleSubmit} type="submit" className="form">
      <label htmlFor="passphrase" className="form--label">
        This is the way:
      </label>
      <input
        id="passphrase"
        placeholder="Show me the way"
        type="password"
        className="form--input"
      />
      <button type="password" className="form--button">
        I have spoken.
      </button>
    </form>
  );
};

export default Form;
