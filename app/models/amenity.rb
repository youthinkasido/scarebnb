class Amenity < ApplicationRecord
    validates :name, :created, presence: true

    has_many :spot_amenities,
    foreign_key: :amenity_id

end