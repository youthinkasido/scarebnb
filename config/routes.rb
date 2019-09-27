Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

root "static_pages#root"

  namespace :api, defaults: { format: :json } do
  resources :users, only: [ :create, :show] do
  resources :bookings, only: [:create, :index, :destroy]
  end
  resources :reviews, only: [:create, :destroy, :show, :index]
  resources :spots, only: [ :index, :show]
  resource :session, only: [:create, :destroy]

  end
end
