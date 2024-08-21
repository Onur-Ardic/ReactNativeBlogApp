import React from 'react'
import { useState } from 'react'

const BlogContext = React.createContext()
export const BlogProvider = ({ children }) => {
  const [app, setApp] = useState()

  return <BlogContext.Provider value={{ app, setApp }}>{children}</BlogContext.Provider>
}

export default BlogContext
