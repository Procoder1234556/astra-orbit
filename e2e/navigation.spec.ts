import { test, expect } from "@playwright/test";

/**
 * E2E Navigation tests (Task 12)
 * Requires the dev server to be running on the configured baseURL.
 * These tests exercise the real browser navigation, including Supabase
 * auth redirects (ProtectedRoute → /login for unauthenticated users).
 */

test.describe("Navigation – unauthenticated user", () => {
  test("Home page loads and shows the hero headline", async ({ page }) => {
    await page.goto("/");
    // The main hero heading should be visible
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    // The page title should reflect the app name
    await expect(page).toHaveTitle(/TechAstra|Astra/i);
  });

  test("'Explore Hackathons' button navigates to /login for unauthenticated user", async ({
    page,
  }) => {
    await page.goto("/");
    // Click the primary CTA link that routes to /hackathons (protected)
    await page.getByRole("link", { name: /Explore Hackathons/i }).click();
    // ProtectedRoute redirects unauthenticated users to /login
    await expect(page).toHaveURL(/\/login/);
  });

  test("Direct navigation to /hackathons redirects to /login", async ({
    page,
  }) => {
    await page.goto("/hackathons");
    await expect(page).toHaveURL(/\/login/);
  });

  test("Direct navigation to /profile redirects to /login", async ({
    page,
  }) => {
    await page.goto("/profile");
    await expect(page).toHaveURL(/\/login/);
  });

  test("Direct navigation to /community redirects to /login", async ({
    page,
  }) => {
    await page.goto("/community");
    await expect(page).toHaveURL(/\/login/);
  });

  test("Unknown route renders a 404 / Not Found page", async ({ page }) => {
    await page.goto("/this-route-does-not-exist");
    // The NotFound page should contain some navigational cue back to home
    const backLink = page.getByRole("link").first();
    await expect(backLink).toBeVisible();
    // We stay on the unknown URL (no crash redirect)
    await expect(page).toHaveURL(/this-route-does-not-exist/);
  });

  test("Navbar brand link returns to Home from /login", async ({ page }) => {
    await page.goto("/login");
    // Click the TechAstra brand logo link
    await page.getByRole("link", { name: /TechAstra/i }).click();
    await expect(page).toHaveURL("/");
  });

  test("Login page has an email input", async ({ page }) => {
    await page.goto("/login");
    const emailInput = page.getByRole("textbox", { name: /email/i });
    await expect(emailInput).toBeVisible();
  });
});
