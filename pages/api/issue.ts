// pages/api/issue.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end();

  const { did, type } = req.body;

  const credential = {
    credentialSubject: {
      id: did,
      type,
      authorized: true,
      issuedAt: new Date().toISOString(),
    },
    issuerDid: "did:key:z6Mk...",
    type: ["PlugAndChargeCredential"],
    expirationDate: "2030-01-01T00:00:00Z"
  };

  try {
    const response = await axios.post("http://localhost:7000/v1/credentials/issue", credential);
    res.status(200).json(response.data);
  } catch (e) {
    res.status(500).json({ error: "Failed to issue credential" });
  }
}