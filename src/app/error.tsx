"use client";

import { Button } from "@/components/ui/Button";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="min-h-screen flex items-center justify-center bg-warmth-light">
      <div className="max-w-md mx-auto px-4 text-center">
        <div className="w-16 h-16 rounded-full bg-warmth mx-auto mb-6 flex items-center justify-center">
          <span className="text-2xl text-depth font-display font-bold">!</span>
        </div>
        <h1 className="text-2xl font-display font-semibold text-text-primary mb-3">
          Something went wrong
        </h1>
        <p className="text-text-secondary mb-8">
          We are sorry for the inconvenience. Please try again or navigate back to the homepage.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={reset}
            className="px-6 py-3 bg-depth text-white font-medium rounded-full hover:bg-depth-dark transition-colors"
          >
            Try Again
          </button>
          <Button href="/" variant="secondary" size="lg">
            Go Home
          </Button>
        </div>
      </div>
    </main>
  );
}
