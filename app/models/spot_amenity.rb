class SpotAmenity < ApplicationRecord
validates :spot_id, :amenity_id, presence: true

belongs_to :amenity,
foreign_key: amenity_id 

belongs_to :spot,
foreign_key: spot_id 


end