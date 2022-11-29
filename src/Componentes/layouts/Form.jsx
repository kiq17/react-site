import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Input from "./Input";
import Select from "./Select";

const Form = ({ handleSubmit, projectData, btnText }) => {

    const [categories, setCategories] = useState([]);
    const [project, setProjects] = useState(projectData || {})

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('http://localhost:5000/categories');
                const data = await res.json()
                setCategories(data)
            } catch (error) {
                console.log("Error fetch")
            }
        }
        fetchData();
    }, [])

    const submit = (e) => {
        e.preventDefault();
        handleSubmit(project)
    }

    const handleOnChange = (e) => {
        setProjects({ ...project, [e.target.name]: e.target.value })
    }

    const handleCategory = (e) => {
        setProjects({ ...project, category: {
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text
        }})
    }


    return (
        <form onSubmit={submit}>
            <Input name={"nome"}
                type={"text"}
                text={"Nome do projeto"}
                handleOnChange={handleOnChange}
                content={project.nome} />
            <Input name={"orcamento"}
                type={"number"}
                text={"Orçamento do projeto"}
                handleOnChange={handleOnChange}
                 />
            <Select name={"category_id"}
                text={"Selecione uma opção"}
                options={categories}
                handleCategory={handleCategory}
                value={project.category ? project.category.id : ''} />
            <div>
                <button type="submit">{btnText}</button>
            </div>
        </form>
    )
}

export default Form;