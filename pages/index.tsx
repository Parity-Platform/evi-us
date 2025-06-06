// pages/index.tsx
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
          🚗 EVI US Wallet
        </h1>
        <p className="text-gray-600 mb-10 text-lg">
          A modern digital wallet for EV charging using decentralized identity and Plug & Charge (ISO 15118).
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Link href="/issue" className="block bg-white shadow hover:shadow-md transition rounded-2xl p-6 border border-gray-200 hover:border-blue-500">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Issue Credential</h2>
            <p className="text-gray-500 text-sm">Generate your Plug & Charge credential using your DID.</p>
          </Link>

          <Link href="/credentials" className="block bg-white shadow hover:shadow-md transition rounded-2xl p-6 border border-gray-200 hover:border-blue-500">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">My Credentials</h2>
            <p className="text-gray-500 text-sm">View and manage your issued credentials.</p>
          </Link>
        </div>
      </div>
    </div>
  );
}