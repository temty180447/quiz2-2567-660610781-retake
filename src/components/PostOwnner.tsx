"use client";
import { PostOwnerProps } from "@/libs/types";

export default function PostOwnner({ postImagePath, fullName, studentID, postDesc, likeNum }: PostOwnerProps) {
  return (
    <div className="vstack gap-3">
      <div className="d-flex align-items-center gap-3">
        <img
          src={postImagePath}
          width="48"
          height="48"
          className="rounded-circle"
          style={{ objectFit: "cover" }}
        />
        <span className="fw-semibold fs-5">{fullName} {studentID}</span>
      </div>
      <span>{postDesc}</span>

      <div className="d-flex align-items-center gap-1">
        <img src="/like.svg" width={20}></img>
        <span className="text-muted"> {likeNum} คน</span>
      </div>
      <hr className="m-0 border" />
    </div>
  )
}