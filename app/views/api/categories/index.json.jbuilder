
@categories.each do |category|
    json.set! category.id do
        json.extract! category, :id, :category_name
        json.business_id category.businesses.map { |business| business.id}
    end
end
