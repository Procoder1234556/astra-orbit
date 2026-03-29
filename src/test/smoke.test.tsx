/**
 * Smoke tests (Task 10)
 * Verifies that every main page renders without crashing when wrapped
 * in all required providers. AuthContext is mocked so no Supabase calls are made.
 */
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import React from "react";

// ─── Mock heavy / network-dependent modules ───────────────────────────────────

vi.mock("@/lib/supabase", () => ({
  supabase: {
    auth: {
      getSession: vi.fn().mockResolvedValue({ data: { session: null } }),
      onAuthStateChange: vi.fn().mockReturnValue({
        data: { subscription: { unsubscribe: vi.fn() } },
      }),
    },
  },
}));

vi.mock("@/context/AuthContext", () => ({
  AuthProvider: ({ children }: { children: React.ReactNode }) => (
    <>{children}</>
  ),
  useAuth: () => ({
    user: null,
    session: null,
    loading: false,
    signOut: vi.fn(),
  }),
}));

// GoogleOAuthProvider expects a real DOM — stub it out
vi.mock("@react-oauth/google", () => {
  const React = require("react");
  return {
    GoogleOAuthProvider: ({ children }: { children: React.ReactNode }) => (
      <>{children}</>
    ),
    GoogleLogin: (props: { onSuccess?: () => void }) => (
      <button type="button" onClick={props.onSuccess}>
        Sign in with Google
      </button>
    ),
    useGoogleLogin: vi.fn(),
  };
});

// framer-motion can interact badly with jsdom — use a transparent passthrough
vi.mock("framer-motion", () => {
  const React = require("react");
  const cache: Record<string, React.FC<Record<string, unknown>>> = {};
  const motion = new Proxy(
    {},
    {
      get(_t, tag: string) {
        if (!cache[tag]) {
          cache[tag] = ({ children, initial: _i, animate: _a, whileInView: _w, transition: _t2, ...rest }: Record<string, unknown>) =>
            React.createElement(tag as string, rest, children);
        }
        return cache[tag];
      },
    }
  );
  return {
    motion,
    AnimatePresence: ({ children }: { children: React.ReactNode }) => children,
  };
});

// ─── Helpers ──────────────────────────────────────────────────────────────────

function renderPage(Page: React.ComponentType, initialPath = "/") {
  return render(
    <MemoryRouter initialEntries={[initialPath]}>
      <Page />
    </MemoryRouter>
  );
}

// ─── Tests ────────────────────────────────────────────────────────────────────

describe("Smoke tests – pages render without crashing", () => {
  it("renders the Index (Home) page", async () => {
    const { default: Index } = await import("@/pages/Index");
    const { container } = renderPage(Index, "/");
    expect(container.firstChild).not.toBeNull();
  });

  it("renders the Login page", async () => {
    const { default: Login } = await import("@/pages/Login");
    const { container } = renderPage(Login, "/login");
    expect(container.firstChild).not.toBeNull();
  });

  it("renders the Hackathons page", async () => {
    const { default: Hackathons } = await import("@/pages/Hackathons");
    const { container } = renderPage(Hackathons, "/hackathons");
    expect(container.firstChild).not.toBeNull();
  });

  it("renders the Profile page", async () => {
    const { default: Profile } = await import("@/pages/Profile");
    const { container } = renderPage(Profile, "/profile");
    expect(container.firstChild).not.toBeNull();
  });

  it("renders the Community page", async () => {
    const { default: Community } = await import("@/pages/Community");
    const { container } = renderPage(Community, "/community");
    expect(container.firstChild).not.toBeNull();
  });

  it("renders the NotFound page for an unknown route", async () => {
    const { default: NotFound } = await import("@/pages/NotFound");
    renderPage(NotFound, "/does-not-exist");
    // The 404 page should contain navigational text
    expect(screen.getByRole("link")).toBeInTheDocument();
  });
});
