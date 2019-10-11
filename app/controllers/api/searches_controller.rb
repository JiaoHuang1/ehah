class Api::SearchesController < ApplicationController
    def search_by_find
        @businesses = Business.find_by_search_bar(params[:find], params[:loc])
        @categories = Category.joins(:businesses).distinct ##how to only join those categories
        render "api/businesses/index"

    end

    def search_by_category
        @businesses = Business.find_by_category(params[:category])
        @categories = Category.joins(:businesses).distinct ##how to only join those categories
        render "api/businesses/index"
    end
end