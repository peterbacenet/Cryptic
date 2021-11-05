class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create, :index]


    def index
      render json: User.all, status: :ok
   end

   def show
      render json: User.find_by(params[:id]), status: :ok

   end
    def create
        user = User.create(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
     end

  

   def update
      if @current_user.update(user_params)
      render json: @current_user, status: :success
      else
         render json: @current_user.errors, status: 422
      end
   end

     private

     def user_params
        params.permit(:name, :password, :watchlist, :admin,
        :password_confirmation)
     end
end
