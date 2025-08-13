import { useState } from "react";

export default function Services({ employees }) {

    const [services, setServices] = useState([
        {desc: "Troca lâmpada farol LE", price: "10", mechanic1: "Claudio", mechanic2: ""},
        {desc: "Troca Lona Dianteira completa", price: "160", mechanic1: "Vinicius", mechanic2: "Loro"},
        {desc: "Alinhamento 03 eixos", price: "120", mechanic1: "Ninja", mechanic2: ""},
    ]);
    const [employee, setEmployee] = useState(employees.employees || []);

  return (
    <>
      <form id="form-service" onSubmit={(e) => {
            e.preventDefault()
            const formData = new FormData(e.target);
            const newService = {
                desc: formData.get("description"),
                price: formData.get("price-service"),
                mechanic1: formData.get("mechanic1"),
                mechanic2: formData.get("mechanic2")
            };
            setServices([newService, ...services]);
            e.target.reset();
        }}>
            <fieldset>
                <legend>Serviços</legend>
                {/* Campos para adicionar novo serviço */}
                <div className="input-service">
                    <input type="text" className="description" autoComplete="off" name="description" placeholder="Descrição" />
                    <input type="text" className="price-service" autoComplete="off" name="price-service" placeholder="00" /><span>,00</span>
                    <select name="mechanic1">
                        <option value="">Mec 1</option>
                        {employee.map((employee, index) => (
                            <option key={index} value={employee}>{employee}</option>
                        ))}
                    </select>
                    <select name="mechanic2">
                        <option value="">Mec 2</option>
                        {employee.map((employee, index) => (
                            <option key={index} value={employee}>{employee}</option>
                        ))}
                    </select>
                    <div className="button-service">
                        <button type="submit">Adicionar</button>
                    </div>
                </div>
                {/* Lista dos serviços já adicionados */}
                {services.map((el, i) => (
                    <div key={1 + i} className="services-ready">
                        <div>{el.desc}</div>
                        <div> R$ {el.price},00 </div>
                        <div>{el.mechanic1} {el.mechanic2 && `& ${el.mechanic2}`}</div>
                        <button type="button" className="edit">Editar</button>
                        <button type="button" className="delete">Excluir</button>
                    </div>
                ))}
            </fieldset>
        </form>
    </>
  );
}