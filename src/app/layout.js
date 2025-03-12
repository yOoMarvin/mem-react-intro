import "./globals.css";

export const metadata = {
  title: "Memorisely React Intro",
  description: "A Memorisely course to get you started with Next.js and React",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
