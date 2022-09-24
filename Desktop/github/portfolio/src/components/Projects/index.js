import classes from "./projects.module.css"

import { useState } from "react"
import SongData from "../SongData"
import Page1 from "./Page1"
function Projects(props) {

    const [page, setPage] = useState(1);
    const [project, setProject] = useState("ParkU")
    return ( 
        <div ref={props.ref3} className={classes.page}>
            {page === 1 ? 
            <>
            <Page1 handleClick={()=>{setPage(2)}} setProject = {setProject}/>
            </> : <SongData title = {project} handleClick = {() =>setPage(1)}/>}
            <div className={classes.title}>
                Projects
            </div>

        </div>
     );
}

export default Projects;