json.bookings do 
    json.set! bookings.id do 
        json.extract! bookings, :id, :start_date, :end_date, :num_guests, :spot_id, :booker_id, :owner_id, :price_per_day
    end
end