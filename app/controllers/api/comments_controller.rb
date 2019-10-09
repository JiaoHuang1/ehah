class Api::SessionsController < ApplicationController
    def create
        @comment = Comment.new(comment_params)
        @comment.user_id = current_user.id
        if @comment.save
            render 'api/businesses/show'
        else
            render json: @comment.errors.full_messages, status: 422
        end       
    end

    def update
        @comment = current_user.comments.find(params[:id])
        if @comment.update(comment_params)
            render 'api/businesses/show'
        else 
            render json: @comment.errors.full_messages, status: 422
        end
    end

    def destroy
        @comment = current_user.comments.find(params[:id])
        @comment.destroy
    end

    private

    def comment_params
        params.require(:comment.permit(:rating, :body, :business_id)
    end
end
