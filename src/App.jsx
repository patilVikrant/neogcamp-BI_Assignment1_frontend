import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";
import useFetch from "./useFetch";
import Card from "./components/Card";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [eventType, setEventType] = useState("all");
  const { data, loading } = useFetch(
    "https://neogcamp-bi-assignment1-backend.vercel.app/events"
  );
  // console.log(data);

  const clickHandler = () => setSearchQuery("");

  const eventSearchByTitle =
    searchQuery && data.find((event) => event.title === searchQuery);
  // console.log(eventSearchByTitle);
  const eventsSearchByTags =
    searchQuery && data.filter((event) => event.tags.includes(searchQuery));
  // console.log(eventsSearchByTags);

  const filteredData =
    eventType === "all"
      ? data
      : data.filter((event) => event.eventType === eventType);

  return (
    <>
      <Header setSearchQuery={setSearchQuery} />
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
          <section className="d-flex flex-wrap gap-4 my-4">
            {searchQuery
              ? (eventSearchByTitle && (
                  <Card
                    event={eventSearchByTitle}
                    key={eventSearchByTitle._id}
                  />
                )) ||
                (eventsSearchByTags.length > 0 &&
                  eventsSearchByTags.map((event) => (
                    <Card event={event} key={event._id} />
                  ))) || (
                  <>
                    <p>Couldn't find your search</p>
                    <button className="btn btn-primary" onClick={clickHandler}>
                      View all events.
                    </button>
                  </>
                )
              : filteredData
              ? filteredData.map((event) => (
                  <Card event={event} key={event._id} />
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
