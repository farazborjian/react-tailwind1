import React from 'react'

const Card = ({ image }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img src={image.webformatURL} className="w-full" alt=""/>
            <div className="px-6 py-4">
                <div className="font-bold text-purple-500 text-xl mb-2">
                    Photo by {image.user}
                </div>
                <ul>
                    <li>
                        <strong>Views:</strong>
                        {image.views}
                    </li>
                    <li>
                        <strong>Downloads:</strong>
                        {image.download}
                    </li>
                    <li>
                        <strong>Likes:</strong>
                        {image.likes}
                    </li>
                </ul>
            </div>
           
        </div>
    )
}

export default Card
