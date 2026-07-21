
export default function AdminPedidos() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0f0f0f",
        color: "white",
        padding: "40px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1
        style={{
          fontSize: "32px",
          marginBottom: "10px",
        }}
      >
        Panel de Pedidos
      </h1>

      <p
        style={{
          color: "#b3b3b3",
          marginBottom: "30px",
        }}
      >
        Aquí aparecerán todos los pedidos realizados en la tienda.
      </p>

      <div
        style={{
          background: "#1a1a1a",
          borderRadius: "12px",
          padding: "25px",
          border: "1px solid #2f2f2f",
        }}
      >
        Próximamente mostraremos los pedidos desde Supabase.
      </div>
    </main>
  );
}
