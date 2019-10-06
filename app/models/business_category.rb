class BusinessCategory < ApplicationRecord
    validates :category_id, :business_id, presence: :true
    validates :category_id, uniqueness: { scope: :business_id }
end
