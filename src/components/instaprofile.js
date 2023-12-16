'use client'

import { useState, useEffect } from "react";

export default function InstaProfile({ id, data, setId }) {
  let user = data.find(c => c.id === id)

  const close = () => {
    // document.getElementById(r)
    setId(null)
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${user.name}'s account`,
          url: 'http://localhost:3000/insta?profile=' + user.id,
        });
        console.log('Shared successfully');
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      console.log('Web Share API not supported');
    }
  };


  return <div id="profile" className="relative w-[100%] h-full flex flex-row items-center justify-center">
    <div onClick={close} className="absolute w-[50px] h-[50px] rounded-full bg-red-600 right-1 top-1"></div>

    <div className="w-[80%] h-full pt-3 flex flex-col">
      <div className="w-full h-[25%]  flex flex-row justify-center items-center border-b border-gray-600">
        <img src={user?.img} className="h-[85%] w-auto rounded-full mr-[50px]" />
        <div className=" flex flex-col items-center">
          <div className="h-[40px] flex flex-row items-center text-lg">
            <div>{user?.name}</div>
            <div className="ml-3 p-[2px] pl-[10px] pr-[10px] bg-blue-500 rounded-md">Follow</div>
            <div className="ml-3 p-[2px] pl-[10px] pr-[10px] bg-gray-700 rounded-md">Message</div>
            <div onClick={handleShare} className="ml-3 p-[2px] pl-[10px] pr-[10px] bg-gray-700 rounded-md">Share</div>
          </div>
          <div className="h-[20px] flex flex-row mt-5 w-full justify-between">
            <div>{user?.posts} Posts</div>
            <div>{user?.following} Following</div>
            <div>{user?.followers} Folowers</div>
          </div>
          <div className="w-full mt-3">{user?.bio}</div>
        </div>
      </div>
    </div>
  </div>
}