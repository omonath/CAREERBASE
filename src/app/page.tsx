import Jobs from "./components/Jobs";
import Hero from "./Hero";
import {
  getSignInUrl,
  getSignUpUrl,
  getUser,
  signOut,
} from "@workos-inc/authkit-nextjs";

export default async function Home() {
  // Retrieve the user from session or returns null if no user is signed in
  const { user } = await getUser();

  //Get the URL to redirect the user to AuthKit to sign in
  const signInUrl = getSignInUrl();

  //Get the URL to redirect the user to AuthKit to sign up
  const signUpUrl = getSignUpUrl();
  return (
    <div>
      <Hero />
      <Jobs />
    </div>
  );
}
function getUser(): { user: any } | PromiseLike<{ user: any }> {
  throw new Error("Function not implemented.");
}
