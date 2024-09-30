// You can define interfaces for all React components here.
// Do not forget to export properly.

interface PostOwnerProps {
    postImagePath: string;
    fullName: string;
    studentID: string;
    postDesc: string;
    likes: number;
  }
  
  interface CommentProps {
    userImagePath: string;
    username: string;
    commentText: string;
    likes: number;
    replies: ({
      username: string;
      userImagePath: string;
      replyText: string;
      likes: number;
    } | undefined)[];
  }
  
  interface ReplyProps {
    userImagePath?: string;
    username?: string;
    replyText?: string;
    likes?: number;
  }
  
  export type { PostOwnerProps, CommentProps, ReplyProps };