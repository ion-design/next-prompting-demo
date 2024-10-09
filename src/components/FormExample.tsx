```typescript
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
import { type MouseEvent } from "react";
import { motion } from "framer-motion";

import Button from "@/components/ion/Button";
import Input from "@/components/ion/Input";

function FormExample() {
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

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="bg-container h-[800px] w-[1200px] flex justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <motion.div
        className="bg-background w-1/3 flex flex-col justify-center items-center gap-5 p-5 rounded-radius-sm shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="w-full flex flex-col justify-center items-center gap-2.5 p-2.5"
          variants={itemVariants}
        >
          <motion.div
            className="bg-on-neutral-container flex justify-center items-center p-4 rounded-full"
            variants={itemVariants}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <img
              src="/images/form-example/Logo.svg"
              alt="Logo"
              className="h-5 w-5"
            />
          </motion.div>
          <motion.div
            className="flex flex-col justify-center items-center"
            variants={itemVariants}
          >
            <motion.div
              className="text-2xl font-semibold text-foreground"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
            >
              Welcome back
            </motion.div>
            <motion.div
              className="text-base text-secondary"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
            >
              Sign in to your account
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.form
          className="w-full flex flex-col justify-center items-center gap-4"
          variants={itemVariants}
          onSubmit={e => { e.preventDefault(); }}
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
          <Button variant="filled" color="primary" size="sm" className="w-full">
            Sign In
          </Button>
        </motion.form>
        <motion.div
          className="w-full flex items-center gap-3 text-xs font-semibold text-secondary"
          variants={itemVariants}
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
        </motion.div>
        <motion.div
          className="w-full flex flex-col justify-center items-center gap-4"
          variants={itemVariants}
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
        </motion.div>
        <motion.div
          className="flex justify-center items-center gap-2"
          variants={itemVariants}
        >
          <div className="text-sm text-secondary">Don’t have an account?</div>
          <Button
            size="sm"
            color="primary"
            onClick={signUpNowClickHandler}
            variant="link"
          >
            Sign up now
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
export default FormExample;
```