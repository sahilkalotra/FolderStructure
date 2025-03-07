import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { CompleteProfileThunkData, ForgotPasswordThunkData, ForgotPasswordThunkResponse, ResendOtpThunkData, ResendOtpThunkResponse, ResetPasswordThunkData, ResetPasswordThunkResponse, SignInThunkData, SignInThunkResponse, SignUpThunkData, SignUpThunkResponse, VerifyOtpThunkData, VerifyOtpThunkResponse, validUserNameThunkData, validUserNameThunkResponse } from "./types";
import endPoints from "../../api/endPoints";
import Axios from "../../api/axios";
import { setLoader } from "../slice/authSlice";

// SignInThunk
export const signInThunk = createAsyncThunk(
    'auth/signInThunk',
    async (data: SignInThunkData, { dispatch, fulfillWithValue, rejectWithValue }) => {
        const url = endPoints.signIn, body = data;
        try {
            dispatch(setLoader(true)); // Start loader
            const response: AxiosResponse<SignInThunkResponse> = await Axios.post(url, body);
            return fulfillWithValue(response.data);
        } catch (error) {
            return rejectWithValue(error);
        } finally {
            dispatch(setLoader(false)); // End loader
        }
    },
);

// SignUpThunk
export const signUpThunk = createAsyncThunk(
    'auth/signUpThunk',
    async (data: SignUpThunkData, { dispatch, fulfillWithValue, rejectWithValue }) => {
        const url = endPoints.signUp, body = data;
        try {
            dispatch(setLoader(true)); // Start loader
            const response: AxiosResponse<SignUpThunkResponse> = await Axios.post(url, body);
            return fulfillWithValue(response.data);
        } catch (error) {
            return rejectWithValue(error);
        } finally {
            dispatch(setLoader(false)); // End loader
        }
    },
);

// VerifyOtpThunk
export const verifyOtpThunk = createAsyncThunk(
    'auth/verifyOtpThunk',
    async (data: VerifyOtpThunkData, { dispatch, fulfillWithValue, rejectWithValue }) => {
        const url = endPoints.verifyOtp, body = data;
        try {
            dispatch(setLoader(true)); // Start loader
            const response: AxiosResponse<VerifyOtpThunkResponse> = await Axios.post(url, body);
            return fulfillWithValue(response.data);
        } catch (error) {
            return rejectWithValue(error);
        } finally {
            dispatch(setLoader(false)); // End loader
        }
    },
);

// ResendOtpThunk
export const resendOtpThunk = createAsyncThunk(
    'auth/resendOtpThunk',
    async (data: ResendOtpThunkData, { dispatch, fulfillWithValue, rejectWithValue }) => {
        const url = endPoints.resendOtp, body = data;
        try {
            dispatch(setLoader(true)); // Start loader
            const response: AxiosResponse<ResendOtpThunkResponse> = await Axios.post(url, body);
            return fulfillWithValue(response.data);
        } catch (error) {
            return rejectWithValue(error);
        } finally {
            dispatch(setLoader(false)); // End loader
        }
    },
);

// ForgotPasswordThunk
export const forgotPasswordThunk = createAsyncThunk(
    'auth/forgotPasswordThunk',
    async (data: ForgotPasswordThunkData, { dispatch, fulfillWithValue, rejectWithValue }) => {
        const url = endPoints.forgotPassword, body = data;
        try {
            dispatch(setLoader(true)); // Start loader
            const response: AxiosResponse<ForgotPasswordThunkResponse> = await Axios.post(url, body);
            return fulfillWithValue(response.data);
        } catch (error) {
            return rejectWithValue(error);
        } finally {
            dispatch(setLoader(false)); // End loader
        }
    },
);

// ResetPasswordThunk
export const resetPasswordThunk = createAsyncThunk(
    'auth/resetPasswordThunk',
    async (data: ResetPasswordThunkData, { dispatch, fulfillWithValue, rejectWithValue }) => {
        const url = endPoints.resetPassword, body = data;
        try {
            dispatch(setLoader(true)); // Start loader
            const response: AxiosResponse<ResetPasswordThunkResponse> = await Axios.post(url, body);
            return fulfillWithValue(response.data);
        } catch (error) {
            return rejectWithValue(error);
        } finally {
            dispatch(setLoader(false)); // End loader
        }
    },
);

// validUserNameThunk
export const validUserNameThunk = createAsyncThunk(
    'auth/validUserNameThunk',
    async (data: validUserNameThunkData, { dispatch, fulfillWithValue, rejectWithValue }) => {
        const url = endPoints.validUsername, body = data;
        try {
            const response: AxiosResponse<validUserNameThunkResponse> = await Axios.post(url, body);
            return fulfillWithValue(response.data);
        } catch (error) {
            return rejectWithValue(error);
        } finally {
            dispatch(setLoader(false)); // End loader
        }
    },
);
