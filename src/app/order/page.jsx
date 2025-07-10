import Form from "@/components/Form";

export default async function Home() {

  const clients = await fetch(`http://localhost:3000/clients`).then(res => res.json())

  return (
    <>
      <Form data={clients} />
    </>
  );
}