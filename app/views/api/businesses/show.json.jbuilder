json.partial! "api/businesses/business", business: @business

json.photoUrls @business.photos.map { |file| url_for(file) }

json.category_id BusinessCategory.where('business_id = ?', @business.id).map {|record| record.category_id }

json.category_name Category.joins(:businesses).where('business_id = ?', @business.id).map {|record| record.category_name}

json.comments @business.comments, :id, :rating, :body, :user_id, :updated_at

json.users do 
    User.all.each do |user|
        json.set! user.id do
            json.extract! user, :id, :first_name, :last_name
        end
    end
end
