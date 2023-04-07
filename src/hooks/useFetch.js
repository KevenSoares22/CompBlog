import { doc, getDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../firebase/config';

export const useFetch = (docCollection, id) => {
  const [document, setDocument] = useState('');
  const [loading, setLoading] = useState(false);
  const [cancelled, setCancelled] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    async function loadDocument() {
      if (cancelled) {
        return;
      }

      try {
        setLoading(true);
        const docRef = await doc(db, docCollection, id);
        const docSnap = await getDoc(docRef);
        setDocument(docSnap.data());
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError(error.message);
        setLoading(false);
      }
    }

    loadDocument();
  }, [docCollection, id, cancelled]);

  useEffect(() => {
    return () => setCancelled(true);
  }, [cancelled]);
  return { document, loading, error };
};
