import "./LogIn.css";
import avatar from "/assets/img/avatar.jpg";
import avatarB from "/assets/img/avatar_b.jpg";
import guest from "/assets/img/guest-star.png";
import keys from "/assets/icons/keys.svg";
import { useState } from "react";

const LogIn = () => {
  const [userSelect, setUserSelect] = useState(1);
  const [accessKey, setAccessKey] = useState("");

  const decrement = () => {
    if (userSelect === 0) {
      setUserSelect(2);
    } else {
      setUserSelect(userSelect - 1);
    }
  };

  const increment = () => {
    if (userSelect === 2) {
      setUserSelect(0);
    } else {
      setUserSelect(userSelect + 1);
    }
  };

  const handleKeyChange = (e) => {
    setAccessKey(e.target.value);
  };

  const handleAccess = (e) => {
    e.preventDefault();

    if (import.meta.env.VITE_ACCESS_KEY !== accessKey) {
      alert("incorrect access key");
    } else {
      alert("Correct access key");
    }
  };

  return (
    <section id="LogIn">
      <form id="login-form" action="" onSubmit={(e) => handleAccess(e)}>
        <div id="login-user-wrp">
          <button type="button" onClick={decrement}>
            <img
              src="/assets/icons/caret-left.svg"
              alt="Seta apontada para a esquerda"
            />
          </button>
          <div id="login-user-display">
            <div className={userSelect === 0 ? "selected" : ""}>
              <img src={avatar} alt="Imagem de avatar Wendel" />
              <p>Wendel</p>
            </div>
            <div className={userSelect === 1 ? "selected" : ""}>
              <img src={guest} alt="Imagem de avatar convidado" />
              <p>Convidado</p>
            </div>
            <div className={userSelect === 2 ? "selected" : ""}>
              <img src={avatarB} alt="Imagem de avatar Bianca" />
              <p>Bianca</p>
            </div>
          </div>
          <button type="button" onClick={increment}>
            <img
              src="/assets/icons/caret-left.svg"
              alt="Seta apontada para a direita"
            />
          </button>
        </div>
        <div id="login-password-wrp">
          <img src={keys} alt="Icone de chaves" />
          <input
            id="login-password"
            type="password"
            placeholder="chave de acesso"
            value={accessKey}
            onChange={handleKeyChange}
          />
        </div>
        <input id="login-access" type="submit" value="Acessar" />
      </form>
    </section>
  );
};

export default LogIn;
