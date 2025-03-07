import { createAsyncThunk } from "@reduxjs/toolkit";
import endPoints from "../../api/endPoints";
import { setLoader } from "../slice/authSlice";
import { CompleteProfileThunkData } from "./types";
import {  AxiosResponse } from "axios";
import Axios from "../../api/axios";

// CompleteProfileThunk
export const completeProfileThunk = createAsyncThunk(
    'user/completeProfile',
    async (data: CompleteProfileThunkData, { dispatch, fulfillWithValue, rejectWithValue }) => {
        try {
            dispatch(setLoader(true)); // Start loader
            const formData = new FormData();
            const url = endPoints.completeProfileSetup;
            const fields: Record<string, any> = {
                profile: data.profilePhoto,
                cover: data.coverPhoto,
                userName: data.userName,
                bio: data.bio,
                gender: data.gender,
                education: data.education,
                location: data.location,
            };

            if (data.fcmToken) fields.fcmToken = data.fcmToken;

            Object.entries(fields).forEach(([key, value]) => {
                if (value) formData.append(key, value)
            });
            const headers = { 'content-type': 'multipart/form-data' };
            const response: AxiosResponse = await Axios.post(url, formData, { headers });
            return fulfillWithValue(response.data);
        } catch (error: any) {
            return rejectWithValue(error.response ? error.response.data : error.message);
        } finally {
            dispatch(setLoader(false)); // End loader
        }
    }
);