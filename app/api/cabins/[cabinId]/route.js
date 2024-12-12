import { getBookedDatesByCabinId, getCabin } from "@/app/_lib/data-service";

async function GET(request, { params }) {
  console.log(await request);
  const { cabinId } = await params;
  try {
    const [cabin, bookedDates] = await Promise.all([
      getCabin(cabinId),
      getBookedDatesByCabinId(cabinId),
    ]);

    return Response.json({ cabin, bookedDates });
  } catch {
    return Response.json({ message: "Cabin not found" });
  }
}
// async function POST() {}

export { GET };
