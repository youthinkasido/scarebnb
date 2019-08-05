json.extract! @spot, :id, :name, :description, :lat, :lng, :bedrooms, :bathrooms, :max_guests, :city, :state, :spot_type, :amenities
json.image_url url_for(@spot.photo)

# <img src="<%= url_for(@post.photo) %>" alt="">