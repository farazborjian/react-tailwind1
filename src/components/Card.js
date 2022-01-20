import React from 'react'

const Card = ({image}) => {

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img src={image.webformatURL} alt="" className="w-full" />
            <div className="px-6 py-4">
                <div className="font-bold text-purple-600 text-xl mb-2">
                    {image.user}
                </div>
                <ul>
                    <li>Views: {image.views}</li>
                    <li>Downloads: {image.downloads}</li>
                    <li>Likes: {image.likes}</li>
                </ul>

            </div>
            
        </div>
    )
}

export default Card
