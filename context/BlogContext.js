import React, { useState } from 'react'

const BlogContext = React.createContext()

export const BlogProvider = ({ children }) => {
  const [refresh, setRefresh] = useState(false)
  const [data, setData] = useState([])

  const states = {
    refresh,
    setRefresh,
    data,
    setData,
  }

  return <BlogContext.Provider value={states}>{children}</BlogContext.Provider>
}

export default BlogContext
