"use client";
import React,{ useState } from "react";
import Image from "next/image";
import signIn from "@/../public/img/faq/signup.png";
import newRequest from "@/utils/newRequest";
import Link from "next/link";
import { useRouter } from 'next/navigation'

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const router = useRouter()
  
  const handleSubmit = async(e: React.SyntheticEvent) => {
    try {
      e.preventDefault();
      const res = await newRequest.post("/auth/login", { username, password });
      localStorage.setItem("currentUser", JSON.stringify(res.data));
      router.push('/')
    } catch (error) {
      
    }
  };

  return (
    <section className="signup__section ralt bg__all pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-xl-6 col-lg-6">
            <div className="signup__boxes round16 border">
              <h3 className="title mb-16">Welcome Back!</h3>
              <p className="fz-16 title fw-400 inter mb-40">
                Sign in to your account and join us
              </p>
              <form className="write__review" onSubmit= {handleSubmit}>
                <div className="row g-4 ">
                  <div className="col-lg-12">
                    <div className="frm__grp">
                      <label
                        htmlFor="username"
                        className="fz-18 fw-500 inter title mb-16">
                        Enter Your Username
                      </label>
                      <input
                        type="text"
                        id="username"
                        name="username"
                        placeholder="Enter Your Username..."
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="frm__grp">
                      <label
                        htmlFor="pas"
                        className="fz-18 fw-500 inter title mb-16">
                        Enter Your Password
                      </label>
                      <input
                        type="text"
                        name="password"
                        id="pas"
                        placeholder="Enter Your Password..."
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <Link
                        href="#"
                        className="base fz-14 inter d-flex justify-content-end mt-2">
                        Forget password
                      </Link>
                    </div>
                  </div>
                  <p className="fz-16 fw-400 title inter">
                    Do you have an account?{" "}
                    <Link href="/signup" className="base">
                      Signup
                    </Link>
                  </p>
                  <div className="col-lg-6">
                    <div className="frm__grp">
                      <button
                        type="submit"
                        className="cmn--btn basebor outline__btn">
                        <span>Sign In</span>
                        <span>
                          <i className="bi bi-arrow-up-right"></i>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                
              </form>
            </div>
          </div>
          <div className="col-xl-5 col-lg-6">
            <div className="signup__thumb">
            
              <Image src={signIn} className="w-100" alt="img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
