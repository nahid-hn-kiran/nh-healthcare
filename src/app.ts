import express, { Application, Request, Response } from "express";
import { specialtyRoutes } from "./app/module/specialty/specialty.route";
import { indexRoutes } from "./app/routes";

const app: Application = express();

// Enable URL-encoded form data parsing
app.use(express.urlencoded({ extended: true }));

// Middleware to parse JSON bodies
app.use(express.json());

// Routes
app.use("/api/v1", indexRoutes);

export default app;
