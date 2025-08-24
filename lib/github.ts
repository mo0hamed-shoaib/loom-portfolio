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

interface GitHubUser {
  public_repos: number
  login: string
}

interface GitHubContributions {
  data: {
    user: {
      contributionsCollection: {
        totalCommitContributions: number
        contributionCalendar: {
          totalContributions: number
          weeks: Array<{
            contributionDays: Array<{
              date: string
              contributionCount: number
            }>
          }>
        }
      }
    }
  }
}

export async function getGitHubStats(): Promise<GitHubStats> {
  const username = process.env.GITHUB_USERNAME
  const token = process.env.GITHUB_TOKEN

  if (!username || !token) {
    throw new Error('GitHub credentials not configured')
  }

  try {
    // Fetch user data
    const userResponse = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        'Authorization': `token ${token}`,
        'Accept': 'application/vnd.github.v3+json'
      }
    })

    if (!userResponse.ok) {
      throw new Error('Failed to fetch GitHub user data')
    }

    const userData: GitHubUser = await userResponse.json()

    // Fetch contribution data using GraphQL
    const graphqlQuery = `
      query {
        user(login: "${username}") {
          contributionsCollection {
            totalCommitContributions
            contributionCalendar {
              totalContributions
              weeks {
                contributionDays {
                  date
                  contributionCount
                }
              }
            }
          }
        }
      }
    `

    const graphqlResponse = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        'Authorization': `bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query: graphqlQuery })
    })

    if (!graphqlResponse.ok) {
      throw new Error('Failed to fetch GitHub contribution data')
    }

    const contributionData: GitHubContributions = await graphqlResponse.json()

    // Process activity graph data
    const activityGraph: Array<{ date: string; count: number }> = []
    const weeks = contributionData.data.user.contributionsCollection.contributionCalendar.weeks

    weeks.forEach(week => {
      week.contributionDays.forEach(day => {
        activityGraph.push({
          date: day.date,
          count: day.contributionCount
        })
      })
    })

    // Calculate contribution streak (simplified)
    let streak = 0
    const today = new Date()
    for (let i = 0; i < 365; i++) {
      const date = new Date(today)
      date.setDate(date.getDate() - i)
      const dateStr = date.toISOString().split('T')[0]
      const dayData = activityGraph.find(day => day.date === dateStr)
      
      if (dayData && dayData.count > 0) {
        streak++
      } else {
        break
      }
    }

    return {
      totalCommits: contributionData.data.user.contributionsCollection.totalCommitContributions,
      publicRepos: userData.public_repos,
      contributionStreak: streak,
      totalContributions: contributionData.data.user.contributionsCollection.contributionCalendar.totalContributions,
      activityGraph
    }
  } catch (error) {
    console.error('Error fetching GitHub stats:', error)
    // Return fallback data
    return {
      totalCommits: 0,
      publicRepos: 0,
      contributionStreak: 0,
      totalContributions: 0,
      activityGraph: []
    }
  }
}
