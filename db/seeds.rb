# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Business.destroy_all

demouser = User.create!(first_name: 'demo', last_name: 'guest', email: 'demoguest@gmail.com', password: '1234567', zipcode: '10038')

burgerking3ave = Business.create!(name: 'Burger King', address: '1886 Third Ave, New York, NY 10029', latitude: 40.7905338, longitude: -73.9458481, price_rating: '$', description: 'Well-known fast-food chain serving grilled burgers, fries & shakes, plus breakfast.', weekday_open_hour: '7:00 am', weekday_close_hour: '11:00 pm', weekend_open_hour: "8:00 am", weekend_close_hour: "10:00 pm", website: "www.bk.com")

burgerking1 = burgerking3ave.photos.attach(io: File.open("/Users/Jiao/Desktop/ehah_image_aws/burger_king/burgerking1.jpg"), filename: "burger_king_1.jpg")
burgerking2 = burgerking3ave.photos.attach(io: File.open("/Users/Jiao/Desktop/ehah_image_aws/burger_king/burgerking2.jpg"), filename: "burger_king_2.jpg")
burgerking3 = burgerking3ave.photos.attach(io: File.open("/Users/Jiao/Desktop/ehah_image_aws/burger_king/burgerking3.jpg"), filename: "burger_king_3.jpg")
