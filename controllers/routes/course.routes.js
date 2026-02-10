import express from "express";
import { createCourse, getAllCourses } from "../backend/controllers/course.controller.js";
import { verifyToken, authorizeRoles } from "../backend/controllers/middlewares/auth.middleware.js";

const router = express.Router();

router.post(
    "/",
    verifyToken,
    authorizeRoles("admin"),
    createCourse
);

router.get("/", getAllCourses);

export default router;
