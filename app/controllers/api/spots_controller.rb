class Api::SpotsController < ApplicationController

    def index 
        @spots = Spot.all
    end

    def show 
        # @spot = Spot.includes(:ammenity).find(params[:id])
         @spot = Spot.find(params[:id])
    end

end
