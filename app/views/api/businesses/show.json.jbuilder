json.partial! "api/businesses/business", business: @business

json.photoUrls @business.photos.map { |file| url_for(file) }

json.category_id BusinessCategory.where('business_id = ?', @business.id).map {|record| record.category_id }

json.category_name Category.joins(:businesses).where('business_id = ?', @business.id).map {|record| record.category_name}
