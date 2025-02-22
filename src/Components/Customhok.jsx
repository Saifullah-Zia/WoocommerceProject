import { useEffect } from "react"

function Customhok(title) {
  
    useEffect(()=>{
         document.title=title
       })
  
}

export default Customhok