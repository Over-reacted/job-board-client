import React from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'

import { usePost, useSavePost, useDeletePost } from '../../../hooks'

import { Loader, PostForm } from '../../../components'

export const AdminPost = () => {
  const { postId } = useParams()
  const navigate = useNavigate()

  const postQuery = usePost(postId)
  const [savePost, savePostInfo] = useSavePost()
  const [deletePost, deletePostInfo] = useDeletePost()

  const handleSubmit = async (values) => savePost(values)

  const onDelete = async () => {
    await deletePost(postId)
    navigate('/admin')
  }

  return (
    <>
      {postQuery.isLoading ? (
        <span>
          <Loader /> Loading...
        </span>
      ) : (
        <div>
          <h3>{postQuery.data.title}</h3>
          <p>
            <Link to={`/blog/${postQuery.data.id}`}>View Post</Link>
          </p>
          <PostForm
            initialValues={postQuery.data}
            handleSubmit={handleSubmit}
            submitText={
              savePostInfo.isLoading
                ? 'Saving...'
                : savePostInfo.isError
                ? 'Error!'
                : savePostInfo.isSuccess
                ? 'Saved!'
                : 'Save Post'
            }
          />

          <p>
            <button onClick={onDelete}>
              {deletePostInfo.isLoading
                ? 'Deleting...'
                : deletePostInfo.isError
                ? 'Error!'
                : deletePostInfo.isSuccess
                ? 'Deleted!'
                : 'Delete Post'}
            </button>
          </p>
        </div>
      )}
    </>
  )
}
