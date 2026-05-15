import { db } from './client';
import { doc, getDoc } from 'firebase/firestore';

export async function getSystemConfig() {
  const defaultConfig = {
    resumeUrl: '/LEGASPI_RESUME.pdf',
    alertMsg: 'System operational.'
  };

  try {
    if (!import.meta.env.PUBLIC_FIREBASE_API_KEY) {
      return defaultConfig;
    }

    const docRef = doc(db, 'system', 'config');
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return { ...defaultConfig, ...docSnap.data() };
    }
  } catch (error) {
    console.error("Error fetching system config:", error);
  }

  return defaultConfig;
}
