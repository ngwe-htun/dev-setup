// Store client token
export const storeClientToken = (token) => {
    try {
        localStorage.setItem('client-access-token', token);
    } catch (err) {
        console.log(err);
    }
}

// Get client token
export const getClientToken = () => {
    return localStorage.getItem('client-access-token');
}