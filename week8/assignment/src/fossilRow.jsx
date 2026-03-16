import "./fossilRow.css"
export function FossilRow({name, colors, texture,image, odd}) {
    return (
    <tr className={odd && "odd"}>
        <td>{name}</td>
        <td>{colors.join(", ")}</td>
        <td>{texture}</td>  
        <td><img src={image} alt={name} /></td>
    </tr>
    )
}