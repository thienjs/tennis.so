import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex h-screen bg-black">
      <Head>
        <title>Tennis Social</title>
        <h1>meet, chat, learn, play with other tennis players.</h1>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="m-auto w-48">
        <Image
          width={512}
          height={512}
          src="/logo.png"
          alt="Platforms on Vercel"
        />
      </div>
    </div>
  );
}
