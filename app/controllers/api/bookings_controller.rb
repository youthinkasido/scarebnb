class Api::BookingsController < ApplicationController
    # before_action :require_logged_in


    def create 
        @booking = Booking.new(booking_params)

       if @booking.save 
        render json: 'Successful booking!' 
       else 
        render json: @booking, status: :unprocessable_entity
       end
    end 

    def index 
        @bookings = Booking.all
    end 

    
    private 

    def booking_params
        params.require(:booking).permit(:start_date, :end_date, :num_guests, :spot_id, :booker_id, :owner_id, :price_per_day)
    end
end