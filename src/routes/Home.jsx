import Cart from "../components/Cart";
import Header from "../components/Header";
import Products from "../components/Products";
import Provider from "../context/Provider";

function Home() {
  return (
    <>
      <Provider>
        <Header />
        <Products />
        <Cart />
      </Provider>
    </>
  );
}

export default Home;
