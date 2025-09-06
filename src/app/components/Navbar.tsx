"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "صفحه اصلی" },
    { href: "/store", label: "محصولات" },
    { href: "/create-blogs", label: "ایجاد محصول جدید" },
    { href: "/aboutUs", label: "درباره ما" },
  ];

  return (
    <nav className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* لوگو */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
         <Logo/>
        </Link>

        {/* لینک‌ها */}
        <ul className="hidden md:flex gap-6">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`relative px-2 py-1 transition ${
                  pathname === link.href
                    ? "text-blue-600 font-semibold"
                    : "text-gray-600 hover:text-blue-600"
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-600 rounded-full"></span>
                )}
              </Link>
            </li>
        
          ))}
              <Link href="/cart">
              <li>
                🛒
              </li>
            </Link>
        </ul>

        {/* دکمه موبایل */}
        <button className="md:hidden p-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition">
          ☰
        </button>
      </div>
    </nav>
  );
}
