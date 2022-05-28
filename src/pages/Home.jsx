import React from "react";
import { useState, useEffect } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebase-config";
import "./Home.css";

const Home = ({ isAuth }) => {
    const postsCollectionRef = collection(db, "posts");
    const [postLists, setPostLists] = useState([]);
    useEffect(() => {
        const getPosts = async () => {
            const data = await getDocs(postsCollectionRef);
            setPostLists(
                data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
            );
        };
        getPosts();
    }, [postLists]);

    const deletePost = async (id) => {
        const postDoc = doc(db, "posts", id);
        await deleteDoc(postDoc);
    };
    return (
        <div className="home">
            {postLists?.map((post) => {
                return (
                    <div className="post">
                        <div className="post-header">
                            <div className="post-title">
                                <h1>{post.title}</h1>
                            </div>

                            {post.postText}

                            <h4>{`@${post.author?.name}`}</h4>
                            <div className="deletePost">
                                {isAuth &&
                                    post.author.id === auth.currentUser.uid && (
                                        <button
                                            onClick={() => {
                                                deletePost(post.id);
                                            }}
                                        >
                                            {" "}
                                            &#128465;
                                        </button>
                                    )}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Home;
