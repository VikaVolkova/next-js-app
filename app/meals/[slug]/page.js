export default function Meal({ params }) {
  return (
    <main>
      <h1 style={{ color: 'white', textAlign: 'center' }}>{params.slug}</h1>
    </main>
  );
}
