class Api::SessionsController < ApplicationController
  # before_action :require_logged_in

  def create 
    @user = User.find_by_credentials(
      params["user"]["email"], 
      params["user"]["password"]
      )
    if @user
      log_in(@user) 
      render 'api/users/show' # sends users show json 
    else
      render json: ["Invalid Credentials"], status: 404
      
    end
  end

  def destroy
    if current_user
      log_out
      render json: {} 
    else
      render status: 404
    end
  end


end