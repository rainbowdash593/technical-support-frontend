import React from "react";
import { AuthLayoutContainer } from "../containers/layout";
import { SignInContainer } from "../containers/sign-in";

export default function SignInPage() {
  return (
    <AuthLayoutContainer>
      <SignInContainer />
    </AuthLayoutContainer>
  );
}
