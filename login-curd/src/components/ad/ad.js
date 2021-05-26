


export default function Ad(props) {

    return <div className="ad">
        <img src={props.img} />
        <h5>{props.price}</h5>
        <p>{props.desc}</p>
    </div>

}