"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { useStorecontext } from "../context/StoreContext";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "صفحه اصلی" },
    { href: "/store", label: "محصولات" },
    { href: "/aboutUs", label: "درباره ما" },
    { href: "/dashboard", label: "داشبورد" },
    { href: "/login", label: "ورود" },
  ];
  const { handelTotalCartItem } = useStorecontext();

  return (
    <nav className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* لوگو */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          <Logo />
        </Link>

        {/* لینک‌ها */}
        <ul className="hidden md:flex gap-6">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`relative px-2 py-1 transition ${pathname === link.href
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
        

<li className="relative px-2 py-1 text-gray-600 hover:text-blue-600 rounded-lg">
  <Link href="/cart" className="flex items-center">
    🛒
    <span className="absolute -top-1 -right-1 bg-red-400 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
      {handelTotalCartItem()}
    </span>
  </Link>
</li>



        </ul>

        {/* دکمه موبایل */}
        <button className="md:hidden p-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition">
          ☰
        </button>
      </div>
    </nav>
  );
}
