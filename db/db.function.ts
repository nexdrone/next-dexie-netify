import { Pilot, db } from "./db.model";

const addPilot = async (pilot: Pilot) => {
  try {
    const date = new Date();
    pilot.registDate = date;
    pilot.updateDate = date;
    await db.pilots.add(pilot);
  } catch (error) {
    console.log(error)
  }
};

const getPilots = async() => {
  try {
    const pilots = await db.pilots.toArray();
    return pilots;
  } catch (error) {
    console.log(error)
  }
}


