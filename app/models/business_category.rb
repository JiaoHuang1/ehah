class BusinessCategory < ApplicationRecord
    validates :category_id, :business_id, presence: :true
    validates :category_id, uniqueness: { scope: :business_id }

    belongs_to :business  
    belongs_to :category
end
