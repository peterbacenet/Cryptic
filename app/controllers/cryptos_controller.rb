class CryptosController < ApplicationController
    skip_before_action :authorize, only: [:create, :index]

    def create
        new_crypto = Crypto.new(crypto_params)
        if new_crypto.save
            render json: new_crypto, status: :created
        else
            render json: new_crypto.errors, status: 422
        end
    end
    
    private

    def crypto_params
        params.permit(:data)
    end
end
