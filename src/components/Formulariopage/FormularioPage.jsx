import './FormularioPage.css';
import logo from './assest/logo.png';


function FormularioPage() {

  return (
    <div style={{ display: 'flex' }}>


      <div className="card">
        <div>
          <img src={logo} width={350} alt="" />
        </div>

        <div style={{ marginTop: 45 }}>
          <input className="input" placeholder='Nombre de usuario' type="text" />
        </div>

        <div style={{ marginTop: 5 }} >
          <input className="input" placeholder=' Imagen' type="text" />
        </div>
        <div style={{ marginTop: 5 }} >
          <input className="input" placeholder='Contraseña' type="text" />
        </div>
        <div style={{ marginTop: 5 }} >
          <input className="input" placeholder='Hola@test.com' type="text" />
        </div>
        <div style={{ marginTop: 5 }} >
          <input className="input" placeholder='Nombre' type="text" />
        </div>
        <div style={{ marginTop: 5 }} >
          <input className="input" placeholder='Apellido' type="text" />
        </div>
        <div style={{ marginTop: 5 }} >
          <input className="input" placeholder='Ciudad' type="text" />
        </div>
        <div style={{ marginTop: 5 }} >
          <input className="input" placeholder='Pais' type="text" />
        </div>


        <div style={{ marginTop: 35 }}>
          <button className='button'>Enviar</button>

          <div className='flex justify-center gap-3 social-login'>
            <button className="hover:scale-120 transition-transform duration-300 cursor-pointer social google">
              <img src="https://w7.pngwing.com/pngs/989/129/png-transparent-google-logo-google-search-meng-meng-company-text-logo.png" alt="Google" style={{ borderRadius: "50%" }} className="w-15 h-15" />
            </button>
            <button className="hover:scale-120 transition-transform duration-300 cursor-pointer social facebook">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png" alt="Facebook" style={{ borderRadius: "50%" }} className="w-15 h-15" />
            </button>
            <button className="hover:scale-120 transition-transform duration-300 cursor-pointer social github">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThdZlszhihSfJBfoXkpJtOvDk9p_sskS4rSQ&s" alt="Github" style={{ borderRadius: "50%" }} className="w-15 h-15" />
            </button>

          </div>
          <button className='Sbutton'>ya tengo una cuenta</button>
        </div>
        <div>

        </div>














      </div>




    </div>
  )
}

export default FormularioPage;