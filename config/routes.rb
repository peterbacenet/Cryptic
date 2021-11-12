Rails.application.routes.draw do
  
  resources :watchlists
  resources :cryptos
  resources :users
  resources :bulletins
  resources :comments
  #for login
  # patch "/users/:id", to: "users#update"
  get "/bulletins/crypto/:crypto_id" ,to: "bulletins#getCrypto"

  get "/comments/crypto/:crypto_id" ,to: "comments#getCrypto"

  get "/crypto/:data", to: "cryptos#getCrypto"
  
  post "/login", to: "sessions#create"
  #create new user
  post "/signup", to: "users#create"
  #allows user to stay logged in
  get "/me", to: "users#show"
  #destroys session to log out
  delete "/logout", to: "sessions#destroy"
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
