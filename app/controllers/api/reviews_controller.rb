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

  private

  def review_params
    params.require(:review).permit(:spot_id, :reviewer_id, :rating, :comment)
  end
end



