import React, { useEffect, useState } from "react";
import Message from "../layouts/Message";
import { useLocation } from "react-router-dom"
import LinkButton from "../layouts/LinkButton"
import ProjectCard from "../layouts/ProjectCard";
import Loading from "../layouts/Loading";

const Project = () => {

    const [projects, setProjects] = useState([])
    const [loading, setLoading] = useState(true)


    const location = useLocation()
    let message = '';

    if (location.state) {
        message = location.state.message;
    }


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5000/projects')
                const data = await response.json()
                setProjects(data)
                setLoading(false)
            } catch (error) {
                console.log(error)
            }
        }

        fetchData();
    }, [])

    const removerProject = async (id) => {
        try {
            await fetch(`http://localhost:5000/projects/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json'
                }
            })
            setProjects(projects.filter(project=> project.id !== id))
        } catch (error) {
            console.log(error)
        }
    }

    /* parou no video 31 */

    return (
        <section className="conteiner">
            <div>
                <h1>My Projects</h1>
                <LinkButton path={"/newproject"} text={"Criar projeto"} />
            </div>
            <div>
                {message && <Message msg={message} type="sucess" />}
            </div>
            <br />
            <div>
                {
                    projects.map(project => (
                        <ProjectCard
                            name={project.nome}
                            orcamento={project.orcamento}
                            category={project?.category?.name}
                            id={project.id}
                            key={project.id}
                            handleRemove={removerProject} />
                    ))
                }
                {loading && <Loading />}
            </div>
        </section>
    )
};

export default Project;