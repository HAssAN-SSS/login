import './Login_panel.css'
import logo from "/logo.svg"
function Login_panel() {



    return (
        <main id="login_panel">
            <div id='logo-login-panel'>
                <img src={logo} alt="logo" srcset="" className='logo_login_panel' />

            </div>


            <h1 id='login_panel_title'>
                se connecter

            </h1>

            <input type="email" className="login_input" placeholder='Veuillez entrer votre e-mail' />

            <div className='input_line'></div>

            {/* <div className='create_account_link'>
                Créer un compte

            </div> */}

            <button className='ok_btn'>suivant</button>
        </main>
    )
}

export default Login_panel