import { SignIn } from '@clerk/nextjs';

const SignInPage = () => {
  return <SignIn fallbackRedirectUrl={'/new-user'} />;
};

export default SignInPage;
