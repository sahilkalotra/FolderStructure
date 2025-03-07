import { Dimensions, Platform } from "react-native";

export const deviceHeight = Dimensions.get("window").height;
export const deviceWidth = Dimensions.get("window").width;

export const isIos = Platform.OS === "ios";
export const isAndroid = Platform.OS === "android";

export const validationRules = {
  email: {
    required: true,
    regex: /\S+@\S+\.\S+/,
    message: 'Please enter a valid email address.', 
  },
  password: {
    required: true,
    regex: /^(?=.*[A-Z])(?=.*[\W_]).+$/,
    message: 'Password must be at least 6 characters, with an uppercase letter and a special character.',
  },
  confirmPassword: {
    required: true,
    match: 'password',
    message: 'Passwords do not match.',
  },
  name: {
    required: true,
    minLength: 3,
    message: 'Name must be at least 3 characters long.',
  },
  otp: {
    required: true,
    minLength: 4,
    message: 'Please enter a valid Otp.',
    emptyMessage: 'Please enter a valid Otp.',
  },
  userName: {
    required: true, 
    minLength: 3,  
    message: 'Username must be at least 3 characters long.',
  },
  bio: {
    required: true,  
    minLength: 5,  
    message: 'Bio must be at least 5 characters long.',
  },
  gender:{
    required: true,  
    message: 'Please select your gender.',
  },
  location:{
    required: true,  
    message: 'Please add your location.',
  },
  education:{
    required: true,  
    message: 'Tell us about your highest qualification',
  }
};

export const GetDurationFormat = (duration:number) => {
  let time = duration / 1000;
  let minutes = Math.floor(time / 60);
  let timeForSeconds = time - minutes * 60;
  let seconds = Math.floor(timeForSeconds);
  let secondsReadable = seconds > 9 ? seconds : `0${seconds}`;
  return `${minutes}:${secondsReadable}`;
};
