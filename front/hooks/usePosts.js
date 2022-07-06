import {useMemo} from "react";

export const useSortedPosts = (posts, sort) => {

    const sortedPosts = useMemo(() => {
        if (sort) {
            //Функция sort не возвращает новый отсортиованный массив, поэтому мутируем старый.
            return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
        }
        return posts;
    }, [sort, posts])
}

// Хук - возвращает отсортированный и отфильтрованный список постов
export const usePosts = (posts, sort, query) => {
    const sortedPosts = useSortedPosts(posts, sort);

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(query))
    }, [query, sortedPosts])

    return sortedAndSearchedPosts;
}