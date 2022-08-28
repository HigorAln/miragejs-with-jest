import { useEffect, useState } from 'react';

function App() {
  const [tweets, setTweets] = useState<{ name: string}[]>([])

  useEffect(() => {
    fetch("/api/tweets")
      .then((r) => {
        return r.json()
      })
      .then(r => setTweets(r))
      .catch((err) => console.log(err))
  }, [])

  return (
    <div>
      {tweets.map((tweet) => (
        <h1 key={tweet.name}>{tweet.name}</h1>
      ))}
    </div>
  )
}

export default App
