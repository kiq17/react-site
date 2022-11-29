import React from "react";
import Form from "../layouts/Form";
import { useNavigate } from "react-router-dom"

const NewProject = () => {

    const navigate = useNavigate();

    async function createPost(project) {

        /* parou na aula 26 */
        project.cost= 0;
        project.services = []
        try {
            const response = await fetch('http://localhost:5000/projects', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(project),
            })
            const data = await response.json()
            navigate('/projects', { state: {message: 'Projeto criado com sucesso!'} })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="conteiner">
            <h1>Criar Projeto</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, quibusdam?</p>
            <Form
            handleSubmit={createPost}
            btnText={"Criar"}
             />
        </div>
    )
}

export default NewProject;