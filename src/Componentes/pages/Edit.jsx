import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../layouts/Loading";
import Form from "../layouts/Form";
import Message from "../layouts/Message"
import ServiceForm from "../layouts/ServiceForm";


const Edit = () => {
    const { id } = useParams()

    const [projects, setProjects] = useState([])
    const [showContent, setShowContent] = useState(false)
    const [showService, setShowService] = useState(false)
    const [message, setMessage] = useState('')
    const [services, setServices] = useState([])


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:5000/projects/${id}`)
                const data = await response.json()
                setProjects(data);
                setServices(data.services);
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [id])

    const changeText = () => {
        setShowContent(!showContent)
    }

    const changeTextService = () => {
        setShowService(!showService)
    }

    const submitService = async (projectData) => {
        setMessage('');

        const lastService = projectData.services[projectData.services.length - 1];

        lastService.id = Math.random().toString(36).substring(2, 18);

        const newCost = parseFloat(projectData.cost) + parseFloat(lastService.custo)

        if (newCost > parseFloat(projectData.orcamento)) {
            projectData.services.pop();
            return setMessage('Custo do serviço excedeu o orçamento do projeto');
        }

        projectData.cost = newCost;

        try {
            const response = await fetch(`http://localhost:5000/projects/${projectData.id}`, {
                body: JSON.stringify(projectData),
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            const data = await response.json()
            console.log(data);
            setMessage('Serviço criado');
        } catch (error) {
            console.log(error)
        }

    }

    /* parou no vídeo 36 */

    const editPost = async (project) => {
        setMessage('')

        if (project.orcamento < 0) {
            setMessage('Valor do do orçamento inválido!')
            return
        }

        try {
            const response = await fetch(`http://localhost:5000/projects/${id}`, {
                body: JSON.stringify(project),
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            const data = await response.json()
            setProjects(data)
            setShowContent(!showContent)
            setMessage('Projeto editado com sucesso')
        } catch (error) {
            console.log(error)
        }
    }

    return (

        <section className="conteiner">
            {projects.nome ? (
                <>
                    {message && <Message msg={message} />}
                    <div>
                        <h1>{projects.nome}</h1>
                        <button onClick={changeText}>{showContent ? 'Editar Conteudo' : 'Fechar'}</button>
                    </div>
                    {showContent ? (
                        <div style={{ margin: "10px 0" }}>
                            <div className="flex">
                                <span>Categoria:</span><p>{projects.category.name}</p>
                            </div>
                            <div className="flex">
                                <span>Total orçamento:</span>
                                <p>{parseInt(projects.orcamento).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</p>
                            </div>
                            <div className="flex">
                                <span>Total utiizado:</span>
                                <p>{projects.cost.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</p>
                            </div>
                        </div>
                    ) : (
                        <Form
                            btnText={"Editar"}
                            handleSubmit={editPost} />
                    )}
                </>
            ) : (
                <Loading />
            )}
            <div style={{ margin: "10px 0" }}>
                <h2>Adicione um serviço:</h2>
                <button onClick={changeTextService}>{showService ? 'Fechar' : 'Adicionar Serviço'}</button>
            </div>
            <div>
                {showService ? (
                    <ServiceForm
                        submitService={submitService}
                        projectData={projects} />
                ) : (
                    <p>Sem serviços</p>
                )}
            </div>
            <div style={{ margin: "10px 0" }}>
                <h3>Serviços</h3>
                <div className="flex">
                    {services.length ? (services.map(service => (
                        <p>Nome: {service.nome}</p>

                    ))) : <p>Sem projetos</p>}
                </div>
            </div>
        </section>
    )
}

export default Edit;