const FormAbout = () => {

    return(
        <div className="animate__animated animate__fadeInLeft" style={{width:"50%"}}>
            <p className="title_about">PassWallet</p>
            <p className="p_about">PassWallet is an application created with the purpose of storing in a secure and centralized way the passwords of the online accounts that you can have in different websites and more.</p>
            <p className="p_about">The passwords are stored in Firebase with AES encryption from the client so it cannot be seen by any other user.</p>
            <p className="p_about">The account cannot be recovered and the information cannot be decrypted without the login password.</p>
            <p className="p_about">The password can be changed as long as you have the login password.</p>
            <p className="p_about">All information can be deleted with the login password.</p>
            <p className="p_about">The application includes a 12-digit random password generator that includes both lowercase and uppercase alphanumeric characters, numbers and symbols.</p>
            <p className="p_about">The stored information can be modified and not all fields are mandatory.</p>
            <p className="p_about">Author: Marco Velasquez Figarella</p>
            <p className="p_about">Github: https://github.com/Marco90v</p>
            <hr/>
            <p className="title_about">PassWallet</p>
            <p className="p_about">PassWallet es una aplicación crea con la finalidad de almacenar de manera segura y centralizada las contraseñas de las cuentas online que se pueden tener en diferentes sitios webs y más.</p>
            <p className="p_about">Las contraseñas son almacenadas en Firebase con el cifrado AES desde el cliente por lo que no podrá ser visto por ningún otro usuario.</p>
            <p className="p_about">La cuenta no puede ser recuperada y la información no puede ser descifrada sin la contraseña de inicio de sesión.</p>
            <p className="p_about">La contraseña puede ser modificada siempre que se tenga la contraseña de inicio de sesión.</p>
            <p className="p_about">Se puede eliminar toda la información con la contraseña de inicio de sesión.</p>
            <p className="p_about">La aplicación incluye un generador de contraseñas aleatorias de 12 cifras que incluyen caracteres alfanúmeros tanto minúsculas como mayúsculas, números y símbolos.</p>
            <p className="p_about">La información almacenada puede ser modificada y no todos los campos son obligatorios.</p>
            <p className="p_about">Autor: Marco Velasquez Figarella</p>
            <p className="p_about">Github: https://github.com/Marco90v</p>
        </div>
    );

}

export default FormAbout;