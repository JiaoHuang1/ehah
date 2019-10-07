class Business < ApplicationRecord
    validates :name, :address, :latitude, :longitude, :price_rating, :description, presence: true
    validates :name, uniqueness: { scope: [:latitude, :longitude] }
    
    has_many_attached :photos

    
    has_many :business_categories

    has_many :categories, 
        through: :business_categories
end
