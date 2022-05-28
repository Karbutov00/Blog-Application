import React from "react";
import "./CreatePost.css";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const CreatePost = ({ isAuth }) => {
    const [title, setTitle] = useState("");
    const [postText, setPostText] = useState("");
    const [newPost, setNewPost] = useState({
        title: "",
        postText: "",
        author: {
            name: auth.currentUser.displayName,
            id: auth.currentUser.uid,
        },
    });

    const onChange = (e) => {
        const { name, value } = e.target;
        setNewPost({ ...newPost, [name]: value });
    };

    console.log(newPost);

    let navigate = useNavigate();
    const postsCollectionRef = collection(db, "posts");
    const createPost = async () => {
        await addDoc(postsCollectionRef, newPost);
        navigate("/");
    };

    useEffect(() => {
        if (!isAuth) {
            navigate("/login");
        }
    }, []);
    return (
        <div className="createPost">
            <div className="createPost-container">
                <h1>Create Post</h1>
                <div className="createPost-input">
                    <label>Title: </label>
                    <input
                        placeholder="Title..."
                        name="title"
                        value={newPost.title}
                        onChange={onChange}
                    />
                </div>
                <div className="createPost-input">
                    <label>Post:</label>
                    <textarea
                        placeholder="Post..."
                        title="post"
                        name="postText"
                        onChange={onChange}
                        value={newPost.postText}
                    />
                </div>
                <div className="createPost-button">
                    <button onClick={createPost}>Post</button>
                </div>
            </div>
        </div>
    );
};

export default CreatePost;
