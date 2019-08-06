class Api::SpotsController < ApplicationController

    def index 
        @spots = Spot.all
    end

    def show 
         @spot = Spot.includes(:reviews).find(params[:id]) #finds a spots through active record association and entered params
         @review_ids = 
        @spot.reviews.map do |review|
        review.id
         end

        
    end
end


