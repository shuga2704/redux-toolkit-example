import './App.css'

import { useEffect } from 'react'

import useActions from './hooks/useActions'
import useTypedSelector from './hooks/useTypedSelector'

function App() {
  const actions = useActions()

  const state = useTypedSelector(state => state)

  useEffect(() => {
    actions.getPostsApi({ limit: 10 })
  }, [])

  return (
    <div className="wrapper">
      {state.isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {state.posts.length
            ? state.posts.map(item => (
                <div key={item.id} className="post-wrapper">
                  {item.title}{' '}
                  <span
                    onClick={() => actions.removePost(item.id)}
                    className="delete-button"
                  >
                    Delete
                  </span>
                </div>
              ))
            : 'No posts'}
        </div>
      )}

      <div className="buttons-wrapper">
        <button onClick={() => actions.getPostsApi({ limit: 1 })}>
          Load 1 post
        </button>
        <button onClick={() => actions.getPostsApi({ limit: 5 })}>
          Load 5 posts
        </button>
        <button onClick={() => actions.getPostsApi({ limit: 10 })}>
          Load 10 posts
        </button>
        <button onClick={() => actions.clearStore()}>Clear all posts</button>
      </div>
    </div>
  )
}

export default App
