import { NextResponse } from 'next/server'
import { getGitHubStats } from '@/lib/github'

export async function GET() {
  try {
    const stats = await getGitHubStats()
    
    // Cache the response for 1 hour
    const response = NextResponse.json(stats)
    response.headers.set('Cache-Control', 's-maxage=3600, stale-while-revalidate')
    
    return response
  } catch (error) {
    console.error('Error in GitHub stats API:', error)
    return NextResponse.json(
      { error: 'Failed to fetch GitHub statistics' },
      { status: 500 }
    )
  }
}
