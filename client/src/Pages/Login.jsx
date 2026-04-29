import { useDispatch } from "react-redux";
import api from "../api/axios";
import { loginSuccess } from "../features/auth/authSlice";

export default function Login() {
  const dispatch = useDispatch();

  const login = async () => {
    const res = await api.post("/auth/login", {
      email: "test@mail.com"
    });

    dispatch(loginSuccess(res.data));
  };

  return <button onClick={login}>Login</button>;
}



// export default function Login() {
//   return (
//     <div>
//       <h2>Login Page</h2>
//     </div>
//   );
// }

