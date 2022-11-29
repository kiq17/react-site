import React from "react";
import LinkButton from "../layouts/LinkButton";
import styles from "../../Styles/pages/home.module.css";

const Home = ()=>{
    return(
       <section className={styles.home}>
        <h1>Bem-vindo</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, odio?</p>
        <LinkButton path={"/newproject"} text={"Criar novo projeto"}/>
       </section>
    )
}

export default Home;