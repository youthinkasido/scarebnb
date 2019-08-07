
json.partial! '/api/reviews/review', review: @review
json.average_rating @review.spot.average_rating 

# how are we getting average rating?