import { useState } from 'react';
import axios from 'axios';
import Layout from '../components/Layout';

export default function Issue() {
  const [did, setDid] = useState('');
  const [result, setResult] = useState<any>(null);

  const handleIssue = async () => {
    const res = await axios.post('/api/issue', { did, type: 'EVChargingUser' });
    const stored = JSON.parse(localStorage.getItem('credentials') || '[]');
    localStorage.setItem('credentials', JSON.stringify([...stored, res.data]));
    setResult(res.data);
  };

  return (
    <Layout>
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Issue Plug & Charge Credential</h2>
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <input
          value={did}
          onChange={(e) => setDid(e.target.value)}
          placeholder="Enter your DID"
          className="w-full sm:w-auto flex-1 border border-gray-300 p-2 rounded-lg"
        />
        <button
          onClick={handleIssue}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
        >
          Issue Credential
        </button>
      </div>

      {result && (
        <pre className="bg-gray-100 mt-6 p-4 rounded-lg text-sm overflow-x-auto">
          {JSON.stringify(result, null, 2)}
        </pre>
      )}
    </Layout>
  );
}