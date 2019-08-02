json.extract! @spot, :id, :name, :description, :max_guests
json.image_url url_for(@spot.photo)

# <img src="<%= url_for(@post.photo) %>" alt="">