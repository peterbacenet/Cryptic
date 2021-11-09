class CommentsController < ApplicationController
    def getCrypto
        crypto_bulletin = Comment.find(params[:crypto_id])
        render json: crypto_bulletin, status: 200
    end
end
