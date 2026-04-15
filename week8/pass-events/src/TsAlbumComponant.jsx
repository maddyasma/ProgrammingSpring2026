export default function TsAlbumComponent({albumName, deleteFn, focusFn}) {
    return (
<div>
<strong>{albumName}</strong>

<div>
<button onClick={()=>{
    focusFn(albumName);
}}>Focus</button>
<button onClick={()=>{
    deleteFn(albumName);
}}>Delete</button>
</div>
</div>
    
 )   
}