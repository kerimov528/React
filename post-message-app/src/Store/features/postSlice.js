import { createAsyncThunk, createSlice, nanoid } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    posts: [],
    loading: false,
    error: null,
};


export const fetchPosts = createAsyncThunk('post/fetchPosts', async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');

        return response.data;

    } catch (error) {
        return error.message;
    }
});

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        addPosts: (state, action) => {
            const newPost = {
                id: nanoid(),
                title: action.payload.title,
                userId: nanoid() + 1,
                content: action.payload.content,
                author: action.payload.author,
                reactions: {
                    thumbsUp: 0,
                    wow: 0,
                    heart: 0,
                    rocket: 0,
                    coffee: 0,
                },
            }
            state.posts.push(newPost);
        },

        reactionAdded: (state, action) => {
            const { postId, reaction } = action.payload;
            const existingPost = state.posts.find((post) => post.id === postId);
            if (existingPost) {
                existingPost.reactions[reaction]++;
            }
        },

        deletePost: (state, action) => {
            state.posts = state.posts.filter((post) => post.id !== action.payload);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.pending, (state) => {
            state.loading = true;
            state.error = null;
        })

        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.loading = false;
            const fetchedPosts = Object.values(action.payload).map((post) => {
                return {
                    id: post.id,
                    userId: post.userId,
                    title: post.title,
                    content: post.body,
                    author: post?.author || 'Anonymous',
                    reactions: {
                        thumbsUp: 0,
                        wow: 0,
                        heart: 0,
                        rocket: 0,
                        coffee: 0,
                    },
                }
            });
            state.posts = state.posts.concat(fetchedPosts);
        })

        builder.addCase(fetchPosts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })
    }
});

export const allPosts = (state) => state.post?.posts;

export const { addPosts, reactionAdded, deletePost } = postSlice.actions;

export default postSlice.reducer;