import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAe2d-3YhIr_OKaM4sQbWjY2-LwtpmKf8s",
  authDomain: "jasminea9-7f5c2.firebaseapp.com",
  projectId: "jasminea9-7f5c2",
  storageBucket: "jasminea9-7f5c2.firebasestorage.app",
  messagingSenderId: "214254976578",
  appId: "1:214254976578:web:5bfcd681cfa55f7132b7db",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;
