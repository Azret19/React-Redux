import axios from "axios";
import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";


export const fetchPosts = createAsyncThunk(
    "posts/fetchPosts",
    async () => {
        const response = await axios.get("https://dummyjson.com/posts")
        return response.data
    }
)

export const deletePosts = createAsyncThunk(
    "posts/deletePosts",
    async (postId) => {
        const response = await axios.delete(`https://dummyjson.com/posts/${postId}`)
        return response.data
    }
)


export const asyncCreatePosts = createAsyncThunk(
    "posts/asyncCreateTodo",
    async (title, {dispatch}) => {
        const response = await axios.post("https://dummyjson.com/posts/add",
            {
                userId: 1,
                title
            }
        )
        return response.data
    }
)

const postsSlice = createSlice({
    name: "posts",
    initialState: {
        items: [],
        loading: false,
        error: null
    },
    reducers: [],
    extraReducers: builder => {
        builder.addCase(fetchPosts.pending, (state, action) => {
            state.error = null
            state.loading = true
        })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.error = null
                state.loading = false
                state.items = action.payload.posts
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })
            .addCase(deletePosts.fulfilled, (state, action) => {
                state.items = state.items.filter((post)=> post.id !== action.payload.id)
            })
            .addCase(asyncCreatePosts.fulfilled, (state, action) => {
                state.items = [...state.items, action.payload]
            })
    }
})

export const postsReducer = postsSlice.reducer