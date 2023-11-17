import './App.css'
import { create } from 'zustand'
import BoatInventory from './Boats'
import boatInfoDB from './BoatsDB'

export type Boat = "canoeboat" | "paperboat" | "rowboat" | "sailboat" | "motorboat"

export type BoatInfo = {
    hin: string,
    description?: string,
    engine_drive_type?: string,
    vessel_use: string,
    fuel_type: string,
    length_feet: number,
    length_inches: number,
    hull_material: string,
    vessel_code: string
}

export type BoatStoreType = {
  boat: Boat,
  boatInfo: BoatInfo,
  setBoat: (boat: Boat) => void
}

export const useBoatStore = create<BoatStoreType>()(set => ({
  boat: "canoeboat",
  boatInfo: boatInfoDB["canoeboat"],
  setBoat: boat => set({
    boat,
    boatInfo: boatInfoDB[boat]
  }),
}))

function App() {
  return (
    <>
      <h1 className="text-4xl text-center text-provincial-100 p-1 mb-4">The Boats</h1>
      <BoatInventory />
    </>
  )
}

export default App
