import React from "react"

const PostList = ({ blogPosts }) => {
  console.log(blogPosts)
  return (
    <div id="postListContainer">
      <ul id="posts">
        {blogPosts.map((post, i) => {
          console.log(post)
          return (
            <li className="post" key={i}>
              {/* <h4>{post.frontmatter.title}</h4>
              <h5>{post.frontmatter.author}</h5>
              <p>{post.frontmatter.description}...</p>
              <Link href={`/blog/${post.slug}`}>
                <a>Read more</a>
              </Link> */}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
export default PostList
