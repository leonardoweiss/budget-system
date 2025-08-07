import { useState } from "react";

export default function Services() {

    const [services, setServices] = useState([
        {desc: "", price: "", mechanic1: "", mechanic2: ""},
        {desc: "Troca lâmpada farol LE", price: "10", mechanic1: "Claudio", mechanic2: ""},
        {desc: "Troca Lona Dianteira completa", price: "160", mechanic1: "Vinicius", mechanic2: "Loro"},
        {desc: "Alinhamento 03 eixos", price: "120", mechanic1: "Ninja", mechanic2: ""},
    ]);

  return (
    <>
      <fieldset>
        <legend>Serviços</legend>
        {services.map((el, i) => (
            <div key={1 + i} className="input-service">
                <input type="text" className="description" placeholder="Descrição" defaultValue={el.desc} />
                <input type="text" className="price-service" placeholder="00" defaultValue={el.price}/><span>,00</span>
                <select id="mechanic1" defaultValue={el.mechanic1}>
                    <option value="">Mecânico 1</option>
                    <option value="Loro">Loro</option>
                    <option value="Ninja">Ninja</option>
                    <option value="Nobinho">Nobinho</option>
                    <option value="Kleiton">Kleiton</option>
                    <option value="Vinicius">Vinicius</option>
                    <option value="Maylon">Maylon</option>
                    <option value="Gabriel">Gabriel</option>
                    <option value="Roni">Roni</option>
                    <option value="Caic">Caic</option>
                    <option value="Alex">Alex</option>
                    <option value="Higor">Higor</option>
                    <option value="Eric">Eric</option>
                    <option value="Thor">Thor</option>
                    <option value="Felipe">Felipe</option>
                    <option value="Ivam">Ivam</option>
                    <option value="Adrian">Adrian</option>
                    <option value="Abel">Abel</option>
                    <option value="Perceu">Perceu</option>
                    <option value="Carioca">Carioca</option>
                    <option value="Claudio">Claudio</option>
                    <option value="Gilberto">Gilberto</option>
                    <option value="Chico">Chico</option>
                    <option value="Sandoval">Sandoval</option>
                </select>
                <select id="mechanic2" defaultValue={el.mechanic2}>
                    <option value="">Mecânico 2</option>
                    <option value="Loro">Loro</option>
                    <option value="Ninja">Ninja</option>
                    <option value="Nobinho">Nobinho</option>
                    <option value="Kleiton">Kleiton</option>
                    <option value="Vinicius">Vinicius</option>
                    <option value="Maylon">Maylon</option>
                    <option value="Gabriel">Gabriel</option>
                    <option value="Roni">Roni</option>
                    <option value="Caic">Caic</option>
                    <option value="Alex">Alex</option>
                    <option value="Higor">Higor</option>
                    <option value="Eric">Eric</option>
                    <option value="Thor">Thor</option>
                    <option value="Felipe">Felipe</option>
                    <option value="Ivam">Ivam</option>
                    <option value="Adrian">Adrian</option>
                    <option value="Abel">Abel</option>
                    <option value="Perceu">Perceu</option>
                    <option value="Carioca">Carioca</option>
                    <option value="Claudio">Claudio</option>
                    <option value="Gilberto">Gilberto</option>
                    <option value="Chico">Chico</option>
                    <option value="Sandoval">Sandoval</option>
                </select>
            </div>
        ))}
        <div className="button-service">
            <button type="button" className="add">Adicionar</button>
        </div>
    </fieldset>
    </>
  );
}