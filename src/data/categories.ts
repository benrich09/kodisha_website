export type SubCategory = { name: string; nameSw: string }

export type Category = {
  id: string
  name: string
  nameSw: string
  image: string
  desc: string
  descSw: string
  subs: SubCategory[]
}

export const categories: Category[] = [
  {
    id: 'real-estate',
    name: 'Real Estate and Spaces',
    nameSw: 'Mali isiyo ya manukato na Nafasi',
    image: '/categories/real-estate.jpg',
    desc: 'Homes, apartments, studios, offices, parking and event spaces for short or long stays.',
    descSw: 'Nyumba, vyumba, studio, ofisi, maeneo ya kuegesha na nafasi za matukio kwa muda mfupi au mrefu.',
    subs: [
      { name: 'Home and Apartments', nameSw: 'Nyumba na Vyumba' },
      { name: 'Studios', nameSw: 'Studio' },
      { name: 'Office and Workspaces', nameSw: 'Ofisi na Nafasi za Kazi' },
      { name: 'Parking spaces', nameSw: 'Maeneo ya kuegesha' },
      { name: 'Event spaces', nameSw: 'Nafasi za matukio' },
    ],
  },
  {
    id: 'vehicles',
    name: 'Vehicle and Transport',
    nameSw: 'Magari na Usafiri',
    image: '/categories/vehicles.jpg',
    desc: 'Personal cars, special hire, motorbikes and scooters by the hour, day or week.',
    descSw: 'Magari ya kibinafsi, kukodi maalum, pikipiki na skuta kwa saa, siku au wiki.',
    subs: [
      { name: 'Personal Cars', nameSw: 'Magari ya Kibinafsi' },
      { name: 'Special Hire', nameSw: 'Kukodi Maalum' },
      { name: 'Motorbikes', nameSw: 'Pikipiki' },
      { name: 'Scooters', nameSw: 'Skuta' },
    ],
  },
  {
    id: 'electronics',
    name: 'Electronics and Gadgets',
    nameSw: 'Vifaa vya Elektroniki na Gadgets',
    image: '/categories/electronics.jpg',
    desc: 'Laptops, phones, cameras, drones and gaming consoles for work or play.',
    descSw: 'Kompyuta, simu, kamera, drone na consoles za michezo kwa kazi au burudani.',
    subs: [
      { name: 'Laptops and computers', nameSw: 'Laptop na kompyuta' },
      { name: 'Phones and tablets', nameSw: 'Simu na tableti' },
      { name: 'Cameras and drones', nameSw: 'Kamera na drone' },
      { name: 'Gaming Consoles', nameSw: 'Consoles za michezo' },
    ],
  },
  {
    id: 'tools',
    name: 'Tools and Equipment',
    nameSw: 'Zana na Vifaa',
    image: '/categories/tools.jpg',
    desc: 'Power tools, generators, welding kits and construction equipment.',
    descSw: 'Zana za umeme, jenereta, seti za kulehemu na vifaa vya ujenzi.',
    subs: [
      { name: 'Power tools (drills, saws, grinders)', nameSw: 'Zana za umeme (drills, misumeno, grinders)' },
      { name: 'Generator and Power equipment', nameSw: 'Jenereta na vifaa vya umeme' },
      { name: 'Welding kits and Heavy Tools', nameSw: 'Seti za kulehemu na zana nzito' },
      { name: 'Construction and Workshop Equipment', nameSw: 'Vifaa vya ujenzi na warsha' },
    ],
  },
  {
    id: 'home',
    name: 'Home and Lifestyle',
    nameSw: 'Nyumbani na Maisha',
    image: '/categories/home-lifestyle.jpg',
    desc: 'Furniture, appliances, kitchen items and home décor.',
    descSw: 'Samani, vifaa vya nyumbani, vyombo vya jikoni na mapambo.',
    subs: [
      { name: 'Furniture', nameSw: 'Samani' },
      { name: 'Appliances (Washing Machines)', nameSw: 'Vifaa (Mashine za kufua)' },
      { name: 'Kitchen items', nameSw: 'Vitu vya jikoni' },
      { name: 'Home décor and soft furnishing', nameSw: 'Mapambo na vitambaa vya nyumbani' },
    ],
  },
  {
    id: 'sports',
    name: 'Sport and Outdoor',
    nameSw: 'Michezo na Nje',
    image: '/categories/sports.jpg',
    desc: 'Fitness gear and outdoor adventure equipment.',
    descSw: 'Vifaa vya mazoezi na vifaa vya matukio ya nje.',
    subs: [
      { name: 'Fitness gear', nameSw: 'Vifaa vya mazoezi' },
      { name: 'Outdoor and Adventure gear', nameSw: 'Vifaa vya nje na adventure' },
    ],
  },
  {
    id: 'fashion',
    name: 'Fashion',
    nameSw: 'Mitindo',
    image: '/categories/fashion.jpg',
    desc: 'Outfits and jewelry for any occasion.',
    descSw: 'Mavazi na vito kwa kila tukio.',
    subs: [
      { name: 'Outfit', nameSw: 'Mavazi' },
      { name: 'Jewelry', nameSw: 'Vito' },
    ],
  },
  {
    id: 'events',
    name: 'Events',
    nameSw: 'Matukio',
    image: '/categories/events.jpg',
    desc: 'Seating, sound, lighting and full event equipment.',
    descSw: 'Viti, sauti, taa na vifaa kamili vya matukio.',
    subs: [
      { name: 'Seating (Chairs, Tables and Sofas)', nameSw: 'Viti (Viti, Meza na Sofas)' },
      { name: 'Sound System', nameSw: 'Mfumo wa sauti' },
      { name: 'Lighting and Effects', nameSw: 'Taa na athari' },
      { name: 'Event Equipment (tents, stages, décor)', nameSw: 'Vifaa vya matukio (mahema, jukwaa, mapambo)' },
    ],
  },
]
