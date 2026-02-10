import Course from "../models/course.js";

export const createCourse = async (req, res) => {
    try {
        const course = await Course.create({
            title: req.body.title,
            description: req.body.description,
            instructor: req.user.id
        });

        res.status(201).json(course);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getAllCourses = async (req, res) => {
    const courses = await Course.find().populate("admin", "name email");
    res.json(courses);
};
