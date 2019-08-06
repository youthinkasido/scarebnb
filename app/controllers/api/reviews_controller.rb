class Api::ReviewsController < ApplicationController
  before_action :require_logged_in

  def create
    
    @review = @current_user.reviews.new(review_params)
    debugger
    if @review.save
      render :show
    end
    # else
    #   render json: @review, status: :unprocessable_entity
    # end
  end

  private

  def review_params
    params.require(:review).permit(:spot_id, :reviewer_id, :rating, :comment)
  end
end
