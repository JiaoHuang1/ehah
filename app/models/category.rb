class Category < ApplicationRecord
    validates :category_name, presence: :true, uniqueness: :true

    # has_many :businesses
end
