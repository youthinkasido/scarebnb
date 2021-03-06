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
Booking.destroy_all

user1 = User.create!(first_name: 'guest', last_name: 'guest', email:'guest1@gmail.com', password:'123456')
user2 = User.create!(first_name: 'Ken', last_name: 'Kloostdaddy', email:'thekman@gmail.com', password:'123456')
user3 = User.create!(first_name: 'Bobby', last_name: 'Yeak', email:'sessiontokensessionsessiontoken@gmail.com', password:'123456')
user4 = User.create!(first_name: 'Jamal', last_name: 'Hersheltooth', email:'splip@gmail.com', password:'123456')
user5 = User.create!(first_name: 'Grimple', last_name: 'Slakh', email:'blippitz@gmail.com', password:'123456')
user6 = User.create!(first_name: 'Jnoosh', last_name: 'Shwergle', email:'scrimp@gmail.com', password:'123456')


spot1 = Spot.create!(
  name: "Dilapitated Shack with an unbelievably clogged toilet since 1962.",
  description: "Disorganized shack dating back from the 1900s. Has seen its fair share of wear and 
  tear after the Jim Clark Jalapeno Incident of 92'. This location is rumored to have been haunted and featured on
  the discovery channel 3 times this year alone!",
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
  amenities: ['Soap / ', 'Mouthwash / ', 'AOL access'],
  image_urls: ['./inside1.jpg','./inside12.jpg','./inside3.jpg','./inside4.jpg' ],
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
  amenities: ['Clogged Toilet / ', 'Free Water / ', 'Soap / ', 'Mouthwash / ', 'AOL access'],
  image_urls: ['./inside5.jpg','./inside6.jpg','./inside7.jpg','./inside8.jpg' ],
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
  amenities: ['AOL access '],
  image_urls: ['./inside9.jpg','./inside10.jpg','./inside11.jpg','./inside12.jpg' ],
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
  amenities: ['Deadbolt / ', 'Mouthwash / ', 'Cereal '],
  image_urls: ['./inside13.jpg','./inside14.jpg','./inside15.jpg','./inside16.jpg' ],
  cost_per_night: '$20 per night')

  spot5 = Spot.create!(
  name: "Crime Scene Shack",
  description: "Luxuriously spaced shack, fully fumegated. Crime scene has been closed. ",
  lat: 33.747197,
  lng: -84.381985,
  max_guests: 3,
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
  amenities: ['Convict-free / ', 'HBO / ', 'Toothpase '],
  image_urls: ['./inside17.jpg','./inside18.jpg','./inside19.jpg','./inside20.jpg' ],
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
  amenities: ['Clogged Toilet / ', 'Free Water / ', 'Soap / ', 'Mouthwash '],
  image_urls: ['./inside21.jpg','./inside1.jpg','./inside6.jpg','./inside4.jpg' ],
  cost_per_night: '$1 per night')

  spot7 = Spot.create!(
  name: "Old Country Shack",
  description: "Shack available for short term lease. Prime location in downtown Atlanta. No incidents reported in over 3 months",
  lat: 33.743297,
  lng: -84.383985,
  max_guests: 2,
  room_type: "Public",
  address: "129 Bench Avenue",
  country: "USA",
  state: "FL",
  city: "Miami",
  neighborhood: "Peachtree Street",
  bedrooms: 3,
  bathrooms: 2,
  rating: 7,
  spot_type: "Other",
  modified: nil,
  owner_id: user4.id,
  amenities: ['Clogged Toilet / ', 'Free Water / ', 'Soap / ', 'Mouthwash / ', 'AOL access '],
  image_urls: ['./inside2.jpg','./inside3.jpg','./inside5.jpg','./inside6.jpg' ],
  cost_per_night: '$5 per night')

    spot8 = Spot.create!(
  name: "Apartment",
  description: "Gorgeous low-rise apartment. No vandalism reported in over 6 months",
  lat: 3.743797,
  lng: -4.387985,
  max_guests: 4,
  room_type: "Private",
  address: "129 Apartment Avenue",
  country: "USA",
  state: "NY",
  city: "Newyork City",
  neighborhood: "Peachtree Street",
  bedrooms: 3,
  bathrooms: 2,
  rating: 6,
  spot_type: "Other",
  modified: nil,
  owner_id: user2.id,
  amenities: ['Clogged Toilet / ', 'Free Water / ', 'Soap / ', 'Mouthwash / ', 'AOL access '],
  image_urls: ['./inside9.jpg','./inside10.jpg','./inside8.jpg','./inside7.jpg' ],
  cost_per_night: '$2 per night')

  spot9 = Spot.create!(
  name: "Recently renovated storage closet with 32% less chance of asbestos poisioning",
  description: "Spacious walk in closet with air conditioning.",
  lat: 37.7749,
  lng: 122.4194,
  max_guests: 2,
  room_type: "Private",
  address: "129 Closet Cove",
  country: "USA",
  state: "CA",
  city: "San Francisco",
  neighborhood: "Peachtree Street",
  bedrooms: 0,
  bathrooms: 0,
  rating: 1,
  spot_type: "Other",
  modified: nil,
  owner_id: user2.id,
  amenities: ['Clogged Toilet  ', 'Free Water / ', 'Soap / ', 'Mouthwash / ', 'AOL access '],
  image_urls: ['./inside11.jpg','./inside12.jpg','./inside13.jpg','./inside14.jpg' ],
  cost_per_night: '$13 per night')



  review1 = Review.create!(
  spot_id: spot1.id,
  reviewer_id: user1.id,
  comment: 'Terrible. I will not coming back to this horrible shack! I can\'t believe I even paid to stay!',
  rating: 2,
  )



  review2 = Review.create!(
  spot_id: spot2.id,
  reviewer_id: user1.id,
  comment: 'I had so much fun here!',
  rating: 2

  )

  review3 = Review.create!(
  spot_id: spot3.id,
  reviewer_id: user1.id,
  comment: 'Great time here!',
  rating: 3

  )

   review4 = Review.create!(
  spot_id: spot4.id,
  reviewer_id: user1.id,
  comment: 'I was not having fun at all!',
  rating: 1

  )

   review5 = Review.create!(
  spot_id: spot5.id,
  reviewer_id: user1.id,
  comment: 'I had so much fun here!',
  rating: 5

  )

   review6 = Review.create!(
  spot_id: spot6.id,
  reviewer_id: user1.id,
  comment: 'I had so much fun here!',
  rating: 4

  )

   review7 = Review.create!(
  spot_id: spot7.id,
  reviewer_id: user1.id,
  comment: 'I had so much fun here!',
  rating: 4

  )

   review8 = Review.create!(
  spot_id: spot8.id,
  reviewer_id: user1.id,
  comment: 'I had so much fun here!',
  rating: 3

  )

   review9 = Review.create!(
  spot_id: spot9.id,
  reviewer_id: user1.id,
  comment: 'I had so much fun here!',
  rating: 4

  )

file_paths = ['./public/apartment1.jpg', './public/apartment2.jpg',
             './public/apartment3.jpg',  './public/shack.jpg',  './public/shack2.png',  
             './public/shack3.jpg',  './public/shack4.jpg',  './public/shack5.jpg', 
              './public/shack6.jpg',]

file_names = ['apartment1.jpg', 'apartment2.jpg',
      'apartment3.jpg',  'shack.jpg',  'shack2.png',  
      'shack3.jpg',  'shack4.jpg',  'shack5.jpg', 
      'shack6.jpg',]       


  spots = [spot1,spot2,spot3,spot4,spot5,spot6,spot7,spot8,spot9]

  i = 0
spots.each do |spot|
  spot.photo.attach(io:File.open(file_paths[i]),filename: file_names[i])
  # debugger
  i+=1

end



# spots.each do |spot|
#   spot.photo.attach(io:File.open('./public/shack.jpg'),filename:'shack.jpg')
# end


# spot_type: Storage unit, Shack, House, Other, Apartment, Condo



# spot1.photo.attach(io: File.open(“/Users/arshiakhoshnood/Desktop/final project/photos/shacks/shack.jpg”),filename:”shack.jpg”)
#  spot2.photo.attach(io: File.open(“/Users/arshiakhoshnood/Desktop/final project/photos/shacks/shack.jpg”),filename:”shack.jpg”)
#  spot3.photo.attach(io: File.open(“/Users/arshiakhoshnood/Desktop/final project/photos/shacks/shack.jpg”),filename:”shack.jpg”)
#   spot4.photo.attach(io: File.open(“/Users/arshiakhoshnood/Desktop/final project/photos/shacks/shack.jpg”),filename:”shack.jpg”)
#   spot5.photo.attach(io: File.open(“/Users/arshiakhoshnood/Desktop/final project/photos/shacks/shack.jpg”),filename:”shack.jpg”)
#   spot6.photo.attach(io: File.open(“/Users/arshiakhoshnood/Desktop/final project/photos/shacks/shack.jpg”),
#  filename:”shack.jpg”)






