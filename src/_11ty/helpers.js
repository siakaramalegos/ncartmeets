// IMPORTANT: If you add a city, add the CSS filtering for that city
const CITIES = {
  br: "Blowing Rock",
  c: "Carrboro",
  ch: "Chapel Hill",
  d: "Durham",
  e: "Elkin",
  h: "Hillsborough",
  m: "Mebane",
  nva: "Nathalie, VA",
  nb: "New Bern",
  r: "Raleigh",
  w: "Wilson",
  wm: "Wilmington",
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
  camw: {
    name: "Cameron Art Museum",
    address: "3201 S 17th St, Wilmington, NC 28412",
  },
  cb: {
    name: "The Carter Building",
    address: "22 Glenwood Ave, Raleigh, NC 27603",
  },
  css: {
    name: "Crabtree Sculpture Studio",
  },
  dac: {
    name: "Durham Arts Council",
    address: "120 Morris St, Durham, NC 27701",
  },
  dp: {
    name: "Duke Park",
    address: "106 W Knox St, Durham, NC 27701",
  },
  erb: {
    name: "Eno River Brewing",
    address: "329 Eno Mountain Rd, Hillsborough, NC 27278",
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
  phq: {
    name: "The Portal HQ",
    address: "3801 Hillsborough St #113, Raleigh, NC 27607",
  },
  se: {
    name: "The Scrap Exchange",
    address: "2050 Chapel Hill Rd, Durham, NC 27707",
  },
  tsg: {
    name: "Thomas Stevens Gallery",
    address: "126 W King St, Hillsborough, NC 27278",
  },
  wac: {
    name: "Wilson Arts Center",
    address: "204 Nash St S, Wilson, NC 27893",
  },
  v: {
    name: "Various"
  },
  z: {
    name: "Zeitgeist Gallery & Bar",
    address: "725 N Mangum St, Durham, NC 27701",
  },
}

// IMPORTANT: If you add a type, add the CSS filtering for that type
const TYPES = {
  fd: "figure drawing",
  fs: "figure sculpture",
  gb: "general/bar",
  pa: "plein air",
  usk: "urban sketching",
}

module.exports = {
  CITIES,
  LOCATIONS,
  TYPES,
}
