# == Schema Information
#
# Table name: business_categories
#
#  id          :bigint           not null, primary key
#  category_id :integer          not null
#  business_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class BusinessCategory < ApplicationRecord
    validates :category_id, :business_id, presence: :true
    validates :category_id, uniqueness: { scope: :business_id }

    belongs_to :business  
    belongs_to :category
end
