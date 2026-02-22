import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="w-20 h-20 rounded-full bg-warmth flex items-center justify-center mx-auto mb-6">
          <span className="text-3xl font-display font-bold text-depth">?</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-display font-semibold text-text-primary mb-4">
          Page not found
        </h1>
        <p className="text-text-secondary mb-8">
          The page you are looking for does not exist or has been moved. Let us
          help you find your way.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button href="/" variant="primary" size="md">
            Go Home
          </Button>
          <Button href="/connect" variant="outline" size="md">
            Get in Touch
          </Button>
        </div>
      </div>
    </main>
  );
}
