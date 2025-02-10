const CITIES = {
  c: "Carrboro",
  d: "Durham",
  h: "Hillsborough",
  r: "Raleigh",
  w: "Wilson",
}

const LOCATIONS = {
  afas: {
    name: "Alia Fine Art Studios",
    address: "1401 S Bloodworth St Suite 100, Raleigh, NC 27610",
  },
  cac: {
    name: "The ArtsCenter (Carrboro)",
    address: "400 Roberson Street, Carrboro NC 27510",
  },
  dac: {
    name: "Durham Arts Council",
    address: "120 Morris St, Durham, NC 27701",
  },
  gb: {
    name: "Golden Belt Artists",
    address: "800 Taylor St, Durham, NC 27701",
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
}

const TYPES = {
  fd: "figure drawing",
}

module.exports = [
  {
    name: "Open Figure",
    url: "https://durhamarts.org/dac-art-classes/",
    city: CITIES.d,
    location: LOCATIONS.dac,
    type: TYPES.fd,
    costPerSession: "$15",
    cadence: "Sundays, 1:15-3:15pm",
    description: "Moderated (no instruction) figure drawing with live nude models. Poses vary in length, typically starting with 10 90-second poses, then various poses ranging from 10-25 minutes in length. Each station includes a sturdy easel and small table or cart. Wet media allowed. Tipping the model is encouraged."
  },
  {
    name: "Life Drawing with Tom Stevens",
    url: "https://events.humanitix.com/drop-in-life-drawing-with-tom-stevens",
    city: CITIES.h,
    location: LOCATIONS.ocac,
    type: TYPES.fd,
    costPerSession: "$15",
    cadence: "2nd & 4th Tuesdays, 6:30-8:30pm",
  },
  {
    name: "Open Figure Sessions",
    url: "https://alia-fineart.com/product/open-figure-tuesday-nights/",
    city: CITIES.r,
    location: LOCATIONS.afas,
    type: TYPES.fd,
    costPerSession: "$20",
    cadence: "Tuesdays, 7:00-10:00pm",
    description: "These uninstructed sessions provide one nude pose for each 3 hour session, with a new model each night.  You may paint or draw, just bring your own preferred supplies. The studio has plenty of easels, drawing horses and chairs. All are welcome and no prior experience required. Tipping the model is encouraged."
  },
  {
    name: "Figure Drawing (class)",
    url: "https://durhamarts.org/dac-art-classes/",
    city: CITIES.d,
    location: LOCATIONS.dac,
    type: TYPES.fd,
    costPerSession: "$29 (net)",
    cadence: "Tuesdays, 6:30-8:30pm",
    description: "Instructor-led figure drawing course with live nude models. Each station includes a sturdy easel and small table or cart. Cost is $290 for the full 10-week course."
  },
  {
    name: "Drink and Draw",
    url: "https://thecolabraleigh.com/",
    city: CITIES.r,
    location: LOCATIONS.ww,
    type: TYPES.fd,
    costPerSession: "$12",
    cadence: "Wednesdays, 7:30-9:30pm",
    description: "Doors open at 7pm. Modeling is 7:30 to 9:30, Hang out till 11. $12 at the door. Moderated (no instruction) figure drawing with models in various levels and types of dress. Poses vary in length. Each station... Wet media... [NEED MORE DETAILS & CONFIRMATION OF EXISTING]"
  },
  {
    name: "Go Figure",
    url: "https://www.meetup.com/drawyall/",
    city: CITIES.d,
    location: LOCATIONS.gb,
    type: TYPES.fd,
    costPerSession: "$15",
    cadence: "Thursdays, 6:30-10:00pm",
    description: "Moderated (no instruction) figure drawing with live nude models. Poses vary in length. Each station is a chair. Purchase your ticket in advance to reserve your spot. Wet media NOT allowed. Atmosphere is informal and sometimes chatty."
  },
  {
    name: "Long-Pose Figure Drawing",
    url: "https://durhamarts.org/dac-art-classes/",
    city: CITIES.d,
    location: LOCATIONS.dac,
    type: TYPES.fd,
    costPerSession: "$35",
    cadence: "Every other Friday, 6:00-9:00pm",
    description: "Moderated (no instruction) figure drawing with live nude models. Single long pose with breaks every 25 minutes. Each station includes a sturdy easel and small table or cart. Wet media allowed. Tipping the model is encouraged."
  },
  {
    name: "Figurative Drawing Sessions",
    url: "https://wilsonarts.com/workshops/",
    city: CITIES.w,
    location: LOCATIONS.wac,
    type: TYPES.fd,
    costPerSession: "$20",
    cadence: "Generally 3rd Saturdays, 10:30am-1:00pm",
    description: "Moderated (no instruction) figure drawing with live nude models. Poses vary in length. They provide easels, drawing boards, and a variety of mediums, but feel free to bring your own supplies as well."
  },
  {
    name: "Figurative Drawing Sessions",
    url: "https://artscenterlive.org/artschool-classes/",
    city: CITIES.c,
    location: LOCATIONS.cac,
    type: TYPES.fd,
    costPerSession: "$15",
    cadence: "Saturdays, 1:00-4:00pm",
    description: "Moderated (no instruction) figure drawing with live nude models. Poses vary in length. Easels are provided. Price is $10 plus a $5 model fee."
  },
]
