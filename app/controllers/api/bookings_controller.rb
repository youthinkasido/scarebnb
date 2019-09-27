class Api::BookingsController < ApplicationController
    # before_action :require_logged_in


    def create 
        
        @booking = Booking.new(booking_params)
       @booking.start_date = @booking.start_date.to_datetime
       @booking.end_date = @booking.end_date.to_datetime
        
     
       if @booking.save 
        render :show
       else 
        render json: @booking, status: :unprocessable_entity
       end
    end 

    def index 
        @bookings = Booking.where(booker_id: current_user.id)
    end 
    
    private 

    def booking_params
        params.require(:booking).permit(:booker_id, :start_date, :end_date, :num_guests, :spot_id, :owner_id, :price_per_day, :booking_image_url)
    end

    def destroy
  
        @booking = Booking.find(:booker_id)
   
    
    end
end