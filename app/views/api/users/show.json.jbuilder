json.user do 
    json.partial! "api/users/user", user: @user 
end

json.bookings do 
@user.bookings.each do |booking|
    json.set! booking.id do 
        json.extract! booking, :id, :start_date, :end_date, :num_guests, :spot_id, :price_per_day
    end
 end
end



