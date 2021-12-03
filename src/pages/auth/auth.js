import Login from "./Login";
import Register from "./Register";
import ForgetPassword from "./ForgotPassword";

export default [
  {path: '/login', name: 'Login', component: Login},
  {path: '/register', name: 'Register', component: Register},
  {path: '/forget-password', name: 'ForgetPassword', component: ForgetPassword}
]
