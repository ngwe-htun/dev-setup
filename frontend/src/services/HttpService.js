
export function authHeader () {
        return {"Authorization" : `Bearer ${localStorage.getItem('access-token')}` };
}