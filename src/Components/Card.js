import React from 'react'
import {FcLike,FcLikePlaceholder} from "react-icons/fc"
import { toast } from 'react-toastify';
export default function Card(props) {
  const course = props.course; 
  let likedCourses = props.liked;
  let setLikedCourses = props.like;

  function likeHandler() {
    //logic
    if(likedCourses.includes(course.id)) {
        //pehle se like hua pada tha
        setLikedCourses( (prev) => prev.filter((cid)=> (cid !== course.id) )  );
        toast.warning("like removed");
    }
    else {
        //pehle se like nahi hai ye course
        //insert karna h ye course liked courses me 
        if(likedCourses.length === 0 ) {
            setLikedCourses([course.id]);
        }
        else {
            //non-empty pehle se
            setLikedCourses((prev) => [...prev, course.id]);
        }
        toast.success("Liked Successfully");
    }
}
  return (
    <div className='card'>
       <img src={`${course.image.url}`} alt="imaege is" />
       <div className="icon" onClick={likeHandler}>
        {
        likedCourses.includes(course.id)?<FcLike size={"1.5rem"}/>:<FcLikePlaceholder  size={"1.5rem"}/>
     }
</div>
       <p className='title'>{course.title}</p>
      <p className='description'>
        {course.description.length<100 ? course.description : course.description.substring(0,150)}
      </p>
    </div>
  )
}
