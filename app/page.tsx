
import Greeting from "./components/Greeting";
import ProductCard from "./components/ProductCard";

export default function Page() {
  return (
    <main className="store">
      <h1>My Product Store</h1>

      <Greeting name="Lokesh" />

      <div className="cards">
        <ProductCard
          title="Mechanical Keyboard"
          price={49.99}
          inStock={true}
        />

        <ProductCard
          title="Gaming Mouse"
          price={25.50}
          inStock={false}
        />
      </div>
    </main>
  );
}
