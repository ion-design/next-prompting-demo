"use client";
// Generated with Ion on 8/6/2024, 4:58:10 PM
// Figma Link: https://www.figma.com/design/BsgE00bYWTmwm4RY0WmYN6?node-id=2:12276
import {
  AppleLogo,
  Envelope,
  GoogleLogo,
  LockSimpleOpen,
} from "@phosphor-icons/react/dist/ssr";
import { useFormik } from "formik";
import { type MouseEvent, useState, useEffect } from "react";

import Button from "@/components/ion/Button";
import Input from "@/components/ion/Input";

function FormExample() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger the animation after the component mounts
    setIsVisible(true);
  }, []);

  function continueWithAppleClickHandler(e: MouseEvent<HTMLButtonElement>) {
    alert("continueWithAppleClickHandler fired");
  }
  function continueWithGoogleClickHandler(e: MouseEvent<HTMLButtonElement>) {
    alert("continueWithGoogleClickHandler fired");
  }
  function continueWithSsoClickHandler(e: MouseEvent<HTMLButtonElement>) {
    alert("continueWithSsoClickHandler fired");
  }
  function signUpNowClickHandler(e: MouseEvent<HTMLButtonElement>) {
    alert("signUpNowClickHandler fired");
  }

  const { values, errors, touched, handleChange, handleBlur } = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: () => {},
  });

  return (
    <div
      className={`bg-container h-[800px] w-[1200px] flex justify-center items-center transition-opacity duration-1000 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`bg-background w-1/3 flex flex-col justify-center items-center gap-5 p-5 rounded-radius-sm shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] transform transition-transform duration-700 ease-in-out ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
        style={{ transitionDelay: "200ms" }}
      >
        <div
          className={`w-full flex flex-col justify-center items-center gap-2.5 p-2.5 transition-opacity duration-500 ease-in-out ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="bg-on-neutral-container flex justify-center items-center p-4 rounded-full">
            <img
              src="/images/form-example/Logo.svg"
              alt="Logo"
              className="h-5 w-5"
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="text-2xl font-semibold text-foreground">
              Welcome back
            </div>
            <div className="text-base text-secondary">
              Sign in to your account
            </div>
          </div>
        </div>
        <form
          className={`w-full flex flex-col justify-center items-center gap-4 transition-all duration-500 ease-in-out ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <Input
            placeholder="hello@ion.design"
            iconLeading={<Envelope size={16} weight={"regular"} />}
            label="Email"
            name="email"
            onChange={handleChange}
            value={values.email}
            onBlur={handleBlur}
            error={touched.email && errors.email}
            className="w-full"
          />
          <Button
            variant="filled"
            color="primary"
            size="sm"
            className="w-full transition-transform duration-300 ease-in-out transform hover:scale-105 focus:scale-105"
          >
            Sign In
          </Button>
        </form>
        <div
          className={`w-full flex items-center gap-3 text-xs font-semibold text-secondary transition-opacity duration-500 ease-in-out ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          <img
            src="/images/form-example/Line-1.svg"
            alt="Line 1"
            className="flex-1 h-2.5 w-full"
          />
          <div>or</div>
          <img
            src="/images/form-example/Line-2.svg"
            alt="Line 2"
            className="flex-1 w-full"
          />
        </div>
        <div
          className={`w-full flex flex-col justify-center items-center gap-4 transition-opacity duration-500 ease-in-out ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          <Button
            iconLeading={<GoogleLogo size={16} weight={"bold"} />}
            variant="outline"
            color="primary"
            size="sm"
            onClick={continueWithGoogleClickHandler}
            className="w-full"
          >
            Continue with Google
          </Button>
          <Button
            iconLeading={<AppleLogo size={16} weight={"bold"} />}
            variant="outline"
            color="primary"
            size="sm"
            onClick={continueWithAppleClickHandler}
            className="w-full"
          >
            Continue with Apple
          </Button>
          <Button
            iconLeading={<LockSimpleOpen size={16} weight={"bold"} />}
            variant="outline"
            color="primary"
            size="sm"
            onClick={continueWithSsoClickHandler}
            className="w-full"
          >
            Continue with SSO
          </Button>
        </div>
        <div
          className={`flex justify-center items-center gap-2 transition-opacity duration-500 ease-in-out ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "800ms" }}
        >
          <div className="text-sm text-secondary">Don’t have an account?</div>
          <Button
            size="sm"
            color="primary"
            onClick={signUpNowClickHandler}
            variant="link"
            className="transition-colors duration-300 ease-in-out hover:text-primary-hover"
          >
            Sign up now
          </Button>
        </div>
      </div>
    </div>
  );
}
export default FormExample;