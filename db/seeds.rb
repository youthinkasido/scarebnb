# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Review.destroy_all
User.destroy_all 
Spot.destroy_all

user1 = User.create!(first_name: 'guest', last_name: 'guest', email:'guest1@gmail.com', password:'123456')
user2 = User.create!(first_name: 'Ken', last_name: 'Kloostdaddy', email:'thekman@gmail.com', password:'123456')
user3 = User.create!(first_name: 'Bobby', last_name: 'Yeak', email:'sessiontokensessionsessiontoken@gmail.com', password:'123456')
user4 = User.create!(first_name: 'Jamal', last_name: 'Hersheltooth', email:'splip@gmail.com', password:'123456')
user5 = User.create!(first_name: 'Grimple', last_name: 'Slakh', email:'blippitz@gmail.com', password:'123456')
user6 = User.create!(first_name: 'Jnoosh', last_name: 'Shwergle', email:'scrimp@gmail.com', password:'123456')


spot1 = Spot.create!(
  name: "Dilapitated Shack with an unbelievably clogged toilet since 1962.",
  description: "Who knows what dark suprises await in this dirty storage unit.",
  lat: 33.748997,
  lng: -84.387985,
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
  spot_type: "Shack",
  modified: nil,
  owner_id: user1.id,
  amenities: ['Soap  ', 'Mouthwash  ', 'AOL access  '],
  cost_per_night: '$3 per night')

  spot2 = Spot.create!(
  name: "Dilapitated Shack",
  description: "This shack has seen better days. Located convieniently next to the city landfill",
  lat: 33.748497,
  lng: -84.384985,
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
  spot_type: "STURDY SHACK",
  modified: nil,
  owner_id: user2.id,
  amenities: ['Clogged Toile  ', 'Free Water  ', 'Soap  ', 'Mouthwash  ', 'AOL access  '],
  cost_per_night: '$13 per night')

  spot3 = Spot.create!(
  name: "Partially encrusted house",
  description: "Fully furnished home with partially filtered running water.",
  lat: 33.748697,
  lng: -84.386985,
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
  owner_id: user3.id,
  amenities: ['AOL access  '],
  cost_per_night: '$53 per night')



  spot4 = Spot.create!(
  name: "Rusty storage unit",
  description: "Poorly mainted and higly unsafe storage unit, convieniently located just 3 miles from the local police station.",
  lat: 33.747697,
  lng: -84.386985,
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
  owner_id: user4.id,
  amenities: ['Deadbolt  ', 'Mouthwash  ', 'Cereal  '],
  cost_per_night: '$20 per night')

  spot5 = Spot.create!(
  name: "Crime Scene Shack",
  description: "Luxuriously spaced shack, fully fumegated. Crime scene has been closed. ",
  lat: 33.747197,
  lng: -84.381985,
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
  amenities: ['Convict-free  ', 'HBO  ', 'Toothpase  '],
  cost_per_night: '$1 per night')


  spot6 = Spot.create!(
  name: "Crusty Apartment",
  description: "Mild crusty smell year round. Includes supervised access to the family room couch.",
  lat: 33.743697,
  lng: -84.382985,
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
  spot_type: "Apartment",
  modified: nil,
  owner_id: user6.id,
  amenities: ['Clogged Toilet  ', 'Free Water  ', 'Soap', 'Mouthwash  '],
  cost_per_night: '$1 per night')

  spot7 = Spot.create!(
  name: "Nice Bench",
  description: "Bench available for short term lease. Prime location in downtown Atlanta. No incidents reported in over 3 months",
  lat: 33.743297,
  lng: -84.383985,
  max_guests: 2,
  room_type: "Public",
  address: "129 Bench Avenue",
  country: "USA",
  state: "GA",
  city: "Atlanta",
  neighborhood: "Peachtree Street",
  bedrooms: 3,
  bathrooms: 2,
  rating: 7,
  spot_type: "Other",
  modified: nil,
  owner_id: user4.id,
  amenities: ['Clogged Toilet  ', 'Free Water  ', 'Soap  ', 'Mouthwash  ', 'AOL access  '],
  cost_per_night: '$5 per night')

    spot8 = Spot.create!(
  name: "Apartment",
  description: "Gorgeous low-rise apartment. No vandalism reported in over 6 months",
  lat: 33.743797,
  lng: -84.387985,
  max_guests: 4,
  room_type: "Private",
  address: "129 Apartment Avenue",
  country: "USA",
  state: "GA",
  city: "Atlanta",
  neighborhood: "Peachtree Street",
  bedrooms: 3,
  bathrooms: 2,
  rating: 6,
  spot_type: "Other",
  modified: nil,
  owner_id: user2.id,
  amenities: ['Clogged Toilet  ', 'Free Water  ', 'Soap  ', 'Mouthwash  ', 'AOL access  '],
  cost_per_night: '$2 per night')

  spot9 = Spot.create!(
  name: "Recently renovated storage closet with 32% less chance of asbestos poisioning",
  description: "Spacious walk in closet with air conditioning.",
  lat: 33.743747,
  lng: -84.387975,
  max_guests: 1,
  room_type: "Private",
  address: "129 Closet Cove",
  country: "USA",
  state: "GA",
  city: "Atlanta",
  neighborhood: "Peachtree Street",
  bedrooms: 0,
  bathrooms: 0,
  rating: 1,
  spot_type: "Other",
  modified: nil,
  owner_id: user2.id,
  amenities: ['Clogged Toilet  ', 'Free Water  ', 'Soap  ', 'Mouthwash  ', 'AOL access  '],
  cost_per_night: '$13 per night')



  review1 = Review.create!(
  spot_id: spot1.id,
  reviewer_id: user1.id,
  comment: 'Terrible. I will not coming back to this horrible shack! I can\'t believe I even paid to stay!',
  rating: 2,
  )



  review2 = Review.create!(
  spot_id: spot1.id,
  reviewer_id: user3.id,
  comment: 'I had so much fun here!',
  rating: 2

  )

  review3 = Review.create!(
  spot_id: spot1.id,
  reviewer_id: user4.id,
  comment: 'Great time here!',
  rating: 4

  )

   review4 = Review.create!(
  spot_id: spot2.id,
  reviewer_id: user3.id,
  comment: 'I was not having fun at all!',
  rating: 8

  )

   review5 = Review.create!(
  spot_id: spot3.id,
  reviewer_id: user3.id,
  comment: 'I had so much fun here!',
  rating: 8

  )

   review6 = Review.create!(
  spot_id: spot4.id,
  reviewer_id: user3.id,
  comment: 'I had so much fun here!',
  rating: 8

  )

   review7 = Review.create!(
  spot_id: spot5.id,
  reviewer_id: user3.id,
  comment: 'I had so much fun here!',
  rating: 8

  )

   review8 = Review.create!(
  spot_id: spot6.id,
  reviewer_id: user3.id,
  comment: 'I had so much fun here!',
  rating: 8

  )

   review9 = Review.create!(
  spot_id: spot7.id,
  reviewer_id: user3.id,
  comment: 'I had so much fun here!',
  rating: 8

  )




 
  spots = [spot1,spot2,spot3,spot4,spot5,spot6,spot7,spot8,spot9]

spots.each do |spot|
  spot.photo.attach(io:File.open('/Users/arshiakhoshnood/Desktop/finalproject/photos/shacks/shack.jpg'),filename:'shack.jpg')
end


# spot_type: Storage unit, Shack, House, Other, Apartment, Condo



# spot1.photo.attach(io: File.open(“/Users/arshiakhoshnood/Desktop/final project/photos/shacks/shack.jpg”),filename:”shack.jpg”)
#  spot2.photo.attach(io: File.open(“/Users/arshiakhoshnood/Desktop/final project/photos/shacks/shack.jpg”),filename:”shack.jpg”)
#  spot3.photo.attach(io: File.open(“/Users/arshiakhoshnood/Desktop/final project/photos/shacks/shack.jpg”),filename:”shack.jpg”)
#   spot4.photo.attach(io: File.open(“/Users/arshiakhoshnood/Desktop/final project/photos/shacks/shack.jpg”),filename:”shack.jpg”)
#   spot5.photo.attach(io: File.open(“/Users/arshiakhoshnood/Desktop/final project/photos/shacks/shack.jpg”),filename:”shack.jpg”)
#   spot6.photo.attach(io: File.open(“/Users/arshiakhoshnood/Desktop/final project/photos/shacks/shack.jpg”),
#  filename:”shack.jpg”)






