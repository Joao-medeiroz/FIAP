// import Image from "next/image";
import Contador from "./components/Contador.js"
import CriarNome from "./components/criarNome.js"
import Relogio from "./components/relogio.js"
import Teclado from "./components/teclado.js"
import Usuarios from "./components/usuarios.js"

import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Contador />
      <br />
      <CriarNome />
      <br />
      <Relogio />
      <br />
      <Teclado />
      <br />
      <Usuarios />
    </>
  );
}