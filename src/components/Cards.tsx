import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

function Cards() {
  type IPost = {
    userId: number,
    id: number,
    title: string,
    body: string,
  }
  type IPhoto = {
    albumId: number,
    id: number,
    title: string,
    url: string,
    thumbnailUrl: string,
  }
  let [posts, setPosts] = useState<IPost[]>([])
  let [photos, setPhotos] = useState<IPhoto[]>([])
  let [loader, setLoader] = useState<boolean>(true)
  const getPosts = useCallback(() => {
    const instance = axios.create({
      baseURL: 'http://jsonplaceholder.typicode.com/',
    })
    let instance1 = instance.get('/photos', {
      params: {
        _limit: 4
      }
    }).then(result => setPhotos(result.data))
    let instance2 = instance.get('/posts', {
      params: {
        _limit: 4
      }
    }).then(result => setPosts(result.data))
    Promise.all([instance1, instance2]).then(() => setLoader(false))
  }, [])
  useEffect(() => {
    getPosts()
  }, [getPosts])

  return (
    <div className="cards">
      <h1 className="cards__title">Cards</h1>
      {
        loader ?
          <div id="middle"><div id="inner"></div></div> :
          <ul className="cards__inner">
            {
              posts.map(post =>
                <li key={post.id} className="card">
                  <div className="card__photo">
                    <img
                      src={photos.filter(photo => photo.id === post.id).map(photo => photo.thumbnailUrl)[0]}
                      alt="thumb"
                    />
                  </div>
                  <div className="card__text">
                    <h1 className="card__title">{post.title}</h1>
                    <div className="card__description">{post.body}</div>
                  </div>
                </li>
              )
            }
          </ul>
      }
    </div>
  );
}

export default Cards;