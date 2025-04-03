// IMPORTANT: If you add a city, add the CSS filtering for that city
const CITIES = {
  c: "Carrboro",
  ch: "Chapel Hill",
  d: "Durham",
  h: "Hillsborough",
  m: "Mebane",
  nb: "New Bern",
  r: "Raleigh",
  w: "Wilson",
}

const LOCATIONS = {
  ack: {
    name: "Ackland Art Museum",
    address: "101 S Columbia St, Chapel Hill, NC 27599",
  },
  arc: {
    name: "Arcana Durham",
    address: "331 W Main St, Durham, NC 27701",
  },
  afas: {
    name: "Alia Fine Art Studios",
    address: "1401 S Bloodworth St Suite 100, Raleigh, NC 27610",
  },
  bsd: {
    name: "Beer Study Durham",
    address: "2501 University Dr #4, Durham, NC 27707",
  },
  cac: {
    name: "The ArtsCenter (Carrboro)",
    address: "400 Roberson Street, Carrboro NC 27510",
  },
  cad: {
    name: "Crafts & Drafts",
    address: "3117 Guess Rd Ste B, Durham, NC 27705",
  },
  cam: {
    name: "CAM Raleigh",
    address: "409 W Martin St, Raleigh, NC 27603",
  },
  dac: {
    name: "Durham Arts Council",
    address: "120 Morris St, Durham, NC 27701",
  },
  dp: {
    name: "Duke Park",
    address: "106 W Knox St, Durham, NC 27701",
  },
  fruit: {
    name: "The Fruit",
    address: "305 S Dillard St, Durham, NC 27701",
  },
  gb: {
    name: "Golden Belt Artists",
    address: "800 Taylor St, Durham, NC 27701",
  },
  oc: {
    name: "Oakwood Cemetary",
    address: "701 Oakwood Ave, Raleigh, NC 27601",
  },
  ocac: {
    name: "Orange County Arts Commission / Eno Arts Mill Gallery",
    address: "437 Dimmocks Mill Rd #17, Hillsborough, NC 27278",
  },
  wac: {
    name: "Wilson Arts Center",
    address: "204 Nash St S, Wilson, NC 27893",
  },
  ww: {
    name: "The Wicked Witch",
    address: "416 W South St, Raleigh, NC 27601",
  },
  v: {
    name: "Various"
  }
}

// IMPORTANT: If you add a type, add the CSS filtering for that type
const TYPES = {
  fd: "figure drawing",
  gb: "general/bar",
  pa: "plein air",
  usk: "urban sketching",
}

module.exports = {
  CITIES,
  LOCATIONS,
  TYPES,
}
