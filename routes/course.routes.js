import express from "express";
import { createCourse, getAllCourses } from "../controllers/course.controller.js";
import { verifyToken, authorizeRoles } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post(
    "/",
    verifyToken,
    authorizeRoles("admin"),
    createCourse
);

router.get("/", getAllCourses);

export default router;
