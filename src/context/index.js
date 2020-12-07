import React, { Component, createContext } from "react";
import { loadUser, login, logout } from "./users";


// Instancia del Context, métodos: Provider y Consumer

const Context = createContext();
class GlobalContext extends Component {

    state = {
        init: null,
        loadUser: loadUser.bind(this),
        login: login.bind(this),
        logout: logout.bind(this),
 
    };

    componentDidMount() {
        this.state.loadUser();
        
    }

    render() {
        return (
            <Context.Provider value = { this.state }>
                { this.props.children }
            </Context.Provider>
        );
    }
}

/**
 * @function: Consumer
 * @description: HOC conector entre el estado global y un componente consumidor.
 * @param: Component => Componente Web
*/

const Consumer = Component => {
    return props => {
        return (
            <Context.Consumer>
                { context => <Component { ...props } context = { context } /> }
            </Context.Consumer>
        );
    };
};
export { Consumer, GlobalContext };