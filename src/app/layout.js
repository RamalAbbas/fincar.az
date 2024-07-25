import { Inter } from "next/font/google";
import "./globals.css";
import ClientLayout from "../components/Common/ClientLayout/ClientLayout";
import Layout from "../components/Common/Layout/Layout";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: 'Anbardan Al',
//   description: 'anbardan al',
// }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />

        <ClientLayout>
          <Layout>{children}</Layout>
        </ClientLayout>
      </body>
    </html>
  );
}
