import "./globals.css";

export const metadata = {
  title: "Top Team KG - медиа-футбольный клуб Кыргызстана",
  description:
    "Официальный сайт Top Team KG: состав команды, матчи, достижения, новости, медиа и партнерство.",
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
