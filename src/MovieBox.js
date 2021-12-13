// let img = document.createElement('img')
// img.setAttribute('src', 'https://w7.pngwing.com/pngs/964/685/png-transparent-yellow-five-pointed-star-yellow-star-five-pointed-star.png')
import Stars from "./Stars";
const MovieBox = (props) => {
    return ( 
        <div style={{backgroundColor:'black', color:'white'}} className="MovieBox">
            <p>{props.title}</p>
            <p>{props.year}</p>
            <p>{props.director}</p>
            <p>{props.rate}</p>
            <p>{props.genre}</p>
        </div>
        // {document.querySelector('.MovieBox').appendChild(img)}
     );
}
 
export default MovieBox;