class Spot < ApplicationRecord
validates :name, :description, :max_guests, :room_type, :address, :bedrooms, :bathrooms, :rating, :spot_type, presence: true

has_one_attached :photo
# belongs_to :user,
# foreign_key: :owner_id 


# has_many :spot_amenities,
# foreign_key: :spot_id

# has_many :amenities,
# # through :spot_amenities,
# source: :amenities

end


    #     t.string "name", null: false
    # t.string "description", null: false
    # t.integer "max_guests", null: false
    # t.string "room_type", null: false
    # t.string "address", null: false
    # t.string "country", null: false
    # t.string "state", null: false
    # t.string "city", null: false
    # t.string "neighborhood", null: false
    # t.integer "bedrooms", null: false
    # t.integer "bathrooms", null: false
    # t.integer "rating", null: false
    # t.string "spot_type", null: false
    # t.datetime "modified"
    # t.integer "owner_id", null: false