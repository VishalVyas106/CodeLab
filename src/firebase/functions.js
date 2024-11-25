import { getFunctions, httpsCallable } from 'firebase/functions';

const functions = getFunctions();

export const setAdminRole = async (uid) => {
  try {
    const addAdminRole = httpsCallable(functions, 'setAdminRole');
    const result = await addAdminRole({ uid });
    return result.data;
  } catch (error) {
    console.error('Error setting admin role:', error);
    throw error;
  }
};