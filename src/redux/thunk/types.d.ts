export type SignInThunkData = {
  email: string;
  password: string;
  fcm_token?: string;
};
export type SignInThunkResponse = ApiResponse<{
  isProfileSetupComplete?: boolean;
  email?: string;
  _id?: string;
  token?: string;
  isEmailVerified?: boolean;
}>;

export type SignUpThunkData = {
  email: string;
  password: string;
};
export type SignUpThunkResponse = ApiResponse<{
  message?: string;
}>;

export type VerifyOtpThunkData = {
  email?: string;
  OTP?: string;
  type?: 'forgotPassword' | 'signup';
};
export type VerifyOtpThunkResponse = ApiResponse<{}>;

export type ResendOtpThunkData = {
  email?: string;
  type?: 'forgotPassword' | 'signup';
};
export type ResendOtpThunkResponse = ApiResponse<{}>;

export type ForgotPasswordThunkData = {
  email: string;
};
export type ForgotPasswordThunkResponse = ApiResponse<{}>;

export type ResetPasswordThunkData = {
  password: string;
  email: string;
};
export type ResetPasswordThunkResponse = ApiResponse<{}>;


export type validUserNameThunkData = {
  username: string;
};
export type validUserNameThunkResponse = ApiResponse<{}>;

export type CompleteProfileThunkData = {
  profilePhoto: File | null;
  coverPhoto: File | null;
  userName: string;
  bio: string;
  gender: string;
  education: string;
  location: string;
  fcmToken?: string;
};
