"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { GitCommit, GitBranch, Flame, Calendar } from "lucide-react"

interface GitHubStats {
  totalCommits: number
  publicRepos: number
  contributionStreak: number
  totalContributions: number
  activityGraph: Array<{
    date: string
    count: number
  }>
}

export function GitHubStats() {
  const [stats, setStats] = useState<GitHubStats | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchStats = async () => {
      try {
        setLoading(true)
        const response = await fetch('/api/github-stats')
        
        if (!response.ok) {
          throw new Error('Failed to fetch GitHub stats')
        }
        
        const data = await response.json()
        setStats(data)
      } catch (err) {
        console.error('Error fetching GitHub stats:', err)
        setError('Failed to load GitHub statistics')
      } finally {
        setLoading(false)
      }
    }

    fetchStats()
  }, [])

  if (loading) {
    return (
      <div className="space-y-3 3xl:space-y-4">
        <h3 className="text-sm 3xl:text-base font-semibold text-center">GitHub Activity</h3>
        <div className="grid grid-cols-2 gap-2 3xl:gap-3">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-16 bg-muted/50 rounded-lg animate-pulse" />
          ))}
        </div>
      </div>
    )
  }

  if (error || !stats) {
    return (
      <div className="space-y-3 3xl:space-y-4">
        <h3 className="text-sm 3xl:text-base font-semibold text-center">GitHub Activity</h3>
        <div className="text-center py-4">
          <p className="text-xs 3xl:text-sm text-muted-foreground">
            {error || 'Unable to load GitHub statistics'}
          </p>
        </div>
      </div>
    )
  }

  const formatNumber = (num: number): string => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k'
    }
    return num.toString()
  }

  return (
    <div className="space-y-2 3xl:space-y-3">
      <h3 className="text-sm 3xl:text-base font-semibold">GitHub Activity</h3>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-2 gap-1.5 3xl:gap-2">
        <Card className="p-1.5 3xl:p-2">
          <CardContent className="p-0 space-y-0.5">
            <div className="flex items-center gap-1">
              <GitCommit className="w-4 h-4 3xl:w-5 3xl:h-5 text-primary" />
              <span className="text-xs 3xl:text-sm font-medium">Commits</span>
            </div>
            <p className="text-lg 3xl:text-xl font-bold">{formatNumber(stats.totalCommits)}</p>
          </CardContent>
        </Card>

        <Card className="p-1.5 3xl:p-2">
          <CardContent className="p-0 space-y-0.5">
            <div className="flex items-center gap-1">
              <GitBranch className="w-4 h-4 3xl:w-5 3xl:h-5 text-primary" />
              <span className="text-xs 3xl:text-sm font-medium">Repos</span>
            </div>
            <p className="text-lg 3xl:text-xl font-bold">{stats.publicRepos}</p>
          </CardContent>
        </Card>

        <Card className="p-1.5 3xl:p-2">
          <CardContent className="p-0 space-y-0.5">
            <div className="flex items-center gap-1">
              <Flame className="w-4 h-4 3xl:w-5 3xl:h-5 text-orange-500" />
              <span className="text-xs 3xl:text-sm font-medium">Streak</span>
            </div>
            <p className="text-lg 3xl:text-xl font-bold">{stats.contributionStreak}</p>
          </CardContent>
        </Card>

        <Card className="p-1.5 3xl:p-2">
          <CardContent className="p-0 space-y-0.5">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4 3xl:w-5 3xl:h-5 text-green-500" />
              <span className="text-xs 3xl:text-sm font-medium">Total</span>
            </div>
            <p className="text-lg 3xl:text-xl font-bold">{formatNumber(stats.totalContributions)}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
