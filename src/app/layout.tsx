import "./globals.css";
import { Poppins } from "next/font/google";
import { Providers } from "@/Store/Provider";
import "react-toastify/dist/ReactToastify.css";
import dynamic from "next/dynamic";

const poppin = Poppins({
  weight: ["100", "400"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Ecommerce Next App",
  description: "Developed by Abdullah Moiz",
  authors: [{ name: "Abdullah Moiz", url: "https://abdullahmoiz.vercel.app/" }],
};

//const CrispWithNoSSR = dynamic(() => import("../components/crisp"));

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*<CrispWithNoSSR />*/}
      <body className={poppin.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
