import {CDN_URL} from "../utils/constants"

const RestrauntCard = (props) => {
  const { restaurant } = props;
  const {
    name: restaurantName,
    cuisines: cuisine,
    avgRating: starRating,
    cloudinaryImageId: restaurantImage,
    costForTwo,
    areaName,
  } = restaurant?.info;

  return (
    <div className="m-4 p-4 w-[250px] rounded-lg bg-slate-100 hover:bg-slate-200" >
      <img
        className="rounded-lg h-38 w-42"
        alt="res-logo"
        src={CDN_URL+restaurantImage}
      ></img>
      <h5 className="font-bold py-4">{restaurantName}</h5>
      <h6>{cuisine.join(", ")}</h6>
      <p>{starRating}</p>
      <p>{costForTwo}</p>
      <p>{areaName}</p>
      <p>{restaurant.info.sla.deliveryTime} min to deliver</p>
    </div>
  );
};
 
//Higher Order Component4
// It takes input as RestrauntCard and output will be RestrauntCardOpen

export default RestrauntCard;