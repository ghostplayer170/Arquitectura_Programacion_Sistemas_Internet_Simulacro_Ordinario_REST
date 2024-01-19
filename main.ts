// deno-lint-ignore-file
import mongoose from "npm:mongoose@8.0.1";
import express, { Request, Response } from "npm:express@4.18.2";

// Importación de función 'load' de Deno para cargar variables de entorno.
import { load } from "https://deno.land/std@0.204.0/dotenv/mod.ts"; // Leer variables de entorno
const env = await load(); // Carga Variables de entorno

// Variables de entorno.
const MONGO_URL = env.MONGO_URL || Deno.env.get("MONGO_URL") || "";
const PORT = env.PORT || Deno.env.get("PORT") || 3060;

if (!MONGO_URL) {
  console.log("No mongo URL");
  Deno.exit(1);
}

if (!PORT) {
  console.log("Port found");
  Deno.exit(1);
}

// Conexión a la base de datos MongoDB.
try {
  await mongoose.connect(MONGO_URL);
  console.info("Mongo Connected");
} catch (e) {
  console.error(e);
}

// Creación de una instancia de Express.
const app = express();
app.use(express.json());

// Rutas y controladores.
app
  .get("/", (req: Request, res: Response) => {
    res.send("Hello World");
  })

// Iniciar el servidor.
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
