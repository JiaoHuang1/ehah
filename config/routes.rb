Rails.application.routes.draw do
  root "static_pages#root"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    # business start
    resources :businesses, only: [:show, :index] do
      resources :comments, only: [:create]
    end

    resources :comments, only: [:show, :create, :update, :destroy]

    resources :categories, only: [:show, :index]
    get 'search/businesses', to: 'searches#search_by_find'
    get 'search/categories', to: 'searches#search_by_category'
    
  end

end
