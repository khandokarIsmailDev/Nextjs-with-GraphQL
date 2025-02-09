import { getAllPosts } from "@/queries/blog-data";



export default async function PostList() {
    const posts = await getAllPosts();

    console.log(posts)

    //post are sorted by time; get the latest post
    const latestPost = posts[0];

    //rest of the post handle separetly
    const resPosts = posts.slice(1);


  return (
    <div>
      
    </div>
  )
}
