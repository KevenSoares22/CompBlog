import { Timestamp, addDoc, collection } from 'firebase/firestore';
import { useState, useReducer, useEffect } from 'react';
import { db } from '../firebase/config';

const initialState = {
  loading: null,
  error: null,
};

const insertReducer = (state, action) => {
  switch (action.type) {
    case 'LOADING':
      return { loading: true, error: null };
    case 'INSERTED_DOC':
      return { loading: false, error: null };
    case 'ERROR':
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const useInsertDocument = (docCollection) => {
  const [response, dispatch] = useReducer(insertReducer, initialState);

  const [cancelled, setCancelled] = useState(false);

  const checkCancelledBeforeDispatch = (action) => {
    if (!cancelled) {
      dispatch(action);
    }
  };

  const insertDocument = async (document) => {
    try {
      checkCancelledBeforeDispatch({ type: 'LOADING' });
      const newDocument = { ...document, createdAt: Timestamp.now() };
      const insertedDocument = await addDoc(collection(db, docCollection), newDocument);
      checkCancelledBeforeDispatch({ type: 'INSERTED_DOC', payload: insertedDocument });
    } catch (error) {
      checkCancelledBeforeDispatch({ type: 'ERROR', payload: error.message });
    }
  };
  useEffect(() => {
    setCancelled(true);
  }, []);
  return { insertDocument, response };
};
