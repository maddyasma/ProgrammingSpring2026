export function FossilRow({name, colors, image}) {
    return (
    <tr>
        <td>{name}</td>
        <td>{colors.join(", ")}</td>
        <td><img src={image} alt={name} /></td>
    </tr>
    )
}