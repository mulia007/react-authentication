import Cookies from "js-cookie";

const Auth = {
    isAuthorization: () => {
        const token = Cookies.get("access_token");
        if (token) return true;
        return null;
    },
    storeUSerInfoToCookies : (token) => {
        if(token) Cookies.set('token', token);
        return null;
    },
}; 
 
export default Auth;