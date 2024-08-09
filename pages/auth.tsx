import Input from "@/components/input";
import { useState } from "react";

const auth = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className=" relative h-lvh w-full bg-[url(/images/hero.jpg)] bg-center bg-no-repeat">
      <div className="bg-black h-full w-full bg-opacity-45">
        <nav className="px-12 py-6">
          <img src="/images/logo.png" alt="logo" className="h-12" />
        </nav>

        <div className="flex justify-center ">
          <div className="bg-black bg-opacity-85 px-20 py-20 self-center mt-2 rounded-xl lg:w-2/5 w-full">
            <h2 className="text-white text-5xl mb-8 font-semibold">Register</h2>
            <div className="flex flex-col gap-8">
              <Input
                id="name"
                label="Username"
                value={name}
                onChange={(e: any) => setName(e.target.value)}
                type="text"
              />
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default auth;
