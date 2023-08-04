import React from "react";

interface AvatarProps {
  name: string;
  email: string;
}

export const Avatar: React.FC<AvatarProps> = ({ name, email }) => {
  return (
    <div className="flex gap-2 items-center">
      <div className="w-[40px] h-[40px] rounded-full bg-blue-400 bg-gradient-to-br from-violet-500 to-fuchsia-500" />

      <div className="flex flex-col text-xs">
        <span className="font-bold">{name}</span>
        <span>{email}</span>
      </div>
    </div>
  );
};
