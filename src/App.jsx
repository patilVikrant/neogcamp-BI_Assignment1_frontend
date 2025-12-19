import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";
import useFetch from "./useFetch";
import { Link } from "react-router-dom";

function App() {
  const [eventType, setEventType] = useState("all");
  const { data, loading } = useFetch(
    "https://neogcamp-bi-assignment1-backend.vercel.app/events"
  );
  // console.log(data);

  const filteredData =
    eventType === "all"
      ? data
      : data.filter((event) => event.eventType === eventType);

  return (
    <>
      <Header />
      <main className="py-4 bg-body-tertiary">
        <div className="container">
          <section className="d-flex justify-content-between">
            <h1 className="w-25">Meetup Events</h1>
            <select
              onChange={(e) => setEventType(e.target.value)}
              className="form-control w-25"
            >
              <option value="all">All Events</option>
              <option value="online">Online Events</option>
              <option value="offline">Offline Events</option>
            </select>
          </section>
          <section className="d-flex flex-wrap justify-content-between gap-4 my-4">
            {filteredData
              ? filteredData.map((event) => (
                  <div
                    className="card"
                    key={event._id}
                    style={{ width: "350px", height: "450px" }}
                  >
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

                      <Link
                        to={`/events/${event._id}`}
                        className="btn btn-primary"
                      >
                        View details
                      </Link>
                    </div>
                  </div>
                ))
              : loading && <p>Loading...</p>}
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
