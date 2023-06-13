
export const checkAuth = ()=> {
    const token = JSON.parse(sessionStorage.getItem('token'));
    const tokenExp = JSON.parse(sessionStorage.getItem('tokenExp'));
    if (token) {
        const expirationDate = new Date(tokenExp);
        const currentDate = new Date();
        return currentDate < expirationDate;
      }
    return token? true : false;
}

export const useAuth = ()=>{
    const token = JSON.parse(sessionStorage.getItem('token'));
    const tokenExp = JSON.parse(sessionStorage.getItem('tokenExp'));
    if (token) {
        const expirationDate = new Date(tokenExp);
        const currentDate = new Date();
        return currentDate < expirationDate;
      }
    return token? true : false;
}