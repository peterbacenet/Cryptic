Rails.application.routes.draw do
  
  resources :cryptos
  resources :users
  resources :bulletins
  resources :comments
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  #for login
  # patch "/users/:id", to: "users#update"
  post "/login", to: "sessions#create"
  get "/auth", to: "users#show"
  #create new user
  post "/signup", to: "users#create"
  #allows user to stay logged in
  get "/me", to: "users#show"
  delete "/logout", to: "sessions#destroy"
  #to log the user out
  delete "/logout", to: "sessions#destroy"
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
