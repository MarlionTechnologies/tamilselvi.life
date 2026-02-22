import type { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  themeColor: "#0F1A1F",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: {
    default: "Admin — DT Dashboard",
    template: "%s | DT Admin",
  },
  description: "Admin dashboard for tamilselvi.life",
  robots: { index: false, follow: false },
  manifest: "/admin/manifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "DT Admin",
  },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="admin-root">
      {children}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            if ('serviceWorker' in navigator) {
              window.addEventListener('load', function() {
                navigator.serviceWorker.register('/admin-sw.js').catch(function() {});
              });
            }
          `,
        }}
      />
    </div>
  );
}
