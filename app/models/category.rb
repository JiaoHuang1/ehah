# == Schema Information
#
# Table name: categories
#
#  id            :bigint           not null, primary key
#  category_name :string           not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Category < ApplicationRecord
    validates :category_name, presence: :true, uniqueness: :true

    has_many :business_categories

    has_many :businesses,
        through: :business_categories
    
end
