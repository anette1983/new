import { createApi, fetchBaseQuery, BaseQueryFn } from '@reduxjs/toolkit/query/react';

export interface IUserData {
  email: string;
  password: string;
}

interface ILoginResData {
  data: { email: string; id: string; token: string };
}

interface ILoginResError {
  error: {
    status: number;
    data: {
      message: string;
      error: string;
      statusCode: number;
    };
  };
}

export interface IUserData {
  email: string;
  password: string;
}

interface IUserDataResponse {
  user: {
    email: string;
    password?: string;
  };
}

export const authApi = createApi({
  reducerPath: 'auth',
  tagTypes: ['Users'],
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_LOGIN_BASE_URL }),
  endpoints: (builder) => ({
    signIn: builder.mutation<ILoginResData['data'], IUserData>({
      query: (body) => ({
        url: 'auth/login',
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Users' }],
    }),
    signUp: builder.mutation<IUserDataResponse, IUserData>({
      query: (body) => ({
        url: 'user',
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Users' }],
    }),
  }),
});

export const { useSignInMutation, useSignUpMutation } = authApi;
