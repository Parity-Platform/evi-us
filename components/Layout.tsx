// components/Layout.tsx
import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="max-w-2xl mx-auto">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900">🚗 EVI US Wallet</h1>
          <p className="text-gray-600 mt-2 text-sm">
            Secure Plug & Charge credentials using decentralized identity.
          </p>
          <nav className="mt-4 space-x-4">
            <Link href="/" className="text-blue-600 hover:underline">Home</Link>
            <Link href="/issue" className="text-blue-600 hover:underline">Issue Credential</Link>
            <Link href="/credentials" className="text-blue-600 hover:underline">My Credentials</Link>
          </nav>
        </header>
        <main>{children}</main>
      </div>
    </div>
  );
}