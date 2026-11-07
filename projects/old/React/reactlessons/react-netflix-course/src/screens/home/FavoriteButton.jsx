import {memo, useEffect, useState} from "react";

function FavoriteButton(){
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        console.log("Состояние изменилось!");
    }, [isFavorite]);

    return <button onClick={() => setIsFavorite(!isFavorite)}>
        {isFavorite ? 'Favorite' : 'NotFavorite'}
    </button>
}

export default memo(FavoriteButton)