class Business < ApplicationRecord
    validates :name, :address, :latitude, :longitude, :price_rating, :description, presence: true
    validates :name, uniqueness: { scope: [:latitude, :longitude] }
    
    has_many_attached :photos
    # has_many :categories
end
