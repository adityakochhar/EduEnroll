/** API origins (no trailing slash). Override in production with CRA env vars (build time). */
function base(url, fallback) {
  const u = (url || fallback || "").trim();
  return u.replace(/\/$/, "");
}

export const STUDENT_API_ORIGIN = base(
  process.env.REACT_APP_STUDENT_API_URL,
  "http://localhost:8080"
);
export const COURSE_API_ORIGIN = base(
  process.env.REACT_APP_COURSE_API_URL,
  "http://localhost:8081"
);

export const AUTH_API_BASE = `${STUDENT_API_ORIGIN}/api/auth/`;
export const STUDENT_API_BASE = `${STUDENT_API_ORIGIN}/api/student/`;
export const COURSES_API_BASE = `${COURSE_API_ORIGIN}/api/courses`;
