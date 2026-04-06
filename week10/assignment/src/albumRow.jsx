import "./albumRow.css"
export function AlbumRow({name, genre, song, image, odd}) {
    return (
    <tr className={odd && "odd"}>
        <td>{name}</td>
        <td>{genre}</td>
        <td>{song}</td>  
        <td><img src={image} alt={name} /></td>
    </tr>
    )
}