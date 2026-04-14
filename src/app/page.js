"use client"
import Image from "next/image";
import Banner from "./components/Banner/Banner";
import Card from "./components/Card/Card";
import { useEffect, useState } from "react";

export default function Home() {
  const [friends,setFriends]=useState([]);
  useEffect(()=>{
    fetch("/friends.json")
    .then((res)=>res.json())
    .then((data)=>{
      setFriends(data);
      console.log(data);
    })
  },[])
  return (
    <div>
      <div className="bg-[#f8fafc] py-20">
        <div>
          <Banner></Banner>
          <Card></Card>
        </div>
      </div>
    </div>
  );
}
