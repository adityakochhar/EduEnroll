import axios from 'axios';
import authHeader from './auth-header';
import { STUDENT_API_BASE } from '../config/api';

const API_URL = STUDENT_API_BASE;

const enrollInCourse = (courseId) => {
  return axios.post(API_URL + `enroll/${courseId}`, {}, { headers: authHeader() });
};

const UserService = {
  enrollInCourse,
};

export default UserService;