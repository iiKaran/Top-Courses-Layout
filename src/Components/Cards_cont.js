import React, { useState } from 'react'
import Card from './Card'
export default function Cards_cont(props) {
  let courses = props.courses;

  function getCourses() {
          let allCourses = [];
          if(props.category==='All'){
          Object.values(courses).forEach(array => {
              array.forEach(courseData => {
                  allCourses.push(courseData);
              })
          })
          return allCourses
        }
        else 
          return courses[props.category];
      }
  const [liked,like] = useState([]);
  return (
    <div className='card-container'>
      {
        getCourses().map((course)=>{
          return <Card key={course.id} course={course} liked={liked} like = {like} />
        })
      }
      {/* {console.log(courses)} */}
    </div>
  )
}
