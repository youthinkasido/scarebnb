
#assigning values inside an object with a key called 'spot'
    json.extract! @spot, :id, :name, :description, :lat, :lng, :bedrooms, :bathrooms, :max_guests, :city, :state, :spot_type, :cost_per_night, :amenities, :image_urls
   
    if @spot.photo.attached?
        json.image_url url_for(@spot.photo)
    end
    # img_url is from active record association
    json.review_ids @review_ids # review_ids is from active record association

    