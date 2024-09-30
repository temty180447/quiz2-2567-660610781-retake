import Image from "next/image";
import styles from "./page.module.css";
import PostOwnner from "@/components/PostOwnner";
import Comment from "@/components/Comment";
import { comments } from "@/libs/comments";

export default function Home() {
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "ghostwhite" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm bg-white"
      >
        <PostOwnner postImagePath="/profileImages/Temty.jpg" fullName="Phetmongkhon Rungrat" studentID="660610781" postDesc="Quiz ง่ายจังเลยครับ ขอยาก ๆ กว่านี้ได้ไหม #261207" likes={100} />

        {comments.map(comment => {
          return <Comment {...comment} key={comment.username} />
        })}
      </div>
    </div>
  );
}