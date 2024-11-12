import React from "react";
import Header from "./components/header";
import Section from "./components/section";
import Linkp from "./components/link-p";
import Icons from "./components/icons";
import Girl from "./components/girl";
import Boy from "./components/boy";
import Uncle from "./components/uncle";
import Book from "./components/book";
import Aside from "./components/aside";
import Footer from "./components/footer";
import Fackbook from "./components/fackbook";
import Get from "./components/get";
import { RouterProvider } from "react-router-dom";

const Home = () => {
    return (
        <>
            <Header />
            <Section />
            <Linkp />
            <Icons />
            <Girl />
            <Boy />
            <Uncle />
            <Book />
            <Aside />
            <Get />
            <Footer />
            <Fackbook />
           
        </>
    )
}

export default Home;