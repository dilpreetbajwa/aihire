"use client";
import signup from "@/../public/img/faq/signup.png";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import upload from "@/utils/upload";
import newRequest from "@/utils/newRequest";
import { useRouter } from 'next/navigation'

const SignUp = () => {
  const [file, setFile] = useState<any | null>(null);
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    img: "",
    country: "",
    isSeller: false,
    desc: "",
  });
  console.log(user);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setUser((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handlefilechange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    const selectedFiles = files as FileList;
    setFile(selectedFiles?.[0]);
  };

  const handleSeller = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser((prev) => {
      return { ...prev, isSeller: e.target.checked };
    });
  };
 
  

  const router = useRouter()
  const handleSubmit =  async(e: React.SyntheticEvent) => {
    e.preventDefault();

    const url = await upload(file);
    try {
      await newRequest.post("/auth/register", {
        ...user,
        img: url,
      });
      router.push('/')
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <section className="signup__section ralt bg__all pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-xl-12 col-lg-12">
            <div className="signup__boxes round16 border">
              <h3 className="title mb-16">Create a new account!</h3>
              
              {/* FORM START */}
              <form className="write__review" onSubmit={(e) => handleSubmit(e)}>
                <div className="row g-4 ">

               
                  <div className="col-lg-6">
                    <div className="col-lg-12">
                        <div className="frm__grp">
                            <label
                              htmlFor="name"
                              className="fz-18 fw-500 inter title mb-16">
                              Username
                            </label>
                            <input
                              type="text"
                              name="username"
                              id="name"
                              placeholder="Enter First Name..."
                              onChange={(e) => handleChange(e)}                    
                            />
                        </div>
                    </div>
                  <div className="col-lg-12">
                    <div className="frm__grp">
                      <label
                        htmlFor="email"
                        className="fz-18 fw-500 inter title mb-16">
                        Enter Your Email ID
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter Your Email..."
                        onChange={(e) => handleChange(e)}  
                      
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
                        id="password"
                        name="password"
                        placeholder="Enter Your Password..."
                        onChange={(e) => handleChange(e)}  
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="frm__grp">
                      <label
                        htmlFor="profile_pic"
                        className="fz-18 fw-500 inter title mb-16">
                        Enter Your Profile Picture
                      </label>
                      <input
                        type="file"
                        id="profile_pic"
                        name="profile_pic"
                        onChange={handlefilechange}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="frm__grp">
                      <label
                        htmlFor="description"
                        className="fz-18 fw-500 inter title mb-16">
                        Country
                      </label>
                      <input
                        name="country"
                        type="text"
                        placeholder="Usa"
                        onChange={(e) => handleChange(e)}  
                      />
                    </div>
                  </div>
                  </div>
                    
                    {/* SELLER  */}

                  <div className="col-lg-6">
                    <div className="col-lg-12">
                      <div className="frm__grp">
                        <div
                          className="fz-18 fw-500 inter title mb-16" >
                          Activate the seller account
                        </div>
                        <label className="switch">
                          <input type="checkbox"  onChange={(e) => handleSeller(e)}   />
                          <span className="slider round"></span>
                        </label>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="frm__grp">
                        <label
                          htmlFor="phone"
                          className="fz-18 fw-500 inter title mb-16">
                          Phone Number
                        </label>
                        <input
                          type="text"
                          name="phone"
                          id="phone"
                          placeholder="+1 234 567 89"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  <div className="col-lg-12">
                    <div className="frm__grp">
                      <label
                        htmlFor="phone"
                        className="fz-18 fw-500 inter title mb-16">
                        Description
                      </label>
                      <textarea
                        placeholder="A short description of yourself"
                        name="desc"
                        id=""
                        onChange={handleChange}
                      ></textarea>
                    </div>
                  </div>
                  </div>

                     {/* SELLER  */}

                    <p className="fz-16 fw-400 title inter">
                      Do you have an account?{" "}
                      <Link href="/singin" className="base">
                        Signin
                      </Link>
                    </p>

                    <div className="col-lg-6">
                      <div className="frm__grp">
                        <button
                          type="submit"
                          className="cmn--btn basebor outline__btn">
                          <span>Sign Up</span>
                          <span>
                            <i className="bi bi-arrow-up-right"></i>
                          </span>
                        </button>
                      </div>
                    </div>

                </div>
              </form>
              {/* FORM END */}


            </div>
          </div>       
        </div>
      </div>
    </section>
  );
};

export default SignUp;
