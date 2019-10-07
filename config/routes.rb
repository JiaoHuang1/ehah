Rails.application.routes.draw do
  root "static_pages#root"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    # business start
    resources :businesses, only: [:show, :index]
    resources :categories, only: [:show, :index]
    get 'search/businesses', to: 'searches#search_by_find'
    get 'search/categories', to: 'searches#search_by_category'
    
  end

end
