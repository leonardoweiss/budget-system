import Link from "next/link";

export default function Home() {

  return (
    <>
      <h1>corpo</h1>
      <Link href="/order">
        <button>Ordem de Serviços</button>
      </Link>
    </>
  );
}