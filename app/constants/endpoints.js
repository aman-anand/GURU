import globalConfig from 'Config';
export const API = globalConfig.API_BASE();

// Sign In API
export const SIGN_IN = () => `${API}/user/login`;
export const REGISTER = () => `${API}/user/register`;
export const SEND_OTP = () => `${API}/user/sendOtp`;
export const VERIFY_OTP = () => `${API}/user/verifyOtp`;
export const RETRY_OTP = () => `${API}/user/retryOtp`;
