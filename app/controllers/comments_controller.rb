class CommentsController < ApplicationController
    def getCrypto
        crypto_bulletin = Comment.find(params[:crypto_id])
        render json: crypto_bulletin, status: 200
    end

    def create
        new_comment = Comment.create(comment_params)
        if new_comment.save
            render json: new_comment, status: :created
        else
            render json: new_comment.errors, status: 422
        end
    end
    
    def destroy
        selected_comment = Comment.find(params[:id])
        selected_comment.destroy
        render json: selected_comment, status: 200
    end
    private

    def comment_params
        params.permit(:content, :user_id, :crypto_id)
    end
end
