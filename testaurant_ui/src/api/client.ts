import axios, { InternalAxiosRequestConfig } from 'axios'
const FINAL_API_URL = 'https://testaurant-api-proxy.netlify.app'

console.log('--- TESTAURANT RELOADED V7 ---')
console.log('Target URL:', FINAL_API_URL)

const apiClient = axios.create({
    baseURL: FINAL_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
})

// Add auth token to requests
apiClient.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem('access_token')
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})

// Handle 401 errors
apiClient.interceptors.response.use(
    (response) => response,
    (error: any) => {
        if (error.response?.status === 401) {
            localStorage.removeItem('access_token')
            window.location.href = '/login'
        }
        return Promise.reject(error)
    }
)

export default apiClient
// force rebuild Tue Dec 30 16:53:22 IST 2025
// Update at Tue Dec 30 16:56:54 IST 2025
