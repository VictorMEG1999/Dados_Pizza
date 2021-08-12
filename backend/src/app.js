import express from "express";
import dadosPizzaRouts from "./routes/tasks";

// conecion de servidores externos
import corts from "cors";
//visualisacion de peticones por cnsola
import morgan from "morgan";

const app = express();
app.use(corts());
app.use(morgan("dev"));
app.use(express.json());
app.use(dadosPizzaRouts);

export default app;
