import { useState } from "react";

export default function Products( products ) {

  const [product, setProduct] = useState(products.products || []);
  const [list, setList] = useState([]);

  return (
    <>
      <form id="form-product" onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            const newProduct = {
                code: formData.get("code-product"),
                desc: formData.get("description"),
                price: formData.get("price-product"),
                quantity: parseInt(formData.get("quantity-product"), 10) || 1
            };
            setList([newProduct, ...list]);
            e.target.reset();
      }}>
        <fieldset>
          <legend>Produtos</legend>
          <div className="input-product">
            <input type="text" className="code" autoComplete="off" name="code-product" placeholder="Código" />
            <button type="button" onClick={() => {
              const code = prompt("Digite o código do produto:");
              if (code) {
                const foundProduct = products.products.find(p => p.code === code);
                if (foundProduct) {
                  setList([foundProduct, ...list]);
                } else {
                  alert("Produto não encontrado.");
                }
              }
            }}>
              Buscar
            </button>
            <input type="text" className="description" autoComplete="off" name="description" placeholder="Descrição" />
            <input type="text" className="price" autoComplete="off" name="price-product" placeholder="00" /><span>,00</span>
            <input type="number" className="quantity" autoComplete="off" name="quantity-product" placeholder="Quantidade" />
            <button type="submit" className="add-product">
              Adicionar
            </button>
          </div>
          <div className="total">
            <span className="">Total De Produtos: R$ {
              list.reduce((acc, el) => acc + parseFloat(el.price) * el.quantity, 0)
            },00</span>
          </div>
          {list.map((el, i) => (
            <div key={i} className="product-ready">
              <div>{el.code}</div>
              <div>{el.desc}</div>
              <div> R$ {el.price},00 </div>
              <div>Qtd: {el.quantity}</div>
              <div>
                <button type="button" className="edit" onClick={() => {
                  const updatedProduct = [...list];
                  updatedProduct[i] = {
                    desc: prompt("Editar descrição:", el.desc) || el.desc,
                    price: prompt("Editar preço:", el.price) || el.price,
                    quantity: parseInt(prompt("Editar quantidade:", el.quantity), 10) || el.quantity
                  };
                  setProduct(updatedProduct);
                }}>Editar</button>
                <button type="button" className="delete" onClick={() => {
                  const updatedProduct = list.filter((_, index) => index !== i);
                  setProduct(updatedProduct);
                }}>Excluir</button>
              </div>
            </div>
          ))}
        </fieldset>
      </form>
    </>
  );
}