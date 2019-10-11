json.business do
    json.set! @business.id do
        json.partial! "api/businesses/business", business: @business
        json.photoUrls @business.photos.map { |file| url_for(file) }
    end
end

json.comments do
    @comments.each do |comment|
        json.set! comment.id do
            json.partial! "api/comments/comment", comment: comment
        end
    end
end

json.categories do
    @categories.each do |cat|
        json.set! cat.id do
            json.partial! "api/categories/category", category: cat
        end
    end
end

json.users do 
    @users.each do |user|
        json.set! user.id do
            json.partial! "api/users/user", user: user
        end
    end
end

# json.category_id BusinessCategory.where('business_id = ?', @business.id).map {|record| record.category_id }
# json.category_name Category.joins(:businesses).where('business_id = ?', @business.id).map {|record| record.category_name}
# json.comments @business.comments, :id, :rating, :body, :user_id, :updated_at