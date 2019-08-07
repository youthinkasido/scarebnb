class Api::ReviewsController < ApplicationController
  before_action :require_logged_in

  def create
    @review = current_user.reviews.new(review_params)
   
    if @review.save
      render :show
    else
      render json: @review, status: :unprocessable_entity
    end
  end

  def show 
    @review = Review.find(params[:id])
  end

  def index 
    @reviews = Review.where(spot_id: params[:spot_id]).includes(:reviewer)
  end

#returns a collection 
#find finds only one, first mataching recod

  private

  def review_params
    params.require(:review).permit(:spot_id, :reviewer_id, :rating, :comment)
  end
end



