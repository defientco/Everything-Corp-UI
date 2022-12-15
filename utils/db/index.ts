import { initializeApp, cert, ServiceAccount } from "firebase-admin/app"
import { getFirestore } from "firebase-admin/firestore"

const params: ServiceAccount = {
  projectId: process.env.SERVICE_ACCOUNT_PROJECT_ID,
  privateKey: JSON.parse(process.env.SERVICE_ACCOUNT_PRIVATE_KEY),
  clientEmail: process.env.SERVICE_ACCOUNT_CLIENT_EMAIL,
}
const firebaseAdmin = initializeApp({
  credential: cert(params),
})

export const db = getFirestore(firebaseAdmin)
