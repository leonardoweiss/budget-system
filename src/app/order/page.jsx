import Form from "@/components/Form";

export default async function Home() {

  const clients = await fetch(`http://localhost:3000/db/clients`).then(res => res.json())
  const employees = await fetch(`http://localhost:3000/db/employees`).then(res => res.json())

  return (
    <>
      <Form clients={clients} employees={employees} />
    </>
  );
}