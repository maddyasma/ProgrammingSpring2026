import "./fossilRow.css"
export function FossilRow({name, colors, era, image, odd}) {
    return (
    <tr className={odd && "odd"}>
        <td>{name}</td>
        <td>{colors.join(", ")}</td>
        <td>{era}</td>  
        <td><img src={image} alt={name} /></td>
    </tr>
    )
}
