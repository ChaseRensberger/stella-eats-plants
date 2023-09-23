import Link from "next/link";
export default function Header() {
  return (
    <header className="text-center space-y-8">
      <Link
        href="/"
        className="text-6xl mx-auto underline underline-offset-8 decoration-1"
      >
        stella eats plants
      </Link>
      <nav>
        <ul className="flex flex-row gap-8 text-2xl justify-center">
          <li className="group text-black transition duration-300">
            <Link href="/">restaurants</Link>
            <span className="block mx-auto max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
          </li>
          <li className="group text-black transition duration-300">
            <Link href="/about">about me</Link>
            <span className="block mx-auto max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
          </li>
        </ul>
      </nav>
    </header>
  );
}
