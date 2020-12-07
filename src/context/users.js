
var base64 = require('base-64');

export async function loadUser() {
  let usuario={}
    let user =  window.sessionStorage.getItem("token")
  
    if (user) {
      let user2 = user.slice(1,-1)
      user = base64.decode(user2);
 
      if (user) {

        usuario.id = user.userId
        usuario.SuperUser = user.SuperUser
        usuario.nombre = user.UserName
        usuario.depto = user.Department
        usuario.gorup= user.UserGroup
        usuario.type = user.UserType
        usuario.token = user.token

      } else {
        user.id = { id: 0, tipo: 0 };
      }
      this.setState({ user: user });
      return JSON.parse( user);
    }
  }
  
  export function login(data) {
    window.sessionStorage.setItem("decoAdmin", JSON.stringify(data));
    this.setState({ user: data });
  }
  
  export function logout() {
    window.sessionStorage.setItem("decoAdmin", '{"auth": false}');
    window.sessionStorage.removeItem("decoAdmin");
    window.sessionStorage.removeItem("Menus");
    window.sessionStorage.removeItem("Productos");
    this.setState({ user: { auth: false } });
  }
  
  function parseJwt(token) {
    var base64Url = token.split(".")[1];
    var base64 = base64Url.replace("-", "+").replace("_", "/");
    return JSON.parse(window.atob(base64));
  }