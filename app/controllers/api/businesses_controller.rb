class Api::BusinessesController < ApplicationController
    def index
        @businesses = Business.all
    end

    def show
        @business = Business.find_by(id: params[:id])
        render :show
    end
end