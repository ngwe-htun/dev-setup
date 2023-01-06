export const getUserInfo = () => {
    try {
        return localStorage.getItem('user-info');
    } catch (err) {
        console.log(err);
    }
}

export const getAccessToken = () => {
    try {
        return localStorage.getItem('access-token');
    } catch (err) {
        console.log(err);
    }
}

// STORE LOGGED IN USER
export const storeAdminAccessInfo = (data) => {
    try {
        localStorage.setItem('user-info', JSON.stringify(data.user_info));
        localStorage.setItem('access-token', data.token_info.plainTextToken);
    } catch (err) {
        console.log(err);
    }
}

export const removeAdminAccessInfo = () => {
    try {
        localStorage.removeItem('user-info');
        localStorage.removeItem('access-token');
    } catch (err) {
        console.log(err);
    }
}