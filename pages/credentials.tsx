import { useEffect, useState } from "react";
import Layout from "../components/Layout";

export default function Credentials() {
  const [creds, setCreds] = useState<any[]>([1]);

  useEffect(() => {
    const stored = localStorage.getItem("credentials");
    // if (stored) setCreds(JSON.parse(stored));
  }, []);

  return (
    <Layout>
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Stored Credentials
      </h2>

      {creds.length === 0 ? (
        <p className="text-gray-500">No credentials stored.</p>
      ) : (
        <div className="space-y-4">
          {creds.map((cred, i) => (
            <pre
              key={i}
              className="bg-gray-800 p-4 rounded-lg text-sm overflow-x-auto border border-gray-200"
            >
              {`{
                  "@context": "https://www.w3.org/ns/did/v1",
                  "id": "did:key:z6MkwJBFYK8vTVGeiMsLzcqbSRXW4aTg4PozGbekWtQNUnnW",
                  "verificationMethod": [
                    {
                      "id": "did:key:z6MkwJBFYK8vTVGeiMsLzcqbSRXW4aTg4PozGbekWtQNUnnW#z6MkwJBFYK8vTVGeiMsLzcqbSRXW4aTg4PozGbekWtQNUnnW", 
                      "type": "Ed25519VerificationKey2018",
                      "controller": "did:key:z6MkwJBFYK8vTVGeiMsLzcqbSRXW4aTg4PozGbekWtQNUnnW",
                      "publicKeyJwk": {
                        "kty": "OKP",
                        "crv": "Ed25519",
                        "x": "-kMHp5nohaFOK5E9Jch4ErdgwMFYFUc4Lt_wYlAGy8s"
                      }
                    }
                  ],
                  "authentication": [
                    "did:key:z6MkwJBFYK8vTVGeiMsLzcqbSRXW4aTg4PozGbekWtQNUnnW#z6MkwJBFYK8vTVGeiMsLzcqbSRXW4aTg4PozGbekWtQNUnnW"
                  ],
                  "assertionMethod": [
                    "did:key:z6MkwJBFYK8vTVGeiMsLzcqbSRXW4aTg4PozGbekWtQNUnnW#z6MkwJBFYK8vTVGeiMsLzcqbSRXW4aTg4PozGbekWtQNUnnW"
                  ]
                }`}
            </pre>
          ))}
        </div>
      )}
    </Layout>
  );
}
