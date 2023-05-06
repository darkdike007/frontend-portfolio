import { Html, Head, Main, NextScript } from "next/document";
import NavbarMenu from "@/components/navbar";
import Footer1 from "@/components/footer";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className={`!bg-neutral-50`}>
        <main className="max-w-screen-xl m-auto">
          {/* <NavbarMenu /> */}
          <Main />
          <Footer1 />
        </main>
        <NextScript />
      </body>
    </Html>
  );
}
