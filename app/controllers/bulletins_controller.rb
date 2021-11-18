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

    def getCrypto
        crypto_bulletin = Bulletin.find(params[:crypto_id])
        render json: crypto_bulletin, status: 200
    end
    def destroy
        selected_bulletin = Bulletin.find(params[:id])
        selected_bulletin.destroy
        render json: selected_bulletin, status: 200
    end
    private

    def bulletin_params
        params.permit(:content, :crypto_id, :user_id, :title)
    end

end
