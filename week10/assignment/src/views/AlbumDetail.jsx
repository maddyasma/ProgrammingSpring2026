import { useParams, Link } from "react-router-dom";
import PropTypes from "prop-types";
export function AlbumDetail({data}) {
const { id } = useParams();
const selectedAlbum = data.find((album) => album.id === id);
console.log("selected album", selectedAlbum)

return (
    <>
    <Link to="/">Back to Albums</Link>
    <h1>{selectedAlbum.title}</h1>
    <img src={selectedAlbum.image} alt={selectedAlbum.title} />
    <p>{selectedAlbum.artist}</p>
    <p>{selectedAlbum.genre}</p>
    <p>{selectedAlbum.releaseDate}</p>

    </>
)
};
AlbumDetail.propTypes = {
    data: PropTypes.array
};