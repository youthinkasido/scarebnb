json.extract! spot, :id, :name, :description, :lat, :lng, :city, :state, :max_guests, :room_type, :address, :bedrooms, :bathrooms, :rating, :spot_type, :cost_per_night, :amenities
if spot.photo.attached?
json.image_url url_for(spot.photo)
end

