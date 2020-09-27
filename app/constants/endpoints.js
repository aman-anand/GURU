import globalConfig from '../config';
// export const API = globalConfig.API_BASE();
let API;
if (window.location.origin === 'https://uat.bimapaathshala.org') {
  API = globalConfig.UAT_BASE();
} else if (window.location.origin === 'https://staging.bimapaathshala.org') {
  API = globalConfig.STAGE_BASE();
} else {
  API = globalConfig.API_BASE();
}

window.console.log('BASE API', API);

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
export const ARTICLE_DETAILS = () => `${API}/document`;

// NOTE: Videos API
export const ALL_VIDEOS = () => `${API}/video/all`;
export const VIDEO_DETAILS = () => `${API}/video/detail`;

// NOTE: Session
export const UPC_SESSION = () => `${API}/sessions/upcoming`;
export const ATT_SESSION = () => `${API}/sessions/completed`;
export const SESSION_DETAILS = () => `${API}/sessions/details`;

// NOTE: Certification
export const CERTIFICATE = () => `${API}/certificate/user`;
