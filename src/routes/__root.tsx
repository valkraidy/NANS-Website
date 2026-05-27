
import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import favicon from "@/assets/nans-logo.png";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">
          Page not found
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },

      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },

      {
        title: "NANS Ghana",
      },

      {
        name: "description",
        content:
          "Official website of the National Association of Nzema Students (NANS Ghana).",
      },

      {
        name: "author",
        content: "NANS Ghana",
      },

      {
        name: "keywords",
        content:
          "NANS Ghana, Nzema Students, Ghana students, Nzema association, student union, NANS",
      },

      {
        property: "og:title",
        content: "NANS Ghana",
      },

      {
        property: "og:description",
        content:
          "Official website of the National Association of Nzema Students.",
      },

      {
        property: "og:type",
        content: "website",
      },

      {
        property: "og:image",
        content: favicon,
      },

      {
        name: "twitter:card",
        content: "summary_large_image",
      },

      {
        name: "twitter:title",
        content: "NANS Ghana",
      },

      {
        name: "twitter:description",
        content:
          "Official website of the National Association of Nzema Students.",
      },

      {
        name: "twitter:image",
        content: favicon,
      },

      {
        name: "theme-color",
        content: "#0f5132",
      },
    ],

    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },

      {
        rel: "icon",
        type: "image/png",
        href: favicon,
      },

      {
        rel: "apple-touch-icon",
        href: favicon,
      },
    ],
  }),

  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>

      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}

