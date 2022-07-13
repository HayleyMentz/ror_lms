class Api::UsersController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy]
  
  def index
    render json: User.all
  end

  def show
    render json: @user
  end

  def update
    if @user.update(course_params)
    else
      render json: {errors: @user.errors }, status: :unprocessable_entity
  end

  def destroy
    @user.destroy
    render json: {message: 'User Removed'}
  end

  private
  def user_params
    params.require(:user).permit(:title, :desc, :ctype)
  end

  def set_user
    @user = User.find(params[:id])
end
