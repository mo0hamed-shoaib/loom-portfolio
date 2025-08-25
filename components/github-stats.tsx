"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Skeleton, SkeletonCard } from "@/components/ui/skeleton"
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
      <div className="space-y-1.5 2xl:space-y-2 3xl:space-y-3">
        <Skeleton className="h-4 w-24 mx-auto" />
        <div className="grid grid-cols-2 gap-1 2xl:gap-2 3xl:gap-3">
          {Array.from({ length: 4 }).map((_, i) => (
            <Card key={i} className="p-1 2xl:p-2 3xl:p-3">
              <CardContent className="p-0 space-y-0.5">
                <div className="flex items-center gap-1">
                  <Skeleton className="w-3 h-3 2xl:w-5 2xl:h-5 3xl:w-6 3xl:h-6 rounded" />
                  <Skeleton className="h-3 w-12 2xl:h-4 2xl:w-16 3xl:h-5 3xl:w-20" />
                </div>
                <Skeleton className="h-4 w-8 2xl:h-6 2xl:w-12 3xl:h-8 3xl:w-16" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    )
  }

  if (error || !stats) {
    return (
      <div className="space-y-1.5 2xl:space-y-2 3xl:space-y-3">
        <h3 className="text-xs 2xl:text-base 3xl:text-lg font-semibold">GitHub Activity</h3>
        <div className="text-center py-2 2xl:py-3 3xl:py-4">
          <p className="text-xs 2xl:text-base 3xl:text-lg text-secondary-foreground">
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
    <div className="space-y-1.5 2xl:space-y-2 3xl:space-y-3">
      <h3 className="text-xs 2xl:text-base 3xl:text-lg font-semibold">GitHub Activity</h3>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-2 gap-1 2xl:gap-2 3xl:gap-3">
        <Card className="border-border/50 hover:border-border hover:shadow-sm transition-all duration-200 p-1 2xl:p-2 3xl:p-3 card-hover">
          <CardContent className="p-0 space-y-0.5">
            <div className="flex items-center gap-1">
              <GitCommit className="w-3 h-3 2xl:w-5 2xl:h-5 3xl:w-6 3xl:h-6 text-primary" />
              <span className="text-xs 2xl:text-base 3xl:text-lg font-medium">Commits</span>
            </div>
            <p className="text-sm 2xl:text-xl 3xl:text-2xl font-bold">{formatNumber(stats.totalCommits)}</p>
          </CardContent>
        </Card>

        <Card className="border-border/50 hover:border-border hover:shadow-sm transition-all duration-200 p-1 2xl:p-2 3xl:p-3 card-hover">
          <CardContent className="p-0 space-y-0.5">
            <div className="flex items-center gap-1">
              <GitBranch className="w-3 h-3 2xl:w-5 2xl:h-5 3xl:w-6 3xl:h-6 text-primary" />
              <span className="text-xs 2xl:text-base 3xl:text-lg font-medium">Repos</span>
            </div>
            <p className="text-sm 2xl:text-xl 3xl:text-2xl font-bold">{formatNumber(stats.publicRepos)}</p>
          </CardContent>
        </Card>

        <Card className="border-border/50 hover:border-border hover:shadow-sm transition-all duration-200 p-1 2xl:p-2 3xl:p-3 card-hover">
          <CardContent className="p-0 space-y-0.5">
            <div className="flex items-center gap-1">
              <Flame className="w-3 h-3 2xl:w-5 2xl:h-5 3xl:w-6 3xl:h-6 text-primary" />
              <span className="text-xs 2xl:text-base 3xl:text-lg font-medium">Streak</span>
            </div>
            <p className="text-sm 2xl:text-xl 3xl:text-2xl font-bold">{stats.contributionStreak}</p>
          </CardContent>
        </Card>

        <Card className="border-border/50 hover:border-border hover:shadow-sm transition-all duration-200 p-1 2xl:p-2 3xl:p-3 card-hover">
          <CardContent className="p-0 space-y-0.5">
            <div className="flex items-center gap-1">
              <Calendar className="w-3 h-3 2xl:w-5 2xl:h-5 3xl:w-6 3xl:h-6 text-primary" />
              <span className="text-xs 2xl:text-base 3xl:text-lg font-medium">Total</span>
            </div>
            <p className="text-sm 2xl:text-xl 3xl:text-2xl font-bold">{formatNumber(stats.totalContributions)}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
