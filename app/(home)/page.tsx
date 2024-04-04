import Hero from "app/components/home/hero/Hero";
import Container from "app/components/shared/container/Container";
import ListProducts from "app/components/home/listProducts/ListProducts";

export default function Home() {
  return (
    <main className="h-[100vh] w-full">
      <Hero />
      <Container>
        <ListProducts />
      </Container>
    </main>
  );
}
