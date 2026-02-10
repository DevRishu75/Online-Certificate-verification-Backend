import Certificate from "../models/certificate.js";
import crypto from "crypto";

export const issueCertificate = async (req, res) => {
    try {
        const certificate = await Certificate.create({
            user: req.user.id,
            course: req.params.courseId,
            certificateId: crypto.randomBytes(8).toString("hex")
        });

        res.status(201).json({
            message: "Certificate issued successfully",
            certificate
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const verifyCertificate = async (req, res) => {
    try {
        const { certificateId } = req.params;

        const certificate = await Certificate.findOne({ certificateId })
            .populate("user", "name email")
            .populate("course", "title");

        if (!certificate) {
            return res.status(404).json({
                valid: false,
                message: "Certificate not found"
            });
        }

        res.json({
            valid: true,
            certificate
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
