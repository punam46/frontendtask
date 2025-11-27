export default function Dashboard() {
  return (
    <div style={styles.container}>
      <h1>Dashboard</h1>
      <a style={styles.link} href="/tasks">Go to Tasks </a>
    </div>
  );
}

const styles = {
  container: { width: "400px", margin: "40px auto", textAlign: "center" },
  link: { color: "blue", textDecoration: "underline", display: "block", marginTop: "20px" }
};
