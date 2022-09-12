import products from './data/products';


function App() {

  return (
    <>
      <ul>
        {products.map((product) =>
          <li  style={{color: product.unitPrice > 30 ? 'red' : 'black'}}> {product.name} / {product.unitPrice} </li>
        )}
      </ul>
    </>
  );
}

export default App;
