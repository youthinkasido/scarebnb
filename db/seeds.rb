# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# user1 = User.create!(first_name: 'arshia', last_name: 'khoshnood', email:'guest2@gmail.com', password:'123456')
# user2 = User.create!(first_name: 'jim', last_name: 'bob', email:'2@gmail.com', password:'123456')


spot1 = Spot.create!(id: 1,
  name: "Dirty Storage Unit",
  description: "Who knows what dark suprises await in this dirty storage unit.",
  max_guests: 1,
  room_type: "private",
  address: "188 storage avenue",
  country: "USA",
  state: "GA",
  city: "Atlanta",
  neighborhood: "Peachtree Street",
  bedrooms: 1,
  bathrooms: 0,
  rating: 2,
  spot_type: "Storage unit",
  modified: nil,
  owner_id: 1)

  spot1 = Spot.create!(id: 2,
  name: "Dilapitated Shack",
  description: "This shack has seen better days. Located convieniently next to the city landfill",
  max_guests: 3,
  room_type: "public",
  address: "281 trash road",
  country: "USA",
  state: "GA",
  city: "Atlanta",
  neighborhood: "Peachtree Street",
  bedrooms: 2,
  bathrooms: 0,
  rating: 5,
  spot_type: "Shack",
  modified: nil,
  owner_id: 2)

  spot1 = Spot.create!(id: 3,
  name: "Partially encrusted house",
  description: "Fully furnished home with partially filtered running water.",
  max_guests: 3,
  room_type: "private",
  address: "142 house road",
  country: "USA",
  state: "GA",
  city: "Atlanta",
  neighborhood: "Peachtree Street",
  bedrooms: 3,
  bathrooms: 2,
  rating: 7,
  spot_type: "House",
  modified: nil,
  owner_id: 4)
