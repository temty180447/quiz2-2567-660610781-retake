// You can define interfaces for all React components here.
// Do not forget to export properly.

interface PostOwnerProps {
  postImagePath: string;
  fullName: string;
  studentID: string;
  postDesc: string;
  likeNum: number;
}

interface CommentProps {
  userImagePath: string;
  username: string;
  commentText: string;
  likeNum: number;
  replies: ({
    username: string;
    userImagePath: string;
    replyText: string;
    likeNum: number;
  } | undefined)[];
}

interface ReplyProps {
  userImagePath?: string;
  username?: string;
  replyText?: string;
  likeNum?: number;
}

export type { PostOwnerProps, CommentProps, ReplyProps };