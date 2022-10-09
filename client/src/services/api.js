import axios from "axios"
export const loginUser = async (data) => {
    console.log('data', data)
    //    axios post request to login user
    const res = await axios.post('http://127.0.0.1:8000/api/auth/login', { email: data.username, password: data.password })
    //save token to local storage
    if (res.status === 200) {
        localStorage.setItem('token', res.data.token)
        localStorage.setItem('user', JSON.stringify(res.data))
    }
    return res

    //    if request is good...
    //    - update state to indicate user is authenticated
    //    - save the jwt token
    //    - redirect to the route '/feature'
    //    else...
    //    - show an error to the user

}