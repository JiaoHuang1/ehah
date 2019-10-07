@businesses.each do |business|
    json.set! business.id do
        json.extract! business, :id, :name, :price_rating, :description, :address, :phone
        json.photoUrls business.photos.map { |file| url_for(file) }
        json.category_id business.categories.map {|category| category.id } 
    end    
end