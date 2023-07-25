import { create } from 'zustand'

export const useUserStore = create((set) => ({
    user: {},
    accessToken: "",
    refreshToken: "",
    setUser: (userData) => set(() => ({ user: userData })),
    setAccessToken: (token) => set(() => ({ accessToken: token })),
    setRefreshToken: (token) => set(() => ({ refreshToken: token }))
}))