import { useEffect, useRef, useState } from "react"
import { formatDuration } from "../utils/formatDuration"


type VideoProps={
id:string
title:string
channel:{
  id:string
  name: string
  profileUrl:string
}
views:number

duration: number
thumbnailUrl: string
videoUrl: string

}
const VIEW_FORMATTER =Intl.NumberFormat(undefined,{notation:"compact"})

export function Videog({id,title,views,channel,duration,thumbnailUrl,videoUrl}:VideoProps){
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null)

    useEffect(() => {

        if (videoRef.current == null) return

        if (isVideoPlaying) {
            videoRef.current.currentTime = 0
            videoRef.current.play()

        } else {
            videoRef.current.pause()
        }

    }, [isVideoPlaying])

return(
  <div className="flex flex-col gap-10" onMouseEnter={()=>setIsVideoPlaying(true)}
  onMouseLeave={()=>setIsVideoPlaying(false)}
  >
<a href={`/watch?v=${id}`} className="relative aspect-video" >
 <a href={videoUrl}> <img src={thumbnailUrl} className="block w-full h-full object-cover rounded-xl gap-4" style={{width:"88vw", borderRadius:"25px 25px 0px 0px"}}/></a>
  <div className="absolute bottom-1 right-1 bg-black text-white text-sm px-0.5 " style={{padding:"0.2rem"}}>
    {formatDuration(duration)}
  </div>
  
  
</a>
<div className="flex gap-2" style={{display:"flex"}}>
  <a href={`/0${channel.id}`} className="flex shrink-0">
    <img className="w-12 h-12 rounded-full" src={channel.profileUrl} style={{width:"4rem", borderRadius:"50%"}}></img>
  </a>
  <div className="flex flex-col">
    <a href={`/watch?v=${id}`} className="font-bold" style={{ textDecoration:"none", fontFamily:"sans-serif", fontWeight:"bold", fontSize:"1.2rem", color:"black"}}>{title}</a>
 <a href={`/0${channel.id}`} style={{fontSize:"small", fontWeight:"bold", color:"grey"}}><br></br> {channel.name}</a>
 <div style={{fontWeight:"bold",color:"grey"}}>
  {VIEW_FORMATTER.format(views)} Views * 2 Years Ago
 
 </div>
  </div>

</div>

<br></br>

  </div>
)

}