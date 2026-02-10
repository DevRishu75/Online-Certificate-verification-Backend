import express from "express";
import { issueCertificate, verifyCertificate } from "..controllers/certificate.controller.js";
import { verifyToken, authorizeRoles } from "../controllers/middlewares/auth.middleware.js";

const router = express.Router();

router.post(
    "/issue/:courseId",
    verifyToken,
    authorizeRoles("admin", "instructor"),
    issueCertificate
);

router.get("/verify/:certificateId", verifyCertificate);

export default router;
