import { PassphraseProvider } from "./../PassphraseForm";
import { useContext } from "react";

const PassphraseForm = () => {
  const { setIsAuthenticated } = useContext(PassphraseProvider);

  const handleSubmit = (e) => {
    e.preventDefault();
    const password = e.target.passphrase.value;

    if (password === "iwanttoseethebaby") {
      return setIsAuthenticated(true);
    } else {
      alert(
        `You don't need to be on this site. You can go about your business.`
      );
    }
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

export default PassphraseForm;
