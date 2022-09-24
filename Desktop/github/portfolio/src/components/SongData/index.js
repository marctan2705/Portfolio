import classes from "./SongData.module.css"
import car from "../../Assets/car.png"
import mtan from "../../Assets/mtan.jpeg"
import heart from "../../Assets/heart.png"
import playgreen from "../../Assets/playgreen.png"
import download from "../../Assets/download.png"
import back from "../../Assets/Group 7.png"
function SongData(props) {
    return ( 
        <div className={classes.data}>
            <div className={classes.backrow}>
            <img src = {back} className={classes.back} onClick={props.handleClick}/>
            </div>
            <div className={classes.info}>
                <img className={classes.img} src={car}></img>
                <div className={classes.header}>
                    <div className={classes.subheader}>Project</div>
                    <div className={classes.title}>
                        {props.title}
                    </div>
                    <div className={classes.artist}>
                        <span ><img className={classes.dp} src={mtan}></img></span> &nbsp;  Marcus • 2021 • Frontend Developer
                    </div>
                    
                </div>
            </div>
            <div className={classes.bar}>
                <img className={classes.mainimage} src={playgreen} />
                <img className={classes.ld} src={heart} />
                <img className={classes.ld} src={download} />
            </div>
            <div className={classes.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam egestas, dui nec sagittis commodo, mauris magna faucibus eros, non volutpat nisi mauris in enim. Donec porta semper risus, nec finibus ex. Pellentesque dictum, justo eget maximus rutrum, nisi nunc eleifend odio, at blandit odio odio a risus. Aliquam at augue tortor. Sed at facilisis erat. Suspendisse ipsum velit, dictum quis congue ac, eleifend sit amet lacus. Nulla neque dui, lobortis quis ex a, tempus fermentum justo. Phasellus pharetra metus et tortor convallis, et hendrerit lacus luctus. Etiam maximus ac ante eget pellentesque. Fusce porttitor dui libero, quis tempor metus dictum in.
            </div>
            <div className={classes.bar2}>
                <div className={classes.first}>#</div>
                <div className={classes.subsequent}>Technology</div>
                <div className={classes.subsequent}>Type</div>
            </div>
            <hr className={classes.barhr}></hr>
            <div className={classes.row}>
                <div className={classes.first}>1</div>
                <div className={classes.subsequent}>ReactJS</div>
                <div className={classes.subsequent}>Frontend</div>
            </div>
            <div className={classes.row}>
                <div className={classes.first}>2</div>
                <div className={classes.subsequent}>MongoDB</div>
                <div className={classes.subsequent}>Backend</div>
            </div>
            <div className={classes.row}>
                <div className={classes.first}>3</div>
                <div className={classes.subsequent}>NodeJS</div>
                <div className={classes.subsequent}>Environment</div>
            </div>
            <div className={classes.rowlast}>
                <div className={classes.first}>4</div>
                <div className={classes.subsequent}>Express</div>
                <div className={classes.subsequent}>API Framework</div>
            </div>
        
        </div>
     );
}

export default SongData;