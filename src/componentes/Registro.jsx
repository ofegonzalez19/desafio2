
import Formulario from './Formulario';
import SocialButton from './SocialButton';
import Alert from './Alert'

const Registro = ({alert, setAlert} ) => {

    return (
        <>
        <h1>Crea una cuenta</h1>
        <SocialButton icon="fa-brands fa-facebook"/>
        <SocialButton icon="fa-brands fa-github"/>
        <SocialButton icon="fa-brands fa-linkedin-in"/>
        <Formulario setAlert={setAlert} />
        {alert.msg && <Alert msg= {alert.msg} color={ alert.color}/> }  </>
    )
}

export default Registro