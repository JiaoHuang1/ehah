class Api::CategoriesController < ApplicationController
    def index
        @categories = Category.all
    end

    def show
        @category = Category.find_by(id: params[:id]) ## may have issue
        render :show
    end
end
