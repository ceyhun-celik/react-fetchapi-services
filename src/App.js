import { useEffect } from "react";
import { PostService, UserService } from "./services";

function App() {
  useEffect(() => {
    console.clear()

    UserService.getUsers().then(response => console.log(response))

    PostService.getPosts().then(response => console.log(response))

    PostService.getPostDetail(2).then(response => console.log(response))

    PostService.newPost({
      userId: 3,
      title: 'test',
      body: 'test'
    })
    .then(response => console.log(response))
  }, [])

  return (
    <>app</>
  );
}

export default App;
