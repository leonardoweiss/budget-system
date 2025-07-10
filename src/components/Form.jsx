'use client'

export default function Form({ data }) {

  return (
    <>
      <fieldset>
        <legend>Dados do cliente</legend>
        <label>
          Nome:
          <input type="text" autoComplete="off" value={data.clients[0].name} />
          <button onClick={() => {
            console.log("Buscar cliente");
          }}>Buscar</button>
        </label>
      </fieldset>
    </>
  );
}