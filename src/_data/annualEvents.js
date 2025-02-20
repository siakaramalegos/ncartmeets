const { CITIES, LOCATIONS, TYPES } = require("../_11ty/helpers");

module.exports = [
  {
    name: "North Carolina Plein Air Art Festival",
    url: "https://ncpleinair.org/",
    city: CITIES.nb,
    location: LOCATIONS.v,
    type: TYPES.pa,
    typeCode: 'pa',
    costPerSession: "N/A",
    cadence: "May 11-18, 2025",
    description: "Multi-day plein air event open only to invited artists. However, they do hold workshops which are open to the public and a quick paint event. Details TBA. Festival headquarters, including demonstrations, workshops, art displays, and sales, will be based at Historic New Bern's Farmers Market."
  },
  {
    name: "Paint It Orange Plein Air Paint-Out and Wet Paint Sale",
    url: "https://artsorange.org/paintitorange/",
    city: CITIES.h,
    location: LOCATIONS.ocac,
    type: TYPES.pa,
    typeCode: 'pa',
    costPerSession: "$25",
    cadence: "2025 TBA (Last event was September 27 – October 4, 2024)",
    description: "Multi-day plein air event open to artists of all types and ability levels. Work must be painted in Orange County, and a map of some potential spots is provided. You may optionally submit work to the wet paint sale though all work submitted must be for sale. Historically, a high percentage of the pieces sell."
  },
]
