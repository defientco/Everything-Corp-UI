import Link from "next/link"
import React, { useState, useEffect } from "react"
import getOwnersForCollection from "../../lib/alchemy/getOwnersForCollection"
import getParticipants from "../../lib/getParticipants"
import { Button } from "../../shared/Button"
import LeaderboardRow from "./LeaderboardRow"

const LeaderboardPage = () => {
  const [collectors, setCollectors] = useState([])

  const sortCollectors = (array) =>
    array.sort((a, b) => b.tokenBalances[0].balance - a.tokenBalances[0].balance)

  const findIndex = (array, targetValue) =>
    array.findIndex((item) => item.ownerAddress === targetValue)

  useEffect(() => {
    const fetchTopCollectors = async () => {
      const { ownerAddresses } = await getOwnersForCollection()
      const newCollectors = sortCollectors(ownerAddresses)
      const participants = await getParticipants()
      for (let i = 0; i < participants.length; i += 1) {
        const participant = participants[i]
        const index = findIndex(newCollectors, participant.walletAddress.toLowerCase())
        if (index !== -1) {
          newCollectors[index] = {
            ...newCollectors[index],
            twitterHandle: participant.twitterHandle,
          }
        }
      }
      setCollectors(newCollectors)
    }

    fetchTopCollectors()
  }, [])

  return (
    <div className="w-full max-w-2xl mx-auto font-sans pt-11">
      <div className="flex justify-end mr-3">
        <Link href="/connect">
          <Button>Connect</Button>
        </Link>
      </div>
      <h1 className="text-center text-2xl font-bold text-white mb-6">CRE8ORS Leaderboard</h1>
      <table className="w-full border-collapse rounded-lg overflow-hidden">
        <thead className="bg-[#40baff]">
          <tr>
            <th className="px-4 py-2 text-left border-b">Rank</th>
            <th className="px-4 py-2 text-left border-b">Number of NFTs Owned</th>
            <th className="px-4 py-2 text-left border-b">Address</th>
            <th className="px-4 py-2 text-left border-b">Twitter</th>
          </tr>
        </thead>
        <tbody>
          {collectors.map((collector, index) => (
            <LeaderboardRow
              key={collector.ownerAddress}
              address={collector.ownerAddress}
              numberOwned={collector.tokenBalances[0].balance}
              twitterHandle={collector.twitterHandle}
              rank={index + 1}
            />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default LeaderboardPage
