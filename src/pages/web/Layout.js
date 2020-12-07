import React from 'react';
import { Helmet } from "react-helmet-async";
import Header from './components/Header';
import Sidebar from './components/Sidebar';
const Layout = (props) => {
    const { title, description, keywords, children } = props;
    return (
        <>
            <Helmet>
                <title>{title ? title + " - munya agency" : "munya agency"} </title>
                <meta name="description" content={description || "React.js Simple and clean Boilerplate, SEO Ready | Reactjs plantilla limpia, organizada y optimizada para SEO"} />
                <meta name="keywords" content={keywords || "React.js, boilterplate, Alex developer react, reactjs boilterplate, react-router-dom"} />
            </Helmet>
            <Header/>
           <Sidebar/>
                    {children}

                  
        </>
    );
};

export default Layout;