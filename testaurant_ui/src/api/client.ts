import axios from 'axios'

const API_BASE_URL = 'https://testaurant-api-proxy.netlify.app'

console.log('--- TESTAURANT BUILD V5 ---')
console.log('API Base URL:', API_BASE_URL)
if (typeof window !== 'undefined') (window as any).TESTAURANT_URL = API_BASE_URL;

const apiClient = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
})

// Add auth token to requests
apiClient.interceptors.request.use((config) => {
    const token = localStorage.getItem('access_token')
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})

// Handle 401 errors
apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
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
