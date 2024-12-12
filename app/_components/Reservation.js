import { auth } from "../_lib/auth";
import { getBookedDatesByCabinId, getSettings } from "../_lib/data-service";
import DateSelector from "./DateSelector";
import LoginMessage from "./LoginMessage";
import ReservationForm from "./ReservationForm";

async function Reservation({ cabin }) {
  const [session, settings, bookDates] = await Promise.all([
    auth(),
    getSettings(),
    getBookedDatesByCabinId(cabin?.id),
  ]);

  return (
    <div className="grid grid-cols-2 border my-10  border-primary-800 min-h-[400px]">
      <DateSelector cabin={cabin} settings={settings} bookDates={bookDates} />
      {session?.user ? (
        <ReservationForm cabin={cabin} user={session.user} />
      ) : (
        <LoginMessage />
      )}
    </div>
  );
}

export default Reservation;
