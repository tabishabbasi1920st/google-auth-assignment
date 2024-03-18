import "./index.css";
import { useGoogleLogin } from "@react-oauth/google";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export default function GoogleAuth() {
  const navigate = useNavigate();

  const handleLoginSuccess = (response) => {
    console.log(response); // Log the response for debugging
    Cookies.set("authToken", response.access_token);
    navigate("/", { replace: true });
  };

  const handleLoginFailed = () => {
    console.log("error during login");
  };

  const login = useGoogleLogin({
    onSuccess: handleLoginSuccess,
    onError: () => handleLoginFailed(),
  });

  return (
    <>
      <button type="button" onClick={login} className="google-auth-btn">
        <img
          className="google-icon"
          src="https://res.cloudinary.com/dctfbwk0m/image/upload/v1710685856/google-icon_1_rb7cug.png"
          alt="google icon"
        />
        <span className="google-auth-btn-txt">Sign in with Google</span>
      </button>
    </>
  );
}
