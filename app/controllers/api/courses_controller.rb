class Api::CoursesController < ApplicationController
  before_action :set_course, only: [:show, :update, :destroy,]
  
  def index
    render json: Course.all
  end

  def show
    render json: @course
  end

  def create
    @course = Course.new(course_params)
    if @course.save
      render json: @course
    else
      render json: {errors: @course.errors }, status: :unprocessable_entity

  end

  def update
    if @course.update(course_params)
      render json: {errors: @course.errors }, status: :unprocessable_entity
  end

  def destroy
    @course.destroy
    render json: {message: 'Course Removed'}
  end

  def courseUsers
    @course = Course.find(params[:course_id])
    render json: @course.users
  end
  private
  def course_params
    params.require(:course).permit(:title, :desc, :ctype)
  end

  def set_course
    @course = Course.find(params[:id])
end
