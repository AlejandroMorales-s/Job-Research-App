import React, {useContext} from 'react'
import { FavoritesContext } from '../../App'
import companyImgDefault from '../../assets/company.svg'



export default function FavsCard() {

    const {favorites,setFavorites} = useContext(FavoritesContext);


    return (
        <>
            {favorites.map(job => {
                return (
                    <div className='fav-card' key={job.id}>
                        <div className="header-fav">
                            <div className="fav-img-container">
                                <img src={ companyImgDefault } alt="" 
                                srcset={job.companyImg} />
                            </div>
                            <h3 className='fav-title'>{`${job.company}   |   ${ job.title }`}</h3>
                        </div>
                        <p className='fav-desc'>{ job.description }</p>
                    </div>
                )
            })}
        </>
    )
}
