function createPosts() {
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }
        toString() {
            return `Post: ${this.title}\nContent: ${this.content}`;
        }
    }
    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        }
        addComment(comment) {
            this.comments.push(comment);
        }
        toString() {
            if (this.comments == 0) {
                return super.toString() + `\nRating: ${this.likes - this.dislikes}`;
            } else {
                const comments = `Comments:\n${this.comments.map(c => ` * ${c}`).join(`\n`)}`;
                return super.toString() + `\nRating: ${this.likes - this.dislikes}\n` + comments;
            }
        }
    }
    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);
            this.views = views;
        }
        view() {
            this.views++;
            return this;
        }
        toString() {
            return super.toString() + `\nViews: ${this.views}`;
        }
    }

    return {
        Post,
        SocialMediaPost,
        BlogPost,
    }
}

const posts = createPosts();
const blog = new posts.BlogPost('Blog', 'BlogContent', 15);
blog.view().view();
console.log(blog.toString());
const social = new posts.SocialMediaPost('Social', 'SocialContent', 10, 17);
social.addComment('Comment 1');
social.addComment('Comment 2');
console.log(social.toString());