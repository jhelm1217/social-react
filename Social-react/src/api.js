import axios from 'axios'

const baseUrl = 'http://127.0.0.1:8000/'


export const createUser = ({ username, password, firstName, lastName }) => {
    axios ({
        method: 'post', 
        url: `${baseUrl}/create-user/`,
        data: {
            username, 
            password,
            first_name: firstName,
            last_name: lastName,
        }
    }).then (response => {
        console.log('Create USER RESPONSE: ', response)
    })
    .catch(error => console.log('ERROR: ', error))
}


export const fetchUser = ({ auth }) => {
    axios({
        method: 'get', 
        url: `${baseUrl}/get-profile/`, 
        headers: {
            Authorization: `Bearer ${auth.accessToken}`
        }
    }).then(response => {
        console.log('FETCH USER RESPONSE:', response)
    }).catch(error => console.log('ERROR: ', error))
}

 
export const getToken = ({ auth, username, password }) => {
    
    return axios.post(`${baseUrl}/token/`, {
        username, 
        password
    })
    .then(response => {
        console.log('here is a response ', response)
        // response.data.accessToken == users proof of being logged in 
        fetchUser({ auth: { accessToken: response.data.access } })
        auth.setAccessToken(response.data.access)
    })
    .catch(error => console.log('ERRORRR: ', error))
}


export const createMessage = ({ auth, content }) => {
    console.log(content)
    axios({
        method: 'post',
        url: `${baseUrl}/create-message/`,
        headers: {
            Authorization: `Bearer ${auth.accessToken}`,
        },
        data: {
            'content': content,
        },
    })
    .then(response => {
        console.log('Create MESSAGE RESPONSE: ', response);
    })
    .catch(error => console.log('ERROR: ', error));
};


// Fetch messages for the authenticated user
export const getMessages = ({ auth }) => {
    axios({
        method: 'get',
        url: `${baseUrl}/get-messages/`,
        headers: {
            Authorization: `Bearer ${auth.accessToken}`,
        },
    })
    .then(response => {
        console.log('GET MESSAGES RESPONSE: ', response);
    })
    .catch(error => console.log('ERROR: ', error));
};
