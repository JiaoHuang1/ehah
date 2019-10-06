# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Business.destroy_all
Category.destroy_all
BusinessCategory.destroy_all

demouser = User.create!(first_name: 'demo', last_name: 'guest', email: 'demoguest@gmail.com', password: '1234567', zipcode: '10038')

burgerking3ave = Business.create!(
    name: 'Burger King', 
    address: '1886 Third Ave, New York, NY 10029', 
    latitude: 40.7905338, 
    longitude: -73.9458481, 
    price_rating: '$', 
    description: 'Well-known fast-food chain serving grilled burgers, fries & shakes, plus breakfast.', 
    weekday_open_hour: '7:00 am', 
    weekday_close_hour: '11:00 pm', 
    weekend_open_hour: "7:00 am", 
    weekend_close_hour: "11:00 pm", 
    website: "www.bk.com", 
    phone: '(212) 228-2762'
)

burgerking1 = burgerking3ave.photos.attach(io: File.open("/Users/Jiao/Desktop/ehah_image_aws/burger_king/burgerking1.jpg"), filename: "burger_king_1.jpg")
burgerking2 = burgerking3ave.photos.attach(io: File.open("/Users/Jiao/Desktop/ehah_image_aws/burger_king/burgerking2.jpg"), filename: "burger_king_2.jpg")
burgerking3 = burgerking3ave.photos.attach(io: File.open("/Users/Jiao/Desktop/ehah_image_aws/burger_king/burgerking3.jpg"), filename: "burger_king_3.jpg")
burgerking4 = burgerking3ave.photos.attach(io: File.open("/Users/Jiao/Desktop/ehah_image_aws/burger_king/burgerking4.jpg"), filename: "burger_king_3.jpg")
burgerking5 = burgerking3ave.photos.attach(io: File.open("/Users/Jiao/Desktop/ehah_image_aws/burger_king/burgerking5.jpg"), filename: "burger_king_3.jpg")

buds = Business.create!(
    name: 'Blooming Urban Design Scapes', 
    address: 'W 72nd St, New York, NY 10023', 
    latitude: 40.778600, 
    longitude: -73.981600, 
    price_rating: '$$$', 
    description: 'Indoor and Outdoor Installations. Not a Nursery - Officially Greening NYC since 2011. 
    Blooming Urban Design Scapes (BUDS) is an urban landscaping company based in and around NYC, 
    led by a team of dedicated and knowledgeable landscape design, horticulture, and garden installation 
    professionals working to transform and maintain both indoor and outdoor green spaces. We design for 
    both residential and commercial environments, guiding our clients in the creation and operation of 
    special garden oases in the midst of the urban jungle. Here at BUDS we pride ourselves in our attention 
    to detail, always celebrating our clients\' unique personalities while keeping their specific aesthetic 
    styles in mind. Gardening - Urban Landscape Design - Terraces & Rooftops - Courtyards, Yards, & Patios 
    - Tree Beds & Entrances - Maintenance - Drip Irrigation', 
    weekday_open_hour: '9:00 am', 
    weekday_close_hour: '6:00 pm', 
    weekend_open_hour: "closed", 
    website: "budsandbuds.com", 
    phone: '(212) 533-2962'
)

buds1 = buds.photos.attach(io: File.open("/Users/Jiao/Desktop/ehah_image_aws/buds/buds1.jpg"), filename: "buds1.jpg")
buds2 = buds.photos.attach(io: File.open("/Users/Jiao/Desktop/ehah_image_aws/buds/buds2.jpg"), filename: "buds2.jpg")

restaurant = Category.create(category_name: 'Restaurant')
fastfood = Category.create(category_name: 'Fast Food')
homeservice = Category.create(category_name: 'Home Service')
landscaping = Category.create(category_name: 'Landscaping')

bc1 = BusinessCategory.create!(business_id: burgerking3ave.id, category_id: restaurant.id)
bc2 = BusinessCategory.create!(business_id: burgerking3ave.id, category_id: fastfood.id)
bc3 = BusinessCategory.create!(business_id: buds.id, category_id: homeservice.id)
bc4 = BusinessCategory.create!(business_id: buds.id, category_id: landscaping.id)




