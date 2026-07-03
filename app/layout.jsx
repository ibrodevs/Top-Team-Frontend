import "./globals.css";
import SplashScreen from "../components/shared/SplashScreen";

export const metadata = {
  title: "Top Team KG — больше чем игра. Медиа-футбольный клуб Кыргызстана",
  description:
    "Официальная цифровая платформа Top Team KG: матч-центр, состав команды, новости, медиа-контент и партнерская программа медиа-футбольного клуба Кыргызстана.",
  icons: {
    icon: "/logo.png",
  },
};

export const viewport = {
  themeColor: "#060D1F",
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
      <body>
        <SplashScreen />
        {children}
      </body>
    </html>
  );
}
