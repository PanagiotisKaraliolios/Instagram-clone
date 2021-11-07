import Post from "./Post";

const posts = [
  {
    id: "123",
    username: "johndoe",
    userImg: "https://links.papareact.com/3ke",
    img: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    caption: "Destroy that like button!",
  },
  {
    id: "123",
    username: "johndoe",
    userImg: "https://links.papareact.com/3ke",
    img: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    caption: "Destroy that like button!",
  },
];

function Posts() {
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
}

export default Posts;
