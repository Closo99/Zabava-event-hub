import Image from "next/image";
import styles from "./page.module.css";
import PrimaryAppBar from "./components/AppBar";

export default function Home() {
  return (
    <main className='home-main'>
      <div><PrimaryAppBar></PrimaryAppBar></div>
    </main>
  );
}
