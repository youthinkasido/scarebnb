json.extract! @spot, :id
json.image_url url_for(@spot.photo)

# <img src="<%= url_for(@post.photo) %>" alt="">