export const isAuthenticated = () => {

    const token = sessionStorage.getItem('token')

    return !!token

}

export const isAdmin = () => {
    const user = JSON.parse(sessionStorage.getItem('user') || "{}")
    return user?.role == 'admin'
}