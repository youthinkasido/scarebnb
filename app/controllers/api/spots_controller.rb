class Api::SpotsController < ApplicationController

    def index 
        @spots = Spot.all
    end

    def show
        @spot = Spot.find(params[:id]) #finds a spots through active record association and entered params
    end
end
