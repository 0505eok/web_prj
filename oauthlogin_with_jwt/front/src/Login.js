import dotenv from 'dotenv';
dotenv.config();

const Login = () => {
    const clientID = process.env.REACT_APP_GITHUB_CLIENT_ID;
    const callbackURL = process.env.REACT_APP_CLIENT_CALLBACK_URL;
    const url = `https://github.com/login/oauth/authorize?client_id=${clientID}&redirect_uri=${callbackURL}`;
    window.location.href=url;
};

export default Login;