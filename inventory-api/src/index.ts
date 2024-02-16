import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import productRoute from "./modules/products/products.routes";

// routes
// import productRoutes from "./routes/users";

const app = express();

app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001"],
  })
);

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

app.use('/api/products', productRoute);

app.listen(PORT, () => {
  console.log(`App running on PORT ${PORT}`);
});