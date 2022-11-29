import React, { useState } from "react";
import Input from "./Input";

const ServiceForm = ({ submitService, projectData }) => {

    const [service, setService] = useState({})

    const handleSubmit = (e) => {
        e.preventDefault();
        projectData.services.push(service);
        submitService(projectData);
    }

    const handleOnChange = (e) => {
        setService({...service, [e.target.name]: e.target.value});
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <Input
                    text={"Nome do serviço"}
                    type={"text"}
                    name={"nome"}
                    handleOnChange={handleOnChange}
                />
                <Input
                    text={"Custo do serviço"}
                    type={"number"}
                    name={"custo"}
                    handleOnChange={handleOnChange}
                />
                <Input
                    text={"Descrição do serviço"}
                    type={"text"}
                    name={"descricao"}
                    handleOnChange={handleOnChange}
                />
                <button type="submit">Criar</button>
            </form>
        </>
    )
}

export default ServiceForm;