import "./globals.css";

export const metadata = {
  title: "Top Team Hub",
  description:
    "An all-in-one digital platform for football clubs to manage player performance, team communications, and match analysis in one unified, high-performance interface.",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&f[]=general-sans@400,500,600,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
