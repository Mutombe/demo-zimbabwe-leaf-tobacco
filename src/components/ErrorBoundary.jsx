import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    // eslint-disable-next-line no-console
    console.error('ZLT error boundary:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[70vh] flex items-center justify-center px-6 bg-cream-50">
          <div className="text-center max-w-md">
            <p className="font-serif italic text-xl text-tobacco-600">A quiet interruption in the line.</p>
            <h1 className="mt-3 font-display text-4xl text-ink-900">
              Something didn't load as expected.
            </h1>
            <p className="mt-4 text-ink-500 text-sm">
              Refresh the page, or get in touch and we'll make sure it's working.
            </p>
            <div className="mt-8 flex items-center justify-center gap-3">
              <button
                onClick={() => window.location.reload()}
                className="px-6 py-3 bg-tobacco-700 text-cream-50 text-xs tracking-[0.18em] uppercase hover:bg-tobacco-800 transition-colors"
              >
                Refresh
              </button>
              <a
                href="/"
                className="px-6 py-3 border border-ink-800 text-ink-800 text-xs tracking-[0.18em] uppercase hover:bg-ink-800 hover:text-cream-50 transition-colors"
              >
                Home
              </a>
            </div>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
