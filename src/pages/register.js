import Head from "next/head";
import Layout from "../layout/layout";
import Link from "next/link";
export default function Register() {
  return (
    <Layout>
      <Head>
        <title> Register </title>
      </Head>
      <section className="w-3/4 mx-auto flex flex-col gap-10">
        <div className="title">
          <h1 className="text-grey-800 text-4xl font-bold py-4">Register</h1>
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
          <button type="submit">Register</button>
        </div>
        <p className="text-center text-gray-400">
           Have an account? <Link legacyBehavior href={"/login"}><a className="text-blue-700">Sign In</a></Link>
        </p>
      </section>
    </Layout>
  );
}
