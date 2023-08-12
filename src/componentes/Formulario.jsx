import { useState } from "react";

const Formulario = ({setAlert} ) => {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [contraseña, setContraseña] = useState("");
    const [confirmContraseña, setConfirmContraseña] = useState("");
    
    const ValidarDatos = () =>{
        
        if (contraseña != confirmContraseña){
            setAlert({
                msg: "las contraseñas no coinciden",
                color: "danger",
            });
            return;
        }
    
        if (
            nombre === "" ||
            email === "" ||
            contraseña ==="" || 
            confirmContraseña ===""
        ) {
            setAlert ({ 
                msg: "Completa todos los campos",
                color: "danger",
            });
            return;
    }

    setAlert ({ 
        msg: "registro exitosos",
        color: "success",
     });
    setNombre("");
    setEmail("");
    setContraseña("");
    setConfirmContraseña("");
     };
    
    
    return (
        <>
            <form onSubmit={ValidarDatos}> 
                <div>
            <input 
                type="text" 
                name="nombre" 
                placeholder="Nombre"
                value={nombre} onChange={(e) => setNombre(e.target.value)} />
                </div>
                <div>
                <input 
                type="email" 
                name="email" 
                placeholder="123@email.com"
                value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                                <input 
                type="password" 
                name="contraseña" 
                placeholder="Contraseña"
                value={contraseña} onChange={(e) => setContraseña(e.target.value)} />
                </div>
                <div>
                                <input 
                type="password" 
                name="confirmContraseña" 
                placeholder="Confirmar Contraseña"
                value={confirmContraseña} onChange={(e) => setConfirmContraseña(e.target.value)} />
                </div>
                <div>
                <button type="submit"> Registrarse</button>
                </div>
        
            </form>
        </>
    )
}
export default Formulario