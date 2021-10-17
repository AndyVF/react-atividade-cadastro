import { render } from "@testing-library/react"
import React from "react"

export default function Cadastro() {
    render()
        return(
            <div className="cadastrar">
                
                <form>
                <h2>Cadastro</h2>
                <p>Preencha os dados abaixo para começar.</p>
                <input id="Nome" class="form_field" type="Name" placeholder="Nome" required />
                <input id="Usuario" class="form_field" type="name" placeholder="Sobrenome" required />
                <input id="Email" class="form_field" type="email" placeholder="E-mail" required />
                <input id="Senha" class="form_field" type="password" placeholder="Senha" required /><br/> 
                <button><b>REGISTRA-SE</b></button>
                </form>
                
            </div>
        )
    }
