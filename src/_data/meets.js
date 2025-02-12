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
  dac: {
    name: "Durham Arts Council",
    address: "120 Morris St, Durham, NC 27701",
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

const TYPES = {
  fd: "figure drawing",
  gb: "general/bar",
  pa: "plein air",
}

module.exports = [
  {
    name: "Open Figure",
    url: "https://durhamarts.org/dac-art-classes/",
    city: CITIES.d,
    location: LOCATIONS.dac,
    type: TYPES.fd,
    typeCode: 'fd',
    costPerSession: "$15",
    cadence: "Sundays, 1:15-3:15pm",
    description: "Moderated (no instruction) figure drawing with live nude models. Poses vary in length, typically starting with 10 90-second poses, then various poses ranging from 10-25 minutes in length. Each station includes a sturdy easel and small table or cart. Wet media allowed. Tipping the model is encouraged."
  },
  {
    name: "Arts & Drafts",
    url: "https://www.instagram.com/arts_and_drafts_drm/",
    city: CITIES.d,
    location: LOCATIONS.bsd,
    type: TYPES.gb,
    typeCode: 'gb',
    costPerSession: "$0",
    cadence: "Mondays, 5:00-8:00pm",
    description: "Creative community meetup where people work on their art and/or crafts and chat it up. Beer Study has a range of beverages with some food options from the Boot Room, and BYO food allowed."
  },
  {
    name: "Life Drawing with Tom Stevens",
    url: "https://events.humanitix.com/drop-in-life-drawing-with-tom-stevens",
    city: CITIES.h,
    location: LOCATIONS.ocac,
    type: TYPES.fd,
    typeCode: 'fd',
    costPerSession: "$15",
    cadence: "2nd & 4th Tuesdays, 6:30-8:30pm",
  },
  {
    name: "Open Figure Sessions",
    url: "https://alia-fineart.com/product/open-figure-tuesday-nights/",
    city: CITIES.r,
    location: LOCATIONS.afas,
    type: TYPES.fd,
    typeCode: 'fd',
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
    typeCode: 'fd',
    costPerSession: "$29 (net)",
    cadence: "Tuesdays, 6:30-8:30pm",
    description: "Instructor-led figure drawing course with live nude models. Each station includes a sturdy easel and small table or cart. Cost is $290 for the full 10-week course."
  },
  {
    name: "Crafts & Drafts",
    url: "https://www.meetup.com/drawyall/",
    city: CITIES.d,
    location: LOCATIONS.cad,
    type: TYPES.gb,
    typeCode: 'gb',
    costPerSession: "$0",
    cadence: "Wednesdays, 6:30-8:30pm",
    description: "A good crowd meets every Wednesday where we draw and talk about art. Different mediums and skill levels. All types welcome. Crafts & Drafts is a DIY bar and bottle shop in North Durham with beer, wine, and non-alcoholic beverages. They also offer self-guided craft kits for purchase."
  },
  {
    name: "Drink and Draw",
    url: "https://thecolabraleigh.com/",
    city: CITIES.r,
    location: LOCATIONS.ww,
    type: TYPES.fd,
    typeCode: 'fd',
    costPerSession: "$12",
    cadence: "Wednesdays, 7:30-9:30pm",
    description: "Doors open at 7pm. Modeling is 7:30 to 9:30, Hang out till 11. $12 at the door. Moderated (no instruction) figure drawing with models in various levels and types of dress. Poses vary in length. Each station... Wet media... [NEED MORE DETAILS & CONFIRMATION OF EXISTING]"
  },
  {
    name: "Art En Plein Air - at Historic Oakwood Cemetery",
    url: "https://www.meetup.com/art-en-plein-air-at-historic-oakwood-cemetery/",
    city: CITIES.r,
    location: LOCATIONS.oc,
    type: TYPES.pa,
    typeCode: 'pa',
    costPerSession: "$0",
    cadence: "1st Thursdays, 9:00-11:00am",
    description: "Join Program Coordinator and Artist Brianna McCormick the first Thursday of every month rain or shine to draw in Plein Air at Oakwood Cemetery. This meetup is free and designed for artists of all ages and skill levels. We will meet at the office at 9am and walk together to our location for the day. Bring water, a chair or blanket and your favorite art supplies, be prepared to observe and discuss monumental art, cemetery flora and fauna, in addition to our panoramic vistas of the city of Raleigh."
  },
  {
    name: "Go Figure",
    url: "https://www.meetup.com/drawyall/",
    city: CITIES.d,
    location: LOCATIONS.gb,
    type: TYPES.fd,
    typeCode: 'fd',
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
    typeCode: 'fd',
    costPerSession: "$35",
    cadence: "Every other Friday, 6:00-9:00pm",
    description: "Moderated (no instruction) figure drawing with live nude models. Single long pose with breaks every 25 minutes. Each station includes a sturdy easel and small table or cart. Wet media allowed. Tipping the model is encouraged."
  },
  {
    name: "Raleigh Outdoor Painting Group",
    url: "https://www.meetup.com/raleigh-plain-aire-group/",
    city: CITIES.r,
    location: LOCATIONS.v,
    type: TYPES.pa,
    typeCode: 'pa',
    costPerSession: "$0",
    cadence: "1st and 3rd Saturdays, 10:00am-12:00pm",
    description: "Let's paint en plein air! This is a friendly social group for people who like to paint outdoors. Bring your own art supplies and equipment: coffee, snacks, whatever makes you happy and stay for an hour or three. Don't forget to take out what you bring in. Locations are varied in and near Raleigh (parks, greenways, and more)."
  },
  {
    name: "Figurative Drawing Sessions",
    url: "https://wilsonarts.com/workshops/",
    city: CITIES.w,
    location: LOCATIONS.wac,
    type: TYPES.fd,
    typeCode: 'fd',
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
    typeCode: 'fd',
    costPerSession: "$15",
    cadence: "Saturdays, 1:00-4:00pm",
    description: "Moderated (no instruction) figure drawing with live nude models. Poses vary in length. Easels are provided. Price is $10 plus a $5 model fee."
  },
]
