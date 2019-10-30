# == Schema Information
#
# Table name: businesses
#
#  id                 :bigint           not null, primary key
#  name               :string           not null
#  address            :string           not null
#  latitude           :float            not null
#  longitude          :float            not null
#  price_rating       :string           not null
#  description        :text             not null
#  weekday_open_hour  :string
#  weekday_close_hour :string
#  weekend_open_hour  :string
#  weekend_close_hour :string
#  website            :string
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  phone              :string
#

class Business < ApplicationRecord
    validates :name, :address, :latitude, :longitude, :price_rating, :description, presence: true
    validates :name, uniqueness: { scope: [:latitude, :longitude] }
    
    has_many_attached :photos

    
    has_many :business_categories

    has_many :categories, 
        through: :business_categories

    def self.find_by_search_bar(find = "", loc = "")
        # businesses = Business.joins(:categories).where("name LIKE ? OR description LIKE ? OR category_name LIKE ?", "%#{find}%", "%#{find}%", "%#{find}%").where( "address LIKE ?", "%#{loc}%").uniq
       
        businesses = Business.joins(:categories).where("lower(name) LIKE ? OR lower(description) LIKE ? OR lower(category_name) LIKE ?", "%#{find.downcase}%", "%#{find.downcase}%", "%#{find.downcase}%").where( "lower(address) LIKE ?", "%#{loc.downcase}%").uniq
    end

    def self.find_by_category(category_name = "")
        businesses = Business.joins(:categories).where("category_name LIKE ?", "%#{category_name}%").uniq
    end

    has_many :comments

end
