import React from "react";
import "./Rating.css";
import StarIcon from "@material-ui/icons/Star";

function Rating({ rating }) {
  const MAX_RATING = 5;
  return (
    <div className="product__rating">
      {Array(MAX_RATING)
        .fill()
        .map((_, i) => {
          if (i < rating) {
            return (
              <StarIcon
                fontSize="small"
                className="product__ratingIcon"
                key={i}
              />
            );
          }
          return (
            <StarIcon
              fontSize="small"
              className="product__ratingIcon--blank"
              key={i}
            />
          );
        })}
      <small>Rating:{rating}</small>
    </div>
  );
}

export default Rating;
