/**
 * Navbar component tests (Task 11)
 * Tests:
 *  1. Mobile menu toggle – clicking hamburger shows/hides the mobile menu.
 *  2. Active link styling – the link matching the current pathname gets the active class.
 *  3. Unauthenticated state – "Sign In" button is visible when user is null.
 *  4. Authenticated state – avatar / sign-out dropdown is shown when a user is present.
 */
import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent, act, cleanup } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import React from "react";
import type { User } from "@supabase/supabase-js";

// ─── Mocks ────────────────────────────────────────────────────────────────────

// Keep a mutable reference so each test can override auth state
const mockAuth = {
  user: null as User | null,
  session: null,
  loading: false,
  signOut: vi.fn(),
};

vi.mock("@/context/AuthContext", () => ({
  useAuth: () => mockAuth,
}));

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

vi.mock("framer-motion", () => {
  const React = require("react");
  // IMPORTANT: must cache component references so React doesn't remount them
  // on every render (which would reset useState and break toggle tests).
  const cache: Record<string, React.FC<Record<string, unknown>>> = {};
  const motion = new Proxy(
    {},
    {
      get(_t, tag: string) {
        if (!cache[tag]) {
          cache[tag] = ({ children, initial: _i, animate: _a, whileInView: _w, ...rest }: Record<string, unknown>) =>
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

// ─── Helper ───────────────────────────────────────────────────────────────────

async function renderNavbar(initialPath = "/") {
  const { default: Navbar } = await import("@/components/Navbar");
  return render(
    <MemoryRouter initialEntries={[initialPath]}>
      <Navbar />
    </MemoryRouter>
  );
}

// ─── Tests ────────────────────────────────────────────────────────────────────

describe("Navbar – mobile menu toggle", () => {
  beforeEach(() => {
    mockAuth.user = null;
    vi.clearAllMocks();
  });

  afterEach(() => {
    cleanup();
  });

  it("hides the mobile menu by default", async () => {
    const { container } = await renderNavbar();
    const mobileMenu = container.querySelector(".border-t.border-border.bg-card");
    expect(mobileMenu).toBeNull();
  });

  it("shows the mobile menu after clicking the hamburger button", async () => {
    const { container } = await renderNavbar();
    const hamburger = screen.getByTestId("mobile-menu-toggle");
    await act(async () => {
      fireEvent.click(hamburger);
    });
    const mobilePanel = container.querySelector(".border-t.border-border.bg-card");
    expect(mobilePanel).not.toBeNull();
  });

  it("toggles the menu open then shows close icon", async () => {
    const { findByTestId } = await renderNavbar();
    const hamburger = await findByTestId("mobile-menu-toggle");
    // Before click: button should indicate menu can be opened
    expect(hamburger.getAttribute("aria-label")).toBe("Open menu");
    await act(async () => {
      fireEvent.click(hamburger);
    });
    // After click: button label flips to indicate menu can be closed
    expect(hamburger.getAttribute("aria-label")).toBe("Close menu");
  });
});

describe("Navbar – active link styling", () => {
  it("applies active class to the Hackathons link when on /hackathons", async () => {
    await renderNavbar("/hackathons");
    // Find all links labelled "Hackathons" (desktop + possibly mobile though mobile is hidden by default)
    const links = screen.getAllByText("Hackathons");
    // At least the desktop link should have the active class
    const activeLink = links.find((el) =>
      el.className.includes("text-primary")
    );
    expect(activeLink).toBeDefined();
  });

  it("does not apply active class to Home link when on /hackathons", async () => {
    await renderNavbar("/hackathons");
    const homeLinks = screen.getAllByText("Home");
    const anyActive = homeLinks.some((el) => el.className.includes("text-primary"));
    expect(anyActive).toBe(false);
  });
});

describe("Navbar – authentication state", () => {
  it("shows Sign In button when user is null", async () => {
    mockAuth.user = null;
    await renderNavbar();
    expect(screen.getByText("Sign In")).toBeInTheDocument();
  });

  it("hides Sign In button when a user is logged in", async () => {
    mockAuth.user = {
      id: "test-uid",
      email: "test@astra.dev",
      user_metadata: { full_name: "Astra Tester", avatar_url: "" },
    } as unknown as User;
    await renderNavbar();
    expect(screen.queryByText("Sign In")).toBeNull();
  });
});
