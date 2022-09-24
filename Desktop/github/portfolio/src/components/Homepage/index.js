import classes from "./homepage.module.css"
import mtan from "../../Assets/mtan.png"
function Homepage(props) {
    return ( 
        <div ref={props.ref1} className={classes.page}>
            <div className = {classes.pinkbox}>
                <img className={classes.pp} src={mtan}></img>
            </div>

        <div className = {classes.greenbox}>
            <div className = {classes.name}>
                Tan Song Huang, Marcus
            </div>
            <div className = {classes.title}>
                Developer, Product Manager and Consultant
            </div>
            <div className = {classes.description}>
                Over the past few years, I have interned as a developer, product manager, and management consultant for companies ranging from exciting new startups to existing big corporations, successfully developing products for them that are not only creative and effective, but also user-centric and interactive.
            </div>
            <div className = {classes.selection}>
                <a>Read about me</a> or <a>Take a look at my projects and experiences</a>
            </div>
        </div>
        </div>
     );
}

export default Homepage;