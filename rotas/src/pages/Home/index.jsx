import { useState } from "react";
import { CookieBanner } from "../../components/CookieBanner";
import { Header } from "../../components/NavBar";

export function Home() {
  const [close, setClose] = useState(true);

  return (
    <>
      <Header />
      <h1>HOME SWEET HOME</h1>
      <CookieBanner/>
    </>
  );
}
