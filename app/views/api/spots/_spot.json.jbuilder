json.extract! spot, :id, :name, :description, :max_guests, :room_type, :address, :bedrooms, :bathrooms, :rating, :spot_type, :cost_per_night
if spot.photo.attached?
json.image_url url_for(spot.photo)
end

#   create_table "spots", force: :cascade do |t|
#     t.string "name", null: false
#     t.string "description", null: false
#     t.integer "max_guests", null: false
#     t.string "room_type", null: false
#     t.string "address", null: false
#     t.string "country", null: false
#     t.string "state", null: false
#     t.string "city", null: false
#     t.string "neighborhood", null: false
#     t.integer "bedrooms", null: false
#     t.integer "bathrooms", null: false
#     t.integer "rating", null: false
#     t.string "spot_type", null: false
#     t.datetime "modified"
#     t.integer "owner_id", null: false
#     t.index ["name"], name: "index_spots_on_name", unique: true
#   end

9 