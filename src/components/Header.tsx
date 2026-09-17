"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { siteConfig } from "@/data/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 md:px-8">
        <Link
          href="/"
          className="font-display text-2xl tracking-tight text-ink transition-opacity hover:opacity-70 md:text-[1.7rem]"
          onClick={() => setOpen(false)}
        >
          {siteConfig.name}
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {siteConfig.nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-sm tracking-[0.08em] uppercase transition-colors ${
                  active ? "text-ink" : "text-ink/55 hover:text-ink"
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-rose transition-all duration-300 ${
                    active ? "w-full" : "w-0"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center text-ink md:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <div className="flex w-5 flex-col gap-1.5">
            <span
              className={`h-px w-full bg-current transition-transform duration-300 ${
                open ? "translate-y-[3.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-full bg-current transition-opacity duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-px w-full bg-current transition-transform duration-300 ${
                open ? "-translate-y-[3.5px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      <div
        className={`border-t border-ink/10 bg-linen/95 backdrop-blur-md transition-all duration-300 md:hidden ${
          open
            ? "pointer-events-auto max-h-80 opacity-100"
            : "pointer-events-none max-h-0 overflow-hidden opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-5 py-4" aria-label="Mobile">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`rounded-lg px-3 py-3 text-sm tracking-wide ${
                pathname === item.href ? "bg-oat text-ink" : "text-ink/70"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
