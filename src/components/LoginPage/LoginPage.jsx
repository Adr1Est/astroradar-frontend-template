import './LoginPage.css';
import logo from './assest/logo.png';

function LoginPage() {

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1, backgroundColor: '', padding: '20px' }}>
        <div>
          <img src={logo} width={350} alt="" />
        </div>

        <div style={{ marginTop: '70px' }}>
          <div><p >AstroRadar es tu guia interactiva para descubrir todos los enventos astronomicos visibles desde tu ciudad:</p>
            <div style={{ marginBottom: '20px' }}>
              <ul>
                <li>✔ Elige que quieres ver</li>
                <li>✔ Recibe sugerencias de miradoras reales</li>
                <li>✔ Guarda tus fotos y misiones completadas</li>
                <li>✔ Suma logros y conecta con otros observadores cerca tuyo</li>
              </ul>
            </div>

            <div style={{ marginTop: '120px' }}>
              <p style={{ textAlign: 'center' }}>Todo lo que necesitas para vivir la astronomia de forma activa simple y personalizada. </p>
              <p style={{ marginTop: '20px', }}>
                🔭 Inicia sesion y empiza a mirar el cielo con otros ojos
              </p></div>

          </div>
        </div>



      </div>
      <div style={{ flex: 1, padding: '20px' }}>
        <div className="login-card">
          <h1 width={350}>Login</h1>
          <p className="subtitle">¡Nos alegra volverte a ver!</p>
          <input placeholder='Username' type="text" />
          <div style={{marginTop: 15}}>
            <input placeholder='password' type="text" />
          </div>



          <div className='options'>
            <label clas> <input type="checkbox" /> Recuerdame </label>
          </div>
          <div>
            <button className='login-button'>login</button>
            <a href="#" className='forgot'> olvidaste la contraseña?</a>
            <div className='divider'>
              <span>Or</span>
            </div>
          </div>
          <div className='social-login'>
            <button className="social google">
              <img src="https://w7.pngwing.com/pngs/989/129/png-transparent-google-logo-google-search-meng-meng-company-text-logo.png" alt="Google" style={{ borderRadius: "50%" }} className="w-15 h-15" />
            </button>
            <button className="social facebook">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png" alt="Facebook" style={{ borderRadius: "50%" }} className="w-15 h-15" />
            </button>
            <button className="social github">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThdZlszhihSfJBfoXkpJtOvDk9p_sskS4rSQ&s" alt="Github" style={{ borderRadius: "50%" }} className="w-15 h-15" />
            </button>
          </div>

          <p style={{ textAlign: 'center' }}>No tienes una cuenta? <a href='#'></a></p>

          <div className='footer-links'>
            <a href="#">Terms & Conditions</a>
            <a href="#">Support</a>
            <a href="#">Customer Care</a>
          </div>


        </div>
      </div>



    </div>
  )
}

export default LoginPage;