import React from 'react';

const StarRating = ({ rating }) => {
    const userRating = Math.round(rating)
    console.log(userRating);
    return (
        <div>
            {userRating === 5 ? <>⭐⭐⭐⭐⭐</>
                : userRating === 4 ? <>⭐⭐⭐⭐</>
                    : userRating === 3 ? <>⭐⭐⭐</>
                        : userRating === 4 ? <>⭐⭐</>
                            : userRating === 1 ? <>⭐</> : ""
            }
        </div>
    );
};

export default StarRating;