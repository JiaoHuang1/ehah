class Api::CategoriesController < ApplicationController
    def index
        @categories = Category.all
    end

    def show
        @category = Category.find_by(category_name: params[:id])
        render :show
    end
    
end
