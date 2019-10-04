json.partial! "api/businesses/business", business: @business

json.photoUrls @business.photos.map { |file| url_for(file) }