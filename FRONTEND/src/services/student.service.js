import axios from "axios";
import authHeader from "./auth-header";
import { STUDENT_API_BASE, COURSES_API_BASE } from "../config/api";

const getAllStudents = () => {
  return axios.get(STUDENT_API_BASE + "all", { headers: authHeader() });
};

const getAllCourses = () => {
  return axios.get(COURSES_API_BASE, { headers: authHeader() });
};

// 🔹 Get the logged-in student's profile (with enrolledCourses)
const getMyProfile = () => {
  return axios.get(STUDENT_API_BASE + "me", { headers: authHeader() });
};

const StudentService = {
  getAllStudents,
  getAllCourses,
  getMyProfile, // ✅ added
};

export default StudentService;
