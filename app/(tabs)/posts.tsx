import { View } from "react-native";
import { selectAllPosts, getPostsStatus, getPostsError, fetchPosts } from "../store/asyncThunk";
import { reactionAdded, postAdded } from "../store/asyncThunk"; 

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Posts() {
    const dispatch = useDispatch();
    const posts: any = useSelector(selectAllPosts);
    const orderedPosts = posts.slice().sort((a: any, b: any) => b.date.localeCompare(a.date))
    return(
        <View></View>
    )
}