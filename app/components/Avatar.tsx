"use client"

import Image from "next/image"

const Avatar = () => {
  return (
    <Image className=" p-1 rounded-full ring-4 ring-primary dark:ring-primary"
    height={70}
    width={70}
    alt="avatar"
    src={'https://avatars.githubusercontent.com/u/42653934?v=4'}
    />
  )
}

export default Avatar