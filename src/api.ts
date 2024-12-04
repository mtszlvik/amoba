const ENDPOINT = 'https://broad-hall-411f.netpositive.workers.dev'
const TOKEN = 'hkew57zhne345hb3kw-zh65u'

export async function getHighScores() {
  const response = await fetch(`${ENDPOINT}/high-scores`, {
    headers: { Authorization: `Bearer ${TOKEN}` },
  })
  return response.json()
}

export async function postResult(user: string, score: number) {
  const response = await fetch(`${ENDPOINT}/result`, {
    headers: { Authorization: `Bearer ${TOKEN}` },
    method: 'POST',
    body: JSON.stringify({ user, score }),
  })
  return response.json()
}
