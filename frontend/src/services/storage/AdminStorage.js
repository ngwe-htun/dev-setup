// ADMIN storage
export const storeUserInfo = (userInfo) => {
    try {
        localStorage.setItem('user-info', userInfo);
    } catch (err) {
        console.log(err);
    }
}