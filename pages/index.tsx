import type { NextPage } from "next"
import { useState } from "react"
import SeoHead from "../components/SeoHead"
import styles from "../styles/Home.module.css"
import AllowList from "../components/AllowList"
import LaunchPage from "../components/LaunchPage"

const Home: NextPage = () => {
  const [entered, setEntered] = useState(false)

  return (
    <div className={styles.container}>
      <SeoHead title="CRE8ORS" description="CRE8ORS coming soon" image="" />

      {entered ? (
        <main className={styles.main}>
          <h1 className={styles.title}>CRE8ORS</h1>
          <AllowList />
        </main>
      ) : (
        <LaunchPage onClick={setEntered} />
      )}
    </div>
  )
}

export default Home
