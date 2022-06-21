function Charecter(props) {
    let {name,text,pic} = props
    return( <div>
        <h2>{name}</h2>
        <p>{text}</p>
        <img src= {pic} alt=""/>
    </div>)

}
export default Charecter