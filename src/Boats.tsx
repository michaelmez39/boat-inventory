import { PropsWithChildren } from "react";
import { useBoatStore, Boat } from "./App";

const boats: Boat[] = ["sailboat", "canoeboat", "rowboat", "paperboat", "motorboat"]
  // "motorboat": {
  //   vessel_use: "Entertainment",
  //   fuel_type: "gas",
  //   length_feet: 12,
  //   length_inches: 6,
  //   vessel_code: "open motorboat",
  //   hull_material: "fiberglass"
  // },

const LabeledInfo = ({label, children}: PropsWithChildren<{label: string}>) =>
  <div className="labeled-info">
    <b className="label">{label}</b>: <span className="useful-info">{children}</span>
  </div>  

function BoatCard() {
  const { boat, boatInfo } = useBoatStore();
  return (
    <div className="col-span-10 flex rounded-lg h-96 max-w-screen-md bg-wood-900">
      <img src={boat + ".jpg"} className="h-full w-64 rounded-l-lg"/>
      <div className="w-full">
        <h2 className="text-3xl px-2 pt-2">The {capitalize(boat)}</h2>
        <p className="text-lg px-2 pb-3 pt-1">{boatInfo.description}</p>
        <div className="w-100 p-3 border-t-2 border-berry-100">
          <LabeledInfo label="Hin"><span className="underline decoration-berry-400">{boatInfo.hin}</span></LabeledInfo>
          <LabeledInfo label="Vessel Use"><span className="underline decoration-berry-400">{boatInfo.vessel_use}</span></LabeledInfo>
          <LabeledInfo label="Fuel Type"><span className="underline decoration-violet-400">{capitalize(boatInfo.fuel_type)}</span></LabeledInfo>
          <LabeledInfo label="Length">
            <i>
              {`${boatInfo.length_feet} ${boatInfo.length_inches}`}
            </i>
          </LabeledInfo>
          <LabeledInfo label="Type of Vessel">{capitalize(boatInfo.vessel_code)}</LabeledInfo>
        </div>
      </div>
    </div>
  )
}

const capitalize = (word: string) => word.charAt(0).toUpperCase() + word.slice(1)

function BoatTile({boat}: {boat: Boat}) {
  const {boat: activeBoat, setBoat } = useBoatStore()
  const active = boat === activeBoat ? " bg-berry-700" : ""
  return (
    <div className={"p-2 text-center bg-pauley-700 rounded-lg font-bold" + active} onClick={() => setBoat(boat)}>
      {capitalize(boat)}
    </div>
  )  
}

const BoatPicker = () => 
  <div className="col-span-2 w-24 flex flex-col gap-4">
    {boats.map(boat => <BoatTile boat={boat} />)}
  </div>

function BoatInventory() {
  return ( 
  <div className="w-3/5 m-auto grid grid-cols-12 text-provincial-50">
    <BoatPicker />
    <BoatCard />
  </div>
  )
}

export default BoatInventory
