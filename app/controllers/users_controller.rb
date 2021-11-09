class UsersController < ApplicationController
   skip_before_action :authorize, only: [:create, :index]

   def index
      render json: User.all, status: :ok
   end

   def show
      user = User.find_by(id: session[:user_id])
      if user
         render json: user
      else
         render json: { error: "Not authorized" }, status: :unauthorized
      end
   end

   def create
      user = User.create(user_params)
      session[:user_id] = user.id
      render json: user, status: :created
   end

   def update
      current_user = User.find(params[:id])
      if current_user.update(user_params)
      render json: current_user, status: 200
      else
      render json: current_user.errors, status: 422
      end
   end

   private

   def user_params
      params.permit(:name, :id, :password, :admin, :password_confirmation, watchlist: [:watchlist, :T, :c])
   end
end
