import type { Metadata } from "next";
import { Jua } from "next/font/google";
import "./globals.css";

const jua = Jua({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "제주옵서예",
  description: "제주 명소 알아보기",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={jua.className}>{children}</body>
    </html>
  );
}
