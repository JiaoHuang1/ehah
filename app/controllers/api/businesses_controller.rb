class Api::BusinessesController < ApplicationController
    def index
        @businesses = Business.all
        # @businesses = Business.joins(:categories).where("category_name = ?", "Landscaping")
    end

    def show
        @business = Business.find_by(id: params[:id])
        render :show
    end
end