import { useEffect, useState } from "react";
import api from "../api";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [msg, setMsg] = useState("");

  const load = async () => {
    const res = await api.get("/tasks");
    setTasks(res.data);
  };

  const add = async () => {  
    try {
      await api.post("/tasks", { title });
      setTitle("");
      load();
    } catch (err) {
      setMsg("Failed to add task");
    }
  };

  const remove = async (id) => {
    await api.delete(`/tasks/${id}`);
    load();
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <div style={styles.container}>
      <h1>Tasks</h1>

      <div style={styles.row}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="New Task"
          style={styles.input}
        />
        <button onClick={add} style={styles.button}>Add</button>
      </div>

      {msg && <p style={{ color: "red" }}>{msg}</p>}

      <ul style={styles.list}>
        {tasks.map((t) => (
          <li key={t._id} style={styles.item}>
            {t.title}
            <button onClick={() => remove(t._id)} style={styles.deleteBtn}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: { width: "500px", margin: "40px auto" },
  row: { display: "flex", gap: "10px" },
  input: { flex: 1, padding: "10px", border: "1px solid gray" },
  button: { padding: "10px", background: "#000", color: "white" },
  list: { marginTop: "20px", padding: 0, listStyle: "none" },
  item: { padding: "10px", borderBottom: "1px solid #ddd", display: "flex", justifyContent: "space-between" },
  deleteBtn: { background: "red", color: "white", border: "none", padding: "5px 10px" }
};
