'use client'

import { useState } from "react";
import Services from "./Services";
import Products from "./Products";

export default function Form({ data }) {

  const [client, setClient] = useState([])
  const [test, setTest] = useState(data.clients)

  return (
    <>
      <fieldset>
        <legend>Dados do cliente</legend>
        <label>
          Empresa:
          <input type="text" autoComplete="off" onChange={(e) => setClient(() => test.findIndex(el => el.name.toLowerCase().includes(e.target.value.toLowerCase())))} />
        </label>
        <span>{client >= 0 ? (test[client].name) : 'não encontrado'}</span> <hr />
        <label>
          Motorista:
          <input type="text" />
        </label>

        <legend>Veículo</legend>

          <label>
            Placa:
            <input type="text" />
          </label>
          <label>
            1ª Carreta:
            <input type="text" />
          </label>
          <label>
            2ª Carreta:
            <input type="text" />
          </label>
          <label>
            Dole:
            <input type="text" />
          </label>
          <label>
            KM:
            <input type="text" />
          </label>

        <legend>Data/Hora</legend>

          <label>
            Data de Entrada:
            <input type="date" /> 
          </label>
          <label>
            Hora de Entrada:
            <input type="time" />
          </label>
          <label>
            Data de Saída:
            <input type="date" /> 
          </label>
          <label>
            Hora de Saída:
            <input type="time" />
          </label>
      </fieldset>
      <section id="services">
        <Services />
        <Products />
      </section>
    </>
  )
}