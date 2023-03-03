import { useEffect, useState } from "react";
import { collection, projectFirestore, onSnapshot } from "../firebase/config";

function useCollection(collect) {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      const colRef = collection(projectFirestore, collect);
      console.log(colRef);
      onSnapshot(colRef, (snapshot) => {
        let results = [];
        snapshot.docs.forEach((doc) => {
          results.push({ ...doc.data(), id: doc.id });
        });
        setDocuments(results);
        setError(null);
      });
    } catch (err) {
      console.log(err);
      setError("could not fetch the data");
    }
  }, [collect]);

  return { documents, error };
}

export { useCollection };
