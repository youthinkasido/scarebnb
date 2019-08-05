class Spot < ApplicationRecord
validates :name, :description, :max_guests, :room_type, :address, :bedrooms, :bathrooms, :rating, :spot_type, presence: true

has_one_attached :photo
has_many :reviews


end


 