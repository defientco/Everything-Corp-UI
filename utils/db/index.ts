import { initializeApp, cert, ServiceAccount } from "firebase-admin/app"
import { getFirestore } from "firebase-admin/firestore"
import serviceAccount from "./serviceAccountKey.json"

const firebaseAdmin = initializeApp({
  credential: cert(serviceAccount as ServiceAccount),
})

export const db = getFirestore(firebaseAdmin)
