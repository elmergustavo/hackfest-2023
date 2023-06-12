"use client"

import Image from "next/image"
import { SafeUser } from "../types";

interface AvatarProps {
    src: string | null | undefined;
  }

const Avatar: React.FC<AvatarProps> = ({src}) => {
  return (
    <Image className=" p-1 rounded-full ring-4 ring-primary dark:ring-primary"
    height={50}
    width={50}
    alt="avatar"
    src={src || 'https://avatars.githubusercontent.com/u/42653934?v=4'}
    />
  )
}

export default Avatar