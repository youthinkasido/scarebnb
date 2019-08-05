json.extract! @spot, :id, :name, :description, :bedrooms, :bathrooms, :max_guests, :city, :state, :spot_type
json.image_url url_for(@spot.photo)

# <img src="<%= url_for(@post.photo) %>" alt="">