json.extract! @category, :id, :category_name
json.business_id @category.businesses.map { |business| business.id}
