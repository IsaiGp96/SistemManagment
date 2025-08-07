import monta from '../assets/logo/monta.png';
import logo from '../assets/logo/logo.png';

function Login() {
  return (
    <>
      {/* Logo MOBINSA arriba a la izquierda */}
      <header className="absolute top-4 left-4">
        <img src={logo } alt="MOBINSA LOGO" className="w-60 h-auto" />
      </header>

      {/* Contenedor principal con flex responsivo */}
      <div className="login-form min-h-screen flex flex-col lg:flex-row items-center justify-center px-4 py-10">

        {/* Formulario de login */}
        <div className="formulario_login w-full max-w-md p-6 sm:p-8 rounded-md shadow-md text-center">
          <h2 className="text-white text-2xl font-semibold mb-2">Bienvenido</h2>
          <h3 className="text-white mb-6">
            Por favor ingresa tu usuario y contraseña
          </h3>
          <form className="space-y-4">
            <div className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Usuario"
                className="usr"
              />
              <input
                type="password"
                placeholder="Contraseña"
                className="pwd"
              />
              <button type="submit" className="btn_loging">
                Ingresar
              </button>
            </div>
          </form>

          <div className="mt-6 text-white text-sm">
            <p>¿Olvidaste tu contraseña?</p>
            <p>
              Contacta a sistemas en el siguiente{" "}
              <a
                href="mailto:sistemas@mobinsa.com"
                className="underline text-blue-200"
              >
                enlace
              </a>
            </p>
          </div>
        </div>

        {/* Imagen de montacargas (solo en pantallas grandes) */}
        <aside className="hidden lg:block ml-40">
          <img
            src={monta}
            alt="montacargas"
            className="max-w-[500px] monta"
          />
        </aside>
      </div>
    </>
  );
}

export default Login;
