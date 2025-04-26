import { SignUpForm } from "@/components/signup-form";
import React from "react";

export default function SignUpPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-red-500 to-orange-500">
      <div className="">
        <SignUpForm />
      </div>
    </div>
  );
}
