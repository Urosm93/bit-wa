import { urls } from "./fetchURL";
import { Post } from '../entities/Post';
import { Author } from "../entities/Author";

export const fetchHomePosts = () => {
    return fetch(urls.posts)
        .then(response => response.json())
        .then((posts) => {
            return posts.map((post) => {
                const { userId, id, title, body } = post;
                return new Post(userId, id, title, body);
            })
        })
}

export const fetchSinglePost = (id) => {
    return fetch(`${urls.posts}/${id}`)
        .then(response => response.json())
        .then((postData) => {
            const { userId, id, title, body } = postData;
            return new Post(userId, id, title, body)
        })
}

export const fetchAllAuthors = () => {
    return fetch(urls.users)
        .then(response => response.json())
        .then((authors) => {
            return authors.map((author) => {
                const { id, name, username, email, address, phone, company } = author;
                return new Author(id, name, username, email, address, phone, company);
            })
        })
}

export const fetchAuthor = (id) => {
    return fetch(`${urls.users}/${id}`)
        .then(response => response.json())
        .then((authorData) => {
            const { id, name, username, email, address, phone, company } = authorData;
            return new Author(id, name, username, email, address, phone, company);
        })
}

export const fetchAuthorPosts = (id) => {
    return fetch(`${urls.posts}?userId=${id}`)
        .then(response => response.json())
        .then((authorPosts) => {
            return authorPosts;
        })
}
