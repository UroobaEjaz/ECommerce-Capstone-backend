import Image from "next/image";
import shoppingCart from "../components/shoppingCart.jsx";
import logIn from "../components/SignUpForm.jsx";
import SignUpForm from "../components/SignUpForm.jsx";
 
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SignUpForm />
    </main>
  );
}