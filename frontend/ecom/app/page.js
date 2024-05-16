import Card from "./components/card";
import SignUpForm from "./components/SignUpForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SignUpForm />
      <Card
        productName="Product 1"
        imageSrc="https://via.placeholder.com/150"
        description="Product 1 description"
        price="$10"
      />
    </main>
  );
}
