@reviews.each do |review|
    json.set! review.id do 
        json.partial! 'review', review: review
        json.reviewer review.reviewer.first_name
    end
end


#  what do we want to do? 
#     format data to be processed into html to be show to user 
#         after updating our db with the ajax request.