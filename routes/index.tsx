import { Head } from "$fresh/runtime.ts";
import { Copyright } from "../components/copyright.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fresh App</title>
      </Head>
      <div class="p-4 mx-auto max-w-screen-md">
        <Copyright />
      </div>
    </>
  );
}
