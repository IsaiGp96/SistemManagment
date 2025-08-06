import { useEffect, useState } from "react"
import axios from "axios"

function Home() {
    const [message, setMessage] = useState("");

    useEffect(() => {
        axios.get("http://localhost:8080/api/hello")
            .then((res) => setMessage(res.data))
            .catch((err) => console.error("Error al conectar con el backend", err))
    }, []);
    return (
        <>
            <div>
                <h1>Frontend React + Vite</h1>
                <p>Respuesta del backend: {message}</p>
            </div>
        </>
    );
}

export default Home