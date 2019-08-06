json.review do 
    json.partial! '/api/reviews/review', review: @review
end

json.reviewer do
  json.partial! '/api/users/user', user: @review.reviewer
end

json.average_rating @review.spot.average_rating 
# how are we getting average rating?