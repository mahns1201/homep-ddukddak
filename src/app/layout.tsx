import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export const metadata: Metadata = {
  title: "홈피뚝딱",
  description: "홈페이지를 뚝딱 만들어 드립니다.",
  icons: {
    icon: [
      { url: "/favicon-16x16.ico", sizes: "16x16", type: "image/x-icon" },
      { url: "/favicon-32x32.ico", sizes: "32x32", type: "image/x-icon" },
      { url: "/favicon-48x48.ico", sizes: "48x48", type: "image/x-icon" },
      { url: "/favicon-128x128.ico", sizes: "128x128", type: "image/x-icon" },
    ],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js" async />
      </head>
      <body className="flex flex-col min-h-screen bg-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (window.netlifyIdentity) {
                window.netlifyIdentity.on("init", user => {
                  if (!user) {
                    window.netlifyIdentity.on("login", () => {
                      document.location.href = "/admin/";
                    });
                  }
                });
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
