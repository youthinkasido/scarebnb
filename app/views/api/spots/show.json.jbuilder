
json.spot do #assigning values inside an object with a key called 'spot'
    json.extract! @spot, :id, :name, :description, :lat, :lng, :bedrooms, :bathrooms, :max_guests, :city, :state, :spot_type, :amenities
   
    if @spot.photo.attached?
        json.image_url url_for(@spot.photo)
    end
    # img_url is from active record association
    json.review_ids @review_ids # review_ids is from active record association
end





json.reviews do  #assigning values inside an object with a key called 'review'
    @spot.reviews.each do |review|
        json.set! review.id do #
            json.extract! review, :id, :spot_id, :reviewer_id, :comment, :rating
        end 
    end
end


