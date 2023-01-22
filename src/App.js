import Heading from "./Heading";
import Navbar from "./Navbar";
import Product from "./Product";

export default function App() {
  return (
    <>
      <Navbar />
      <br />
      <Heading name={"OUR PRODUCTS"} />
      <Product />
    </>
  );
}
