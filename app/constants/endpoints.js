import globalConfig from '../config';
export const API = globalConfig.API_BASE();

// NOTE: Sign In API
export const SEND_OTP = () => `${API}/user/sendOtp`;
export const VERIFY_OTP = () => `${API}/user/verifyOtp`;
export const RETRY_OTP = () => `${API}/user/retryOtp`;

export const SIGN_IN = () => `${API}/user/login`;
export const REGISTER = () => `${API}/user/register`;
export const UPDATE = () => `${API}/user`;

// NOTE: Home API
export const HOME = () => `${API}/main/home`;

// NOTE: Course API
export const ALL_COURSE = () => `${API}/course/all`;
export const COURSE_DETAILS = () => `${API}/course/details`;

// NOTE: Articles API
export const ALL_ARTICLES = () => `${API}/document/all`;

// NOTE: Videos API
export const ALL_VIDEOS = () => `${API}/video/all`;
