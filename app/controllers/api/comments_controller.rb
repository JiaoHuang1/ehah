class Api::CommentsController < ApplicationController
    def show
        @comment = Comment.find(params[:id])
        render :show
    end

    def create
        # debugger
        @comment = Comment.new(comment_params)
        @comment.user_id = current_user.id
        @comment.business_id = params[:business_id]
        if @comment.save
            render 'api/comments/show' ###don't need to render anything???because it's gonna direct back to show page
        else
            render json: @comment.errors.full_messages, status: 422
        end       
    end

    def update
        # debugger
        @comment = current_user.comments.find(params[:id])
        if @comment.update(comment_params)
            render 'api/comments/show' ###don't need to render anything???because it's gonna direct back to show page
        else 
            render json: @comment.errors.full_messages, status: 422
        end
    end

    def destroy
        @comment = current_user.comments.find(params[:id])
        if @comment.destroy
            render 'api/comments/show'
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end

    private

    def comment_params
        params.require(:comment).permit(:rating, :body)
    end
end
