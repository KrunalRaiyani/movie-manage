"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-themeBg px-2.5 py-8 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 p-6 rounded-lg shadow-md">
        <h2 className="text-center text-2xl font-bold tracking-tight text-white">
          Login
        </h2>

        <form className="space-y-6">
          <div>
            <Input
              type="email"
              placeholder="Email Address"
              className=""
              required
            />
          </div>

          <div>
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className=""
                required
              />
              <span
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 -right-1 flex items-center pr-3 text-gray-400 cursor-pointer">
                {showPassword ? (
                  <AiOutlineEyeInvisible size={20} />
                ) : (
                  <AiOutlineEye size={20} />
                )}
              </span>
            </div>
          </div>

          <div className="flex items-center justify-end">
            <Link
              href="/forgot-password"
              className="text-sm font-medium text-themCol mt-1">
              Forgot Password?
            </Link>
          </div>

          <div>
            <Button className="w-full bg-red-500 hover:bg-red-600 text-white">
              Login
            </Button>
          </div>
        </form>

        <div className="flex items-center py-4">
          <div className="flex-1 h-px bg-gray-600"></div>
          <p className="px-4 text-sm text-gray-400">or</p>
          <div className="flex-1 h-px bg-gray-600"></div>
        </div>

        <div className="flex space-x-4">
          <Button className="flex items-center bg-themBgSec py-5 text-white">
            <FcGoogle size={22} />
            <span className="text-[13px]">Google</span>
          </Button>
          <Button className="flex items-center bg-themBgSec py-5 text-white">
            <FaFacebook
              size={22}
              color="#1877F2"
              style={{
                background: "white",
                borderRadius: "50%",
                marginBottom: "0.5px",
              }}
            />{" "}
            <span className="text-[13px]">Facebook</span>
          </Button>
        </div>

        <div className="text-center text-sm text-gray-400">
          Do you already have an account?{" "}
          <Link href="/signup" className="font-medium text-themCol">
            Sign up now
          </Link>
        </div>
      </div>
    </div>
  );
}
