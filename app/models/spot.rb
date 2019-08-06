class Spot < ApplicationRecord
validates :name, :description, :max_guests, :room_type, :address, :bedrooms, :bathrooms, :rating, :spot_type, presence: true

    has_one_attached :photo

    has_many :reviews,
    foreign_key: :spot_id,
    class_name: 'Reviews'

#   def self.in_bounds(bounds)
#     self.where("lat < ?", bounds[:northEast][:lat])
#       .where("lat > ?", bounds[:southWest][:lat])
#       .where("lng > ?", bounds[:southWest][:lng])
#       .where("lng < ?", bounds[:northEast][:lng])
#   end

    def average_rating 
        reviews.average(:rating)
    end

end


 