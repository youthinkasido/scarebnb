# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create!(first_name: 'guest', last_name: 'guest', email:'guest1@gmail.com', password:'123456')
user2 = User.create!(first_name: 'Ken', last_name: 'Kloostdaddy', email:'thekman@gmail.com', password:'123456')
user3 = User.create!(first_name: 'Bobby', last_name: 'Yeak', email:'sessiontokensessionsessiontoken@gmail.com', password:'123456')
user4 = User.create!(first_name: 'Jamal', last_name: 'Hersheltooth', email:'splip@gmail.com', password:'123456')
user5 = User.create!(first_name: 'Grimple', last_name: 'Slakh', email:'blippitz@gmail.com', password:'123456')
user6 = User.create!(first_name: 'Jnoosh', last_name: 'Shwergle', email:'scrimp@gmail.com', password:'123456')


spot1 = Spot.create!(
  name: "Dirty Storage Unit",
  description: "Who knows what dark suprises await in this dirty storage unit.",
  max_guests: 1,
  room_type: "Private",
  address: "188 Storage Avenue",
  country: "USA",
  state: "GA",
  city: "Atlanta",
  neighborhood: "Peachtree Street",
  bedrooms: 1,
  bathrooms: 0,
  rating: 2,
  spot_type: "Storage unit",
  modified: nil,
  owner_id: user1.id)

  spot2 = Spot.create!(
  name: "Dilapitated Shack",
  description: "This shack has seen better days. Located convieniently next to the city landfill",
  max_guests: 3,
  room_type: "public",
  address: "281 trash road",
  country: "USA",
  state: "GA",
  city: "Atlanta",
  neighborhood: "Peachtree Street",
  bedrooms: 1,
  bathrooms: 0,
  rating: 5,
  spot_type: "Shack",
  modified: nil,
  owner_id: user2.id)

  spot3 = Spot.create!(
  name: "Partially encrusted house",
  description: "Fully furnished home with partially filtered running water.",
  max_guests: 3,
  room_type: "Private",
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
  owner_id: user3.id)



  spot4 = Spot.create!(
  name: "Rusty storage unit",
  description: "Poorly mainted and higly unsafe storage unit, convieniently located just 3 miles from the local police station.",
  max_guests: 1,
  room_type: "Private",
  address: "199 Unsafe Road",
  country: "USA",
  state: "GA",
  city: "Atlanta",
  neighborhood: "Peachtree Street",
  bedrooms: 0,
  bathrooms: 0,
  rating: 7,
  spot_type: "Storage unit",
  modified: nil,
  owner_id: user4.id)

    spot5 = Spot.create!(
  name: "Highway 400 overpass",
  description: "Luxuriously spaced shack, fully fumegated. Crime scene has been closed. ",
  max_guests: 30,
  room_type: "Private",
  address: "199 Crime Road",
  country: "USA",
  state: "GA",
  city: "Atlanta",
  neighborhood: "Peachtree Street",
  bedrooms: 3,
  bathrooms: 2,
  rating: 7,
  spot_type: "Other",
  modified: nil,
  owner_id: user5.id,
)

     spot6 = Spot.create!(
  name: "Crusty Apartment",
  description: "Mild crusty smell year round. Includes supervised access to the family room couch.",
  max_guests: 5,
  room_type: "Private",
  address: "100 Safe Place",
  country: "USA",
  state: "GA",
  city: "Atlanta",
  neighborhood: "Peachtree Street",
  bedrooms: 3,
  bathrooms: 2,
  rating: 7,
  spot_type: "House",
  modified: nil,
  owner_id: user6.id)

  spots = [spot1,spot2,spot3,spot4,spot5,spot6]

spots.each do |spot|
  spot.photo.attach(io:File.open('/Users/arshiakhoshnood/Desktop/finalproject/photos/shacks/shack.jpg'),filename:'shack.jpg')
end
# spot1.photo.attach(io: File.open(“/Users/arshiakhoshnood/Desktop/final project/photos/shacks/shack.jpg”),filename:”shack.jpg”)

#  spot2.photo.attach(io: File.open(“/Users/arshiakhoshnood/Desktop/final project/photos/shacks/shack.jpg”),filename:”shack.jpg”)

#  spot3.photo.attach(io: File.open(“/Users/arshiakhoshnood/Desktop/final project/photos/shacks/shack.jpg”),filename:”shack.jpg”)

#   spot4.photo.attach(io: File.open(“/Users/arshiakhoshnood/Desktop/final project/photos/shacks/shack.jpg”),filename:”shack.jpg”)


#   spot5.photo.attach(io: File.open(“/Users/arshiakhoshnood/Desktop/final project/photos/shacks/shack.jpg”),filename:”shack.jpg”)

#   spot6.photo.attach(io: File.open(“/Users/arshiakhoshnood/Desktop/final project/photos/shacks/shack.jpg”),
#  filename:”shack.jpg”)