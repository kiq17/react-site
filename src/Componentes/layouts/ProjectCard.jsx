import React from "react";
import {Link} from "react-router-dom"
 

const ProjectCard =({id, name,orcamento, category, handleRemove})=>{
    return(
        <div>
        <p>{name}</p>
        <p>{orcamento}</p>
        <p>{category}</p>
        <div>
            <Link to={`/project/${id}`}>
                Editar
            </Link>
            <Link to={"/"}>
                Voltar
            </Link>
            <button onClick={()=> handleRemove(id)}>
                Deletar
            </button>
        </div>
        </div>
    )
}


export default ProjectCard;