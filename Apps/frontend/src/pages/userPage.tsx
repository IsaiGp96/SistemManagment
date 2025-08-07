import { useEffect, useState } from "react";
import { getAllUsuarios } from "../services/userService";
import type { Usuario } from "../types/user";

function UsersPage() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);

  useEffect(() => {
    getAllUsuarios().then(setUsuarios).catch(console.error);
  }, []);

  return (
    <div>
      <h2>Usuarios</h2>
      <ul>
        {usuarios.map((u) => (
          <li key={u.id}>{u.nombres} {u.apellidos} ({u.correo})</li>
        ))}
      </ul>
    </div>
  );
}

export default UsersPage;
