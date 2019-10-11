#json.extract! @comment, :id, :rating, :body
#json.business @comment.business, :id, :name

json.comment do
    json.partial! "api/comments/comment", comment: @comment
end

json.business do
    json.partial! "api/businesses/business", business: @business
    json.photoUrls @business.photos.map { |file| url_for(file) }
end