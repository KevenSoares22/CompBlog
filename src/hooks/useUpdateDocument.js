import { doc, updateDoc } from 'firebase/firestore';
import { useState, useReducer, useEffect } from 'react';
import { db } from '../firebase/config';

const initialState = {
  loading: null,
  error: null,
};

const updateReducer = (state, action) => {
  switch (action.type) {
    case 'LOADING':
      return { loading: true, error: null };
    case 'UPDATED_DOC':
      return { loading: false, error: null };
    case 'ERROR':
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const useUpdateDocument = (docCollection) => {
  const [response, dispatch] = useReducer(updateReducer, initialState);

  const [cancelled, setCancelled] = useState(false);

  const checkCancelledBeforeDispatch = (action) => {
    if (!cancelled) {
      dispatch(action);
    }
  };

  const updateDocument = async (id, data) => {
    try {
      checkCancelledBeforeDispatch({ type: 'LOADING' });
      const dataRef = await doc(db, docCollection, id);
      const updatedDoc = await updateDoc(dataRef, data);

      checkCancelledBeforeDispatch({ type: 'UPDATED_DOC', payload: updatedDoc });
    } catch (error) {
      checkCancelledBeforeDispatch({ type: 'ERROR', payload: error.message });
    }
  };

  useEffect(() => {
    setCancelled(false);
  }, []);
  return { updateDocument, response };
};
