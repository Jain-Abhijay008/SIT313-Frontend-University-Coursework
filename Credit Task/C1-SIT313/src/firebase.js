import { initializeApp, getApps } from 'firebase/app';
import { 
  getFirestore, 
  collection, 
  addDoc, 
  getDocs, 
  query, 
  where,
  serverTimestamp 
} from 'firebase/firestore';
import bcrypt from 'bcryptjs';

// Read Firebase configuration from environment variables (.env)
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || ""
};

// Check if valid Firebase configuration is present
const hasFirebaseConfig = Boolean(
  firebaseConfig.apiKey && 
  firebaseConfig.projectId && 
  !firebaseConfig.apiKey.includes('your_')
);

let db = null;

if (hasFirebaseConfig) {
  try {
    const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
    db = getFirestore(app);
    console.log('[Firebase] Firestore initialized successfully.');
  } catch (err) {
    console.warn('[Firebase] Initialization error, using fallback storage:', err.message);
  }
} else {
  console.info('[Firebase] Note: Live Firebase credentials not provided in .env. Running in persistent fallback mode.');
}

// Local storage fallback helper to ensure seamless testing
const getLocalUsers = () => {
  try {
    return JSON.parse(localStorage.getItem('dev_deakin_users') || '[]');
  } catch {
    return [];
  }
};

const saveLocalUser = (user) => {
  const users = getLocalUsers();
  users.push(user);
  localStorage.setItem('dev_deakin_users', JSON.stringify(users));
};

/**
 * Register a new user
 * Encrypts password using bcrypt and stores in Firestore 'users' collection
 */
export const registerUser = async ({ name, email, password }) => {
  const normalizedEmail = email.trim().toLowerCase();

  // Encrypt sensitive password using bcrypt with salt rounds
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salt);

  const newUser = {
    name: name.trim(),
    email: normalizedEmail,
    password: hashedPassword, // Encrypted password - never plain text!
    createdAt: new Date().toISOString()
  };

  if (db) {
    try {
      // Check if user already exists in Firestore
      const usersRef = collection(db, 'users');
      const q = query(usersRef, where('email', '==', normalizedEmail));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        return { success: false, message: 'An account with this email already exists.' };
      }

      // Add new document to 'users' collection
      await addDoc(usersRef, {
        ...newUser,
        timestamp: serverTimestamp()
      });

      return { success: true, user: { name: newUser.name, email: newUser.email } };
    } catch (err) {
      console.warn('[Firestore] Error writing to collection, saving to local fallback:', err.message);
    }
  }

  // Fallback to local storage if Firestore is not configured yet
  const localUsers = getLocalUsers();
  if (localUsers.some((u) => u.email === normalizedEmail)) {
    return { success: false, message: 'An account with this email already exists.' };
  }

  saveLocalUser(newUser);
  return { success: true, user: { name: newUser.name, email: newUser.email } };
};

/**
 * Login an existing user
 * Validates email & checks bcrypt password against Firestore
 */
export const loginUser = async ({ email, password }) => {
  const normalizedEmail = email.trim().toLowerCase();

  if (db) {
    try {
      const usersRef = collection(db, 'users');
      const q = query(usersRef, where('email', '==', normalizedEmail));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        return { 
          success: false, 
          message: 'No account found with this email. Please try again, or sign up for a free account.' 
        };
      }

      const docData = querySnapshot.docs[0].data();
      // Compare password with bcrypt hash
      const isMatch = bcrypt.compareSync(password, docData.password);

      if (!isMatch) {
        return { 
          success: false, 
          message: 'Incorrect password. Please try again, or sign up for a free account.' 
        };
      }

      return { 
        success: true, 
        user: { name: docData.name, email: docData.email } 
      };
    } catch (err) {
      console.warn('[Firestore] Error querying users, checking local fallback:', err.message);
    }
  }

  // Fallback check
  const localUsers = getLocalUsers();
  const foundUser = localUsers.find((u) => u.email === normalizedEmail);

  if (!foundUser) {
    return { 
      success: false, 
      message: 'No account found with this email. Please try again, or sign up for a free account.' 
    };
  }

  const isMatch = bcrypt.compareSync(password, foundUser.password);
  if (!isMatch) {
    return { 
      success: false, 
      message: 'Incorrect password. Please try again, or sign up for a free account.' 
    };
  }

  return { 
    success: true, 
    user: { name: foundUser.name, email: foundUser.email } 
  };
};

export { db };
