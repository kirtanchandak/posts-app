import Head from "next/head";
import Bio from "../components/Bio";
import Post from "../components/Post";
import Postform from "../components/Postform";
import styles from "../styles/Home.module.scss";
import useAuth from "../hooks/useAuth";

export default function Home({ posts }) {
  console.log("posts", posts);
  const { user, logIn, logOut } = useAuth();
  console.log("user", user);
  return (
    <div className={styles.container}>
      <Head>
        <title>Kirtan</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {!user && (
        <p>
          <button onClick={logIn}>Log In</button>
        </p>
      )}

      {user && (
        <p>
          <button onClick={logOut}>Log Out</button>
        </p>
      )}

      <main className={styles.main}>
        <Bio
          photo="https://pbs.twimg.com/profile_images/1556553372596989954/glVByCUu_400x400.jpg"
          name="Kirtan Chandak"
          tagline="I share what I do!"
          role="Content and Social Media Lead @GDSC GHRCEM"
        />
        <ul className={styles.posts}>
          <li>
            <Post
              content="I'm working in Figma, for the first time as a designer."
              date="9-12-2022"
            />
          </li>
          <li>
            <Post
              content="I worked on UseContext hook in this project."
              date="9-12-2022"
            />
          </li>
          <li>
            <Post
              content="Also learnt about netlify authentication and implementd login with google"
              date="9-12-2022"
            />
          </li>
        </ul>
      </main>
    </div>
  );
}
