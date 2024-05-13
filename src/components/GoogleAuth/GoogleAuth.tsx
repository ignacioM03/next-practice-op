import { useAuth } from "@/context/UseAuth";
import {
  CredentialResponse,
  GoogleLogin,
  GoogleOAuthProvider,
} from "@react-oauth/google";

export const GoogleAuth = () => {
  const { signInWithGoogle } = useAuth();
  const handleGoogleLogin = async (credentialResponse: CredentialResponse) => {
    if (credentialResponse.credential) {
      signInWithGoogle({ token: credentialResponse.credential });
    }
  };

  const handleGoogleLoginFailure: () => void = () => {
    console.log("Google login failed");
  };
  return (
    <div className="">
      <GoogleOAuthProvider clientId={""}>
        <GoogleLogin
          useOneTap
          onSuccess={handleGoogleLogin}
          onError={handleGoogleLoginFailure}
        />
      </GoogleOAuthProvider>
    </div>
  );
};
