import axios, { AxiosError, AxiosResponse } from 'axios';
import { showErrorToast } from '../components/toast';
import local from '../utils/local';

// ? -> Configurations
export const baseURL = 'https://irl-backend.alcax.com'; // Dev Url 

export const isDebuggingMode = true;

// ? -> Get AccessToken
let accessToken: string | null = null;
export const setApiAccessToken = (token: string) => {
    accessToken = token;
};

export enum STATUSCODES {
    UNAUTHORIZED_ACCESS = 401,
    TIMEOUT = 510,
    SERVER_ERROR = 511
}

const handleApiError = (error: AxiosError<any>) => {
    if (!isDebuggingMode) return;
    if (error?.response) {
        const isFormData = error?.request?._headers['content-type'] == "multipart/form-data"
        console.log('\x1b[31m%s\x1b[0m', `<--------------------------------------------->`)
        console.log('\x1b[31m%s\x1b[0m', `Request : ${error?.response?.request?.responseURL} - ${error?.response?.status}`)
        error?.config?.data && console.log('\x1b[31m%s\x1b[0m', `Body : ${isFormData ? "Formdata - " + JSON.stringify(error?.config?.data) : JSON.stringify(JSON.parse(error?.config?.data), null, 9)}`)
        console.log('\x1b[31m%s\x1b[0m', `Response : ${JSON.stringify(error?.response?.data, null, 9)}`)
    } else {
        console.log('\x1b[31m%s\x1b[0m', `<--------------------------------------------->`)
        console.log('\x1b[31m%s\x1b[0m', `Request Error : ${JSON.stringify(error?.toJSON(), null, 9)}`)
    }
}
const handleApiResponse = (response: AxiosResponse<any>) => {
    if (!isDebuggingMode) return;

    const blackListedUrls: Array<string> = [];
    const isBlackListedUrl = blackListedUrls.includes(response?.request?.responseURL?.replace(baseURL, ''));

    if (response?.data) {
        console.log('\x1b[32m%s\x1b[0m', '<--------------------------------------------->');
        console.log('\x1b[32m%s\x1b[0m', `Request : ${response?.request?.responseURL} - ${response?.status}`);
        console.log('\x1b[32m%s\x1b[0m', `Response : ${isBlackListedUrl ? `${JSON.stringify(response?.data).slice(0, 20)} more...` : JSON.stringify(response?.data, null, 9)}`)
    }
}

const Axios = axios.create({
    baseURL,
    timeout: 20 * 1000, // 20 seconds
});

Axios.interceptors.request.use(
    async (config: any) => {
        const token = accessToken
        if (token) {
            config.headers = {
                ...config.headers,
                Authorization: `${token}`,
            };
        }
        return config;
    },
    (error) => {
        // Handle the request error
        return Promise.reject(error);
    }
);

Axios.interceptors.response.use(
    (response: AxiosResponse) => {
        handleApiResponse(response);
        return response;
    },
    (error) => {
        handleApiError(error);
        if (error.code == "ECONNABORTED") return Promise.reject({ statusCode: STATUSCODES.TIMEOUT, message: local.timeoutError });
        if (error?.response?.status == STATUSCODES.UNAUTHORIZED_ACCESS && error?.response?.message == local.UNAUTHORIZE) {
            showErrorToast({ title: local.sessionExpired, message: local.looksLikeYourSessionHasExpiredNoWorriesJustLogBackIn, duration: 5000 })
            return Promise.reject({ statusCode: STATUSCODES.UNAUTHORIZED_ACCESS, message: local.sessionExpired });
        }
        return Promise.reject({ statusCode: error?.response?.status || STATUSCODES.SERVER_ERROR, message: error?.response?.data?.message || local.serverError });
    }
);

export default Axios;