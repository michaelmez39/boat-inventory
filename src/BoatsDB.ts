import { Boat, BoatInfo } from "./App"

type BoatDB =  {
  [key in Boat]: BoatInfo
}

const boatInfoDB: BoatDB  = {
  "canoeboat": {
    hin: 'SYL91056D292',
    vessel_use: "Entertainment",
    fuel_type: "Hard Work",
    length_feet: 12,
    length_inches: 6,
    hull_material: "fiberglass",
    vessel_code: "canoe",
  },
  "paperboat": {
    hin: 'SYL91056D292',
    vessel_use: "Entertainment",
    fuel_type: "Goes with the flow",
    length_feet: 12,
    length_inches: 6,
    hull_material: "fiberglass",
    vessel_code: "houseboat",
  },
  "sailboat": {
    hin: 'SYL91056D292',
    description: "Sail the open seas with the power of the air. Find treasure, pirates, colorful fish and more with this wonderful sailboat.",
    vessel_use: "Entertainment",
    fuel_type: "sail",
    length_feet: 12,
    length_inches: 6,
    hull_material: "fiberglass",
    vessel_code: "sailboat",
  },
  "rowboat": {
    hin: 'SYL91056D292',
    vessel_use: "Entertainment",
    fuel_type: "Hard Work",
    length_feet: 12,
    length_inches: 6,
    hull_material: "fiberglass",
    vessel_code: "canoe",
  },
  "motorboat": {
    hin: 'SYL91056D292',
    description: "Fly through the open water with this zippy motorboat.",
    vessel_use: "Entertainment",
    fuel_type: "gas",
    length_feet: 12,
    length_inches: 6,
    vessel_code: "open motorboat",
    hull_material: "fiberglass"
  },
}

export default boatInfoDB;
