Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
namespace :api do
  resources :courses do
    get '/unenrolled', to: 'enrollments#unenrolledUsers'
    get '/enrolled', to: 'enrollments#enrolledUsers'
    get '/courseUsers', to: 'courses#courseUsers'
    
  end
  
  resources :users do
    get '/userCourses', to: 'users#userCourses'
end
  # Defines the root path route ("/")
  # root "articles#index"
end
