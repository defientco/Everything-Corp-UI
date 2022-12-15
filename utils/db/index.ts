import { initializeApp, cert, ServiceAccount, getApps } from "firebase-admin/app"
import { getFirestore } from "firebase-admin/firestore"

const params: ServiceAccount = {
  projectId: process.env.SERVICE_ACCOUNT_PROJECT_ID,
  privateKey: process.env.SERVICE_ACCOUNT_PRIVATE_KEY,
  clientEmail: process.env.SERVICE_ACCOUNT_CLIENT_EMAIL,
}
const apps = getApps()
const firebaseAdmin =
  !apps.length &&
  initializeApp({
    credential: cert(params),
  })

export const db = getFirestore(firebaseAdmin)
