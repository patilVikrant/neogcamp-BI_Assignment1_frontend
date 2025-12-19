import Header from "../components/Header";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import useFetch from "../useFetch";

const EventDetails = () => {
  const { eventId } = useParams();
  const { data, loading } = useFetch(
    `https://neogcamp-bi-assignment1-backend.vercel.app/events/${eventId}`
  );
  console.log(data);

  return (
    <>
      <Header />
      <main className="py-4 bg-body-tertiary">
        <div className="container">
          {data ? (
            <>
              <h1>{data.title}</h1>
              <p>
                Hosted By: <strong>{data.hostedBy}</strong>
              </p>
              <img src={data.imageUrl} className="w-75" alt="event-poster" />
              <h3>Details</h3>
              <p>{data.description}</p>
              <h3>When</h3>
              <p>
                {new Date(data.startDateTime).toDateString()} at{" "}
                {new Date(data.startDateTime).toLocaleTimeString()} to{" "}
                {new Date(data.endDateTime).toDateString()} at{" "}
                {new Date(data.endDateTime).toLocaleTimeString()}
              </p>
              <h3>{data.location ? "Location" : "Meeting Link"}</h3>
              <p>{data.location || data.meetingLink}</p>
              <p>Price: {data.price === 0 ? "Free" : `INR ${data.price}`}</p>
              <h3>Additional Information</h3>
              <p>
                <strong>Dress Code: </strong>
                {data.dressCode}
              </p>
              <p>
                <strong>Age Restrictions: </strong>
                {data.ageRestrictions}
              </p>
              <h3>Speakers: ({data.speakers.length})</h3>
              <div className="d-flex gap-2">
                {data.speakers.map((speaker) => (
                  <div className="card" key={speaker._id}>
                    <div className="card-body text-center">
                      <img
                        src={speaker.avatarUrl}
                        alt="speaker-image"
                        className="rounded-circle"
                      />
                      <h5>{speaker.name}</h5>
                      <p>{speaker.designation}</p>
                    </div>
                  </div>
                ))}
              </div>
              <h3>Event tags</h3>
              <div className="d-flex gap-2">
                {data.tags.map((tag, index) => (
                  <span className="text-bg-primary p-2 rounded-2" key={index}>
                    {tag}
                  </span>
                ))}
              </div>
            </>
          ) : (
            loading && <p>Loading...</p>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default EventDetails;
