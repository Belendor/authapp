import Head from "next/head";
import Layout from "../layout/layout";
import Link from "next/link";
import { signIn } from "next-auth/react";

export default function Login() {
  async function handleGitLabSignin() {
    signIn("gitlab", { callbackUrl: "http://localhost:3000" });
  }

  async function handleCredentialsSignin() {
    await signIn("credentials", { callbackUrl: "http://localhost:3000" });
  }
  return (
    <Layout>
      <Head>
        <title> Login </title>
      </Head>
      <section className="w-3/4 mx-auto flex flex-col gap-10">
        <div className="title">
          <h1 className="text-grey-800 text-4xl font-bold py-4">Explore</h1>
          <p className="w-3/4 mx-auto text-gray-400">lorem ipsum</p>
        </div>
        <form className="flex flex-col gap-5">
          <div className="input-group">
            <input type="email" name="email" placeholder="email"></input>
          </div>
          <div className="input-group">
            <input
              type="password"
              name="password"
              placeholder="password"
            ></input>
          </div>
        </form>
        <div className="input-button">
          <button onClick={handleCredentialsSignin} type="submit">
            Login
          </button>
        </div>
        <div className="input-button">
          <button type="submit" onClick={handleGitLabSignin}>
            Sign in with GitLab
          </button>
        </div>
        <p className="text-center text-gray-400">
          Don't have an account?{" "}
          <Link legacyBehavior href={"/register"}>
            <a className="text-blue-700">Sign Up</a>
          </Link>
        </p>
      </section>
    </Layout>
  );
}
