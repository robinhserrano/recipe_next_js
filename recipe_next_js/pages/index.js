import { Card, CardContent, Grid } from "@mui/material";
import React, { useContext, useState } from "react";
import { firestore, postToJSON } from "../lib/firebase";
import Navbar from "../component/Navbar";
//

export async function getServerSideProps() {
  const postsQuery = firestore.collectionGroup("missingItems");
  // .where("status", "==", "missing");
  // .orderBy('createdAt', 'desc')
  // .limit(LIMIT);
  const posts = (await postsQuery.get()).docs.map(postToJSON);

  // console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
  // console.log(posts);
  // console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
  console.log(posts);
  return {
    props: { posts },
  };
}

export default function Home(props) {
  const [posts, setPosts] = useState(props.posts);

  const missingItems = posts.filter((foodRecipe) => {
    return foodRecipe;
  });

  return (
    <div>
      <div style={{ marginTop: "30px", backgroundColor: "black" }} />
      <div>View Recipes</div>
      <div style={{ marginTop: "2%" }}></div>
      <div style={{ display: "flex" }}>
        {missingItems.map((info) => (
          <Card
            sx={{
              borderStyle: "solid",
              height: "300px",
              width: "300px",
              marginRight: "20px",
            }}
          >
            <CardContent>Dish Name: {info.dish}</CardContent>
            <CardContent>Ingrients: {info.ingredients}</CardContent>
            <CardContent>Duration: {info.duration}</CardContent>
            <CardContent>Serving Size: {info.serving}</CardContent>
            <CardContent>Serving Method: {info.method}</CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
