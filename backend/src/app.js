import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import helmet from 'helmet'

import pkg from '../package.json'

import usersRoutes from './routes/user.routes.js'
import authRoutes from './routes/auth.routes'

const app = express();


//Settings
app.set("pkg", pkg);
app.set("port", process.env.port || 4000);
app.set("json spaces", 4)

//Middlewares
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

//Welcome Route
app.get("/api", (req, res) => {
    res.json({
        message: 'Welcome to the API'
    });
});


//Routes
app.use("/api/users", usersRoutes);
app.use("/api/auth", authRoutes);

export default app;