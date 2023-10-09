import axios from "axios";
import {LOCAL_STORAGE_TOKEN} from "@/shared/const/localstorage.ts";

export const $api = axios.create({
    baseURL: 'http://localhost:5000'
});

$api.interceptors.response.use(
    (response) => response,
    (error) => {
        if(error.response.data.message){
            alert(error.response.data.message)
        }
    }
);
$api.interceptors.request.use((config) => {
    if(config.headers){
        config.headers.Authorization = `Bearer ${localStorage.getItem(LOCAL_STORAGE_TOKEN) || ''}`;
    }
    return config;
});
