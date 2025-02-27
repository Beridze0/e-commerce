import computer from "../../assets/computer.jpg";
import {Link} from 'react-router-dom'
import PropTypes from "prop-types";

const ItemCard = ({ details }) => {
  return (
    <Link to={`details/${details.name}`} className=" flex flex-col border border-border rounded-xl gap-1 items-centerrounded-xl w-[270px] min-w-[270px] h-[260px] cursor-pointer">
      <div className="max-w-[270px] ">
        <img
          src={computer}
          alt="computer"
          className="w-full h-full object-cover rounded-t-xl"
        />
      </div>
      <div className="p-1">
        <p className="font-bold text-[0.8rem]">
          {details.name}
           <span className="font-normal"> - {details.description.slice(0, 50)}</span>
        </p>
        <p className="text-xs">Price: {details.Price}</p>
      </div>
    </Link>
  );
};


ItemCard.propTypes = {
  details: PropTypes.shape({
    category: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    RAM: PropTypes.string.isRequired,
    CPU: PropTypes.string.isRequired,
    GPU: PropTypes.string.isRequired,
    Storage: PropTypes.string.isRequired,
    Display: PropTypes.string.isRequired,
    Battery: PropTypes.string.isRequired,
    Price: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired
};


export default ItemCard;
