import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

function Cards() {
  type IPost = {
    userId: number,
    id: number,
    title: string,
    body: string,
  }
  let [posts, setPosts] = useState<IPost[]>([])
  const getPosts = useCallback(() => {
    const instance = axios.create({
      baseURL: 'http://jsonplaceholder.typicode.com/',
    })
    instance.get('/posts', {
      params: {
        _limit: 4
      }
    }).then(result => setPosts(result.data))
  }, [])
  useEffect(() => {
    getPosts()
  }, [getPosts])

  return (
    <div className="cards">
      <h1 className="cards__title">Cards</h1>
      <ul className="cards__inner">
        {
          posts.map(post =>
            <li key={post.id} className="card">
              <div className="card__photo"><img src="https://via.placeholder.com/150/c984bf" alt="thumb" /></div>
              <div className="card__text">
                <h1 className="card__title">qui enim et consequuntur quia animi quis voluptate quibusdam</h1>
                <div className="card__description">{post.body}</div>
              </div>
            </li>
          )
        }
      </ul>
    </div>
  );
}

export default Cards;