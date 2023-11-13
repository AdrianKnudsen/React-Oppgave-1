// Avatar.tsx
import React, { useMemo } from "react";
import { createAvatar } from "@dicebear/core";
import { lorelei } from "@dicebear/collection";
import { BlogPostData } from "../blogpost/BlogPosts";

type AvatarProps = {
  size: number;
  blogPostData: BlogPostData;
};

const Avatar: React.FC<AvatarProps> = ({ size, blogPostData }) => {
  const avatarOptions = useMemo(() => {
    return {
      size,
      seed: `${blogPostData.id}-${blogPostData.title}`,
    };
  }, [size, blogPostData]);

  const avatar = useMemo(() => {
    return createAvatar(lorelei, avatarOptions).toDataUriSync();
  }, [avatarOptions]);

  return <img src={avatar} alt="Avatar" />;
};

export default Avatar;
