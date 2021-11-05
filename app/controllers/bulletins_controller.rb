class BulletinsController < ApplicationController
    skip_before_action :authorize, only: [:show, :index]

    def index
        render json: Bulletin.all, status: 200
    end

    def show
        render json: Bulletin.find_by[params[:id]], status: 200
    end

    def create
        new_bullet = Bulletin.new(bulletin_params)
        if new_bullet.save
            render json: new_bullet, status: :created
        else
            render json: new_bullet.errors, status: 422
        end
    end

    private
    def bulletin_params
        params.permit(:content :crypto_id :user_id)
    end

end
