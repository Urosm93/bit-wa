export class Post {
    constructor(authorId,postId, title, body){
        this.authorId = authorId;
        this.postId = postId;
        this.title = title;
        this.shortBody = (() => `${body.slice(0, 50)} ...`)();
        this.fullBody = body;  
    }
}