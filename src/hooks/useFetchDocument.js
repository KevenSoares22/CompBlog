import { collection, onSnapshot, orderBy, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../firebase/config';

export const useFetchDocuments = (docCollection, search = null, uid = null) => {
  const [documents, setDocuments] = useState('');
  const [loading, setLoading] = useState(false);
  const [cancelled, setCancelled] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    async function loadData() {
      if (cancelled) {
        return;
      }
      setLoading(true);
      const collectionRef = await collection(db, docCollection);

      try {
        let q;

        if (search) {
          q = await query(collectionRef, where('tags', 'array-contains', search), orderBy('createdAt', 'desc'));
        } else {
          q = await query(collectionRef, orderBy('createdAt', 'desc'));
        }

        await onSnapshot(q, (querySnapshot) => {
          setDocuments(querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
          setLoading(false);
        });
      } catch (error) {
        console.log(error);
        setError(error.message);
        setLoading(false);
      }
    }

    loadData();
  }, [docCollection, search, uid, cancelled]);

  useEffect(() => {
    return () => setCancelled(true);
  }, [cancelled]);
  return { documents, loading, error };
};
