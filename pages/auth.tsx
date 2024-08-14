import Input from "@/components/input";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";

const auth = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [variant, setVariant] = useState("login");

  const router = useRouter();

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === "login" ? "register" : "login"
    );
  }, []);

  const login = useCallback(async () => {
    try {
    } catch (error) {}
  }, []);
  const register = useCallback(async () => {
    try {
    } catch (error) {}
  }, []);

  return (
    <div className=" relative h-lvh w-full bg-[url(/images/hero.jpg)] bg-center bg-no-repeat">
      <div className="bg-black h-full w-full bg-opacity-45">
        <nav className="px-12 py-6">
          <img src="/images/logo.png" alt="logo" className="h-12" />
        </nav>

        <div className="flex justify-center ">
          <div className="bg-black bg-opacity-85 px-20 py-20 self-center mt-2 rounded-xl lg:w-2/5 w-full">
            <h2 className="text-white text-5xl mb-8 font-semibold">
              {variant === "login" ? "Sign-in" : "Register"}
            </h2>
            <div className="flex flex-col gap-8">
              {variant == "register" && (
                <Input
                  id="name"
                  label="Fullname"
                  value={name}
                  onChange={(e: any) => setName(e.target.value)}
                  type="text"
                />
              )}

              <Input
                id="email"
                label="Email"
                value={email}
                onChange={(e: any) => setEmail(e.target.value)}
                type="email"
              />
              <Input
                id="password"
                label="Password"
                value={password}
                onChange={(e: any) => setPassword(e.target.value)}
                type="password"
              />
            </div>
            <button onClick={variant=='login'?login:register} className="bg-red-700 py-3 text-white hover:bg-red-800 transition rounded-md w-full mt-10">
             {variant=='login'?"Login":'Sign Up'}
            </button>
            <div className="flex flex-row items-center gap-4 mt-10 justify-center">
              <div className="bg-white flex text-red-700 w-12 h-12 rounded-full items-center text-center cursor-pointer justify-center">
                <FaGoogle size={30}></FaGoogle>
              </div>
              <div className="bg-white flex text-black-700 w-12 h-12 rounded-full items-center text-center cursor-pointer justify-center">
                <FaGithub size={30}></FaGithub>
              </div>
            </div>
            <p className=" text-neutral-600 mt-12">
              {variant == "login"
                ? "First time using Netflix"
                : "Already have a account"}
              <span
                onClick={toggleVariant}
                className="text-white ml-2 cursor-pointer hover:underline transition"
              >
                {variant == "login" ? "Create an account" : "Login"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default auth;
