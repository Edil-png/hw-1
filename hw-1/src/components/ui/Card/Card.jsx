import './Card.css'
const Card = (props) => {
    console.log(props);
    
    return <div className={`${props.className} card`}>{props.children}</div>
}

export default Card