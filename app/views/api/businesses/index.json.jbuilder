# create business key to point to business info

# @businesses.each do |business|
#     json.set! business.id do
#         json.extract! business, :id, :name, :price_rating, :description, :address, :phone, :longitude, :latitude
#         json.photoUrls business.photos.map { |file| url_for(file) }
#         json.category_id business.categories.map {|category| category.id } 
#         # json.category_name Category.joins(:businesses).where('business_id = ?', business.id).map {|record| record.category_name}
#     end    
# end

# create categories key to point to the keys of category which points to info about specified category

json.businesses do 
    @businesses.each do |business|
        json.set! business.id do
            json.partial! "api/businesses/business", business: business
            json.photoUrls business.photos.map { |file| url_for(file) }
        end   
    end
end

json.categories do
    @categories.each do |category|
        json.set! category.id do
            # json.partial! "api/categories/category", category: category
            json.extract! category, :id, :category_name
        end
    end
end