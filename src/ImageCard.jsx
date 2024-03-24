import React from 'react'
import MyImage from "../public/1.jpeg"
function ImageCard() {
    return (
        <div className='card'>
            <img src={MyImage} alt="" width={200} height={400}
                style={{
                    borderRadius:"20px"
                }}
            />
            
        </div>
    )
}

export default ImageCard
