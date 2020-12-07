/**
 *  @version 1.0.0
 *  @author Alexis grupo Hannan
 *  @description Manejo de sesión de usuario
*/

/**
 * @description: Función para obtener validar la sesisón de usuario: CONFIGURARA A NECESIDAD
*/
export const verifySession = () => {
    const data =true
    // const data = sessionStorage.getItem("token");
    if (data) {
        return true;
    } else {
        return false;
    }
}; 