import axios, { AxiosResponse, AxiosRequestConfig, RawAxiosRequestHeaders } from 'axios';
import { IResponseUsers, IUser } from './types';

const client = axios.create({
    baseURL: 'https://dummyjson.com',
});

const getUsers = async () => {
    try {
        const response: AxiosResponse<IResponseUsers> = await client.get('/users');
        console.log(response);
        const users: IUser[] = response.data.users
        return users;
    } catch (err) {
        if (err instanceof Error) {
            console.error(err.message)
        }
    }
}

const users = getUsers();