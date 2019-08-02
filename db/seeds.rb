# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# user1 = User.create!(first_name: 'arshia', last_name: 'khoshnood', email:'guest2@gmail.com', password:'123456')
# user2 = User.create!(first_name: 'jim', last_name: 'bob', email:'2@gmail.com', password:'123456')


spot3 = Spot.create!(id: 1,
  name: "Dirty Storage Unit",
  description: "Who knows what dark suprises await in this dusty storage unit",
  max_guests: 1,
  room_type: "private",
  address: "188 bad street",
  country: "USA",
  state: "GA",
  city: "Jonesboro",
  neighborhood: "bucket street",
  bedrooms: 1,
  bathrooms: 0,
  rating: 2,
  spot_type: "Storage unit",
  modified: nil,
  owner_id: 1)