import React, {useState} from "react";
import MyInput from './UI/input/MyInput'
import MyButton from './UI/button/MyButton'

const PostForm = ({create}) =>{
    const [post, setPost] = useState({title:'', body: ''});

    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost);
        setPost({title:'', body: ''});
      }
    
    return (
        <form>
            <MyInput 
                text = "type"
                placeholder="Название поста"
                value = {post.title}
                onChange = {el => setPost({...post, title: el.target.value})}
            />
            <MyInput 
                text = "type" 
                placeholder="Описание поста"
                value = {post.body}
                onChange = {el => setPost({...post, body: el.target.value})}
            />
            <MyButton onClick = {addNewPost} > Создать пост </MyButton>
      </form>
    );
}

export default PostForm;