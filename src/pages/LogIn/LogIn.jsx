import "./LogIn.css";
import logo from "/assets/img/logo.png";
import avatar from "/assets/img/avatar.jpg";

const LogIn = () => {
  return (
    <section id="LogIn">
      <form id="login-form" action="">
        <div id="login-user-wrp">
          <button type="button">
            <img
              src="/assets/icons/caret-left.svg"
              alt="Seta apontada para a esquerda"
            />
          </button>
          <div id="login-user-display">
            <div>
              <img src={avatar} alt="Imagem Wendel" />
              <p>Wendel</p>
            </div>
          </div>
          <button type="button">
            <img
              src="/assets/icons/caret-left.svg"
              alt="Seta apontada para a direita"
            />
          </button>
        </div>
        <input
          id="login-password"
          type="password"
          placeholder="chave de acesso"
        />
        <input id="login-access" type="submit" value="Acessar" />
      </form>
    </section>
  );
};

export default LogIn;
