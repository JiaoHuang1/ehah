class Category < ApplicationRecord
    validates :category_name, presence: :true, uniqueness: :true

    has_many :business_categories

    has_many :businesses,
        through: :business_categories
    
end
