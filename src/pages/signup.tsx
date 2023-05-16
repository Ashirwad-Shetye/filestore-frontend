import { GoogleLogin } from "@react-oauth/google";
import { Dispatch, SetStateAction } from "react";
import { setItemToStorage } from "../lib/storage";
import jwt_decode from "jwt-decode";

interface Props {
  setLoggedIn: Dispatch<SetStateAction<boolean>>;
}

function SignUp({ setLoggedIn }: Props) {
  return (
    <div className="w-screen h-[100dvh] flex items-center justify-center">
      <div className="flex flex-col ">
        <div className="text-center space-y-4 mx-auto bg-white/5 p-20 rounded-xl">
          <h1 className="text-white font-semibold text-6xl">
            Store super big files
          </h1>
          <h3 className="text-2xl tracking-widest text-slate-100">
            Simple. Fast. Secure
          </h3>
        </div>
        <div className="flex h-24 items-center justify-center">
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              setItemToStorage("token", credentialResponse.credential);
              setLoggedIn(true);
              const token: any = jwt_decode(`${credentialResponse.credential}`);
              setItemToStorage("userId", token.sub);
            }}
            theme="filled_black"
            shape="pill"
            onError={() => {
              console.log("Login Failed");
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default SignUp;
