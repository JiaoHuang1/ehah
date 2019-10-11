class Api::BusinessesController < ApplicationController
    def index
        @businesses = Business.all
        @categories = Category.joins(:businesses).distinct
    end

    def show
        @business = Business.find_by(id: params[:id])
        @comments = @business.comments.includes(:user)
        @users = User.where(id: @comments.pluck(:user_id))
        @categories = @business.categories
        render :show
    end
end