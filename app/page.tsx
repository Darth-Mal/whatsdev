import ExploreBtn from "@/components/ExploreBtn";
import EventCard from "@/components/EventCard";

const page = () => {
  return (
    <>
      <section className="flex flex-col h-screen justify-center">
        <h1 className="text-center ">
          Learn about every event <br /> you can't miss
        </h1>
        <p className="text-center mt-5">
          Hackathons, Meetups and Conferences all in one place
        </p>

        <ExploreBtn />

        <div className="mt-20 space-y-7">
          <h3>Featured Events</h3>

          <ul className="events">
            {[1, 2, 3, 4, 5].map((event) => (
              <li key={event}>
                {" "}
                <EventCard /> {event}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};
export default page;
