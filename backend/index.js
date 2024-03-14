import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
// import authRoute from "./routes/auth-route.js";
import mentorRoute from "./routes/mentor-route.js";
import organisationRoute from "./routes/organisation-route.js";
import investsRoute from "./routes/invests-route.js";
import entrepreneurRoute from "./routes/entrepreneur-route.js";

const app = express();
const PORT = 5000;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({ origin: "*" }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello World");
});

// app.use("/auth", authRoute);
app.use("/entrepreneur", entrepreneurRoute);
app.use("/mentor", mentorRoute);
app.use("/organisation", organisationRoute);
app.use("/invests", investsRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
