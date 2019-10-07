class Api::SearchesController < ApplicationController
    def search_by_find
        @businesses = Business.find_by_search_bar(params[:find], params[:loc])
        render "api/businesses/index"

    end

    def search_by_category
        @businesses = Business.find_by_category(params[:category])
        render "api/businesses/index"
    end
end