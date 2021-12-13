const MovieBox = (props) => {
    return ( 
        <div style={{backgroundColor:'black', color:'white'}} className="MovieBox">
            <p>{props.title}</p>
            <p>{props.year}</p>
            <p>{props.director}</p>
            <p>{props.rate}</p>
            <p>{props.genre}</p>
        </div>
     );
}
 
export default MovieBox;