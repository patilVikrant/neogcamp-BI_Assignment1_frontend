import { Link } from "react-router-dom";

const Card = ({ event }) => {
  return (
    <div className="card" style={{ width: "350px", height: "450px" }}>
      <img
        src={event.imageUrl}
        className="card-img-top w-100 h-50"
        alt="event-image"
      />
      <span className="badge rounded-pill text-bg-light py-2 w-25 position-absolute top-0 start-0 m-2">
        {event.eventType} event
      </span>
      <div className="card-body">
        <h5 className="card-title">{event.title}</h5>
        <p className="card-text">
          {new Date(event.startDateTime).toDateString()}
        </p>
        <p className="card-text">
          {new Date(event.startDateTime).toLocaleTimeString()} -{" "}
          {new Date(event.endDateTime).toLocaleTimeString()}
        </p>

        <Link to={`/events/${event._id}`} className="btn btn-primary">
          View details
        </Link>
      </div>
    </div>
  );
};

export default Card;
