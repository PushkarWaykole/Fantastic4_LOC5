import PropTypes from "prop-types";
import { Avatar, Typography } from "@material-tailwind/react";

export function MessageCard({ img, name, message, action }) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-lg bg-black">
      <div className="flex items-center gap-4">
        <Avatar
          src={img}
          alt={name}
          className="shadow-lg shadow-blue-gray-500/25 "
        />
        <div>
          <Typography
            variant="small"
            color="blue-gray"
            className="mb-1 font-semibold text-[#ffffff]"
          >
            {name}
          </Typography>
          <Typography className="text-xs font-normal text-[#fbfcf6]">
            {message}
          </Typography>
        </div>
      </div>
      {action}
    </div>
  );
}

MessageCard.defaultProps = {
  action: null,
};

MessageCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  message: PropTypes.node.isRequired,
  action: PropTypes.node,
};

MessageCard.displayName = "/src/widgets/cards/message-card.jsx";

export default MessageCard;
