# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

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

# burgerking1 = burgerking3ave.photos.attach(io: File.open("/Users/Jiao/Desktop/ehah_image_aws/burger_king/burgerking1.jpg"), filename: "burger_king_1.jpg")
# burgerking2 = burgerking3ave.photos.attach(io: File.open("/Users/Jiao/Desktop/ehah_image_aws/burger_king/burgerking2.jpg"), filename: "burger_king_2.jpg")
# burgerking3 = burgerking3ave.photos.attach(io: File.open("/Users/Jiao/Desktop/ehah_image_aws/burger_king/burgerking3.jpg"), filename: "burger_king_3.jpg")
# burgerking4 = burgerking3ave.photos.attach(io: File.open("/Users/Jiao/Desktop/ehah_image_aws/burger_king/burgerking4.jpg"), filename: "burger_king_4.jpg")
# burgerking5 = burgerking3ave.photos.attach(io: File.open("/Users/Jiao/Desktop/ehah_image_aws/burger_king/burgerking5.jpg"), filename: "burger_king_5.jpg")
file1 = open('https://ehah-seed.s3.amazonaws.com/burgerking1.jpg')
burgerking1 = burgerking3ave.photos.attach(io: file1, filename: "burger_king_1.jpg")

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

# buds1 = buds.photos.attach(io: File.open("/Users/Jiao/Desktop/ehah_image_aws/buds/buds1.jpg"), filename: "buds1.jpg")
# buds2 = buds.photos.attach(io: File.open("/Users/Jiao/Desktop/ehah_image_aws/buds/buds2.jpg"), filename: "buds2.jpg")
# buds3 = buds.photos.attach(io: File.open("/Users/Jiao/Desktop/ehah_image_aws/buds/buds3.jpg"), filename: "buds3.jpg")
# buds4 = buds.photos.attach(io: File.open("/Users/Jiao/Desktop/ehah_image_aws/buds/buds4.jpg"), filename: "buds4.jpg")
# buds5 = buds.photos.attach(io: File.open("/Users/Jiao/Desktop/ehah_image_aws/buds/buds5.jpg"), filename: "buds5.jpg")

# need to see the photo of business from here on

suger = Business.create!(
    name: 'Suger Hill Cafe', 
    address: '410 W 145th St, New York, NY 10031', 
    latitude: 40.824140, 
    longitude: -73.945650, 
    price_rating: '$', 
    description: 'We use a local Harlem roaster, ensuring the highest quality beans, with each barrista hand-selected, 
    being experts when it comes to coffee. Our pastries, sandwiches, paninis, and sweets are either made in-house or 
    provided by some of the best local purveyors. Some of our specialties include Plowshares Coffee, Espresso, Cold Brew, 
    Bellocq Teas, Limation, Paninis, and more.',
    weekday_open_hour: '7:00 am', 
    weekday_close_hour: '8:30 pm', 
    weekend_open_hour: '8:00 am',
    weekend_close_hour: '4:00 pm', 
    website: 'sugarhillcafe.com', 
    phone: '(212) 234-2024'
)

# suger1 = suger.photos.attach(io: File.open("/Users/Jiao/Desktop/ehah_image_aws/suger/suger1.jpg"), filename: "suger1.jpg")
# suger2 = suger.photos.attach(io: File.open("/Users/Jiao/Desktop/ehah_image_aws/suger/suger2.jpg"), filename: "suger2.jpg")
# suger3 = suger.photos.attach(io: File.open("/Users/Jiao/Desktop/ehah_image_aws/suger/suger3.jpg"), filename: "suger3.jpg")
# suger4 = suger.photos.attach(io: File.open("/Users/Jiao/Desktop/ehah_image_aws/suger/suger4.jpg"), filename: "suger4.jpg")
# suger5 = suger.photos.attach(io: File.open("/Users/Jiao/Desktop/ehah_image_aws/suger/suger5.jpg"), filename: "suger5.jpg")

kingskitchen = Business.create!(
    name: 'King\'s Kitchen', 
    address: '92 E Broadway, New York, NY 10002', 
    latitude: 40.713960, 
    longitude: -73.945650, 
    price_rating: '$', 
    description: 'King\'s Kitchen specializes in giving their customer\'s a taste of what delicious, authentic Chinese cuisine 
    really is. In order to provide the best experience for our customers, we feature high quality cuts of meat, such as BBQ pork 
    and roast duck. Complementing our savory meats, which are provided freshly everyday, we are also known for our flavorful steamed 
    rice rolls and delectable clay pots over here at King\'s Kitchen.',
    weekday_open_hour: '7:00 am', 
    weekday_close_hour: '10:00 pm', 
    weekend_open_hour: '7:00 am',
    weekend_close_hour: '10:00 pm', 
    website: 'http://kingskitchennewyork4.cafeshousebiz.online', 
    phone: '(212) 966-7288'
)

# kingskitchen1 = kingskitchen.photos.attach(io: File.open("/Users/Jiao/Desktop/ehah_image_aws/kingskitchen/kingskitchen1.jpg"), filename: "kingskitchen1.jpg")
# kingskitchen2 = kingskitchen.photos.attach(io: File.open("/Users/Jiao/Desktop/ehah_image_aws/kingskitchen/kingskitchen2.jpg"), filename: "kingskitchen2.jpg")
# kingskitchen3 = kingskitchen.photos.attach(io: File.open("/Users/Jiao/Desktop/ehah_image_aws/kingskitchen/kingskitchen3.jpg"), filename: "kingskitchen3.jpg")
# kingskitchen4 = kingskitchen.photos.attach(io: File.open("/Users/Jiao/Desktop/ehah_image_aws/kingskitchen/kingskitchen4.jpg"), filename: "kingskitchen4.jpg")
# kingskitchen5 = kingskitchen.photos.attach(io: File.open("/Users/Jiao/Desktop/ehah_image_aws/kingskitchen/kingskitchen5.jpg"), filename: "kingskitchen5.jpg")

szechuan = Business.create!(
    name: 'Szechuan Garden', 
    address: '239 W 105th St, New York, NY 10025', 
    latitude: 40.800560, 
    longitude: -73.967520, 
    price_rating: '$$', 
    description: 'Szechuan Garden is New York\'s favorite spot for delicious, authentic Chinese food with a spicy twist. Whether you\'re 
    in the mood for a tasty lunch between classes or an intimate dinner for two, Szechuan Garden is the perfect place for any occasion. 
    Our food is famous for combining familiar flavors with a fiery kick. Our menu features many traditional Chinese dishes including dan 
    dan noodles, szechuan pork dumplings, hot & sour soup, and more. Enjoy your Szechuan Garden favorites at our place or in the comfort 
    of your own home with great takeout options and free delivery. For a hot, modern take on traditional Chinese food, look no further 
    than Szechuan Garden. Located at 105th and Broadway, we invite you to enjoy a delicious meal with us.',
    weekday_open_hour: '11:30 am', 
    weekday_close_hour: '10:30 pm', 
    weekend_open_hour: '11:30 am',
    weekend_close_hour: '10:30 pm', 
    website: 'scg105.com', 
    phone: '(212) 865-8808'
)

# szechuan1 = szechuan.photos.attach(io: File.open("/Users/Jiao/Desktop/ehah_image_aws/szechuan/szechuan1.jpg"), filename: "szechuan1.jpg")
# szechuan2 = szechuan.photos.attach(io: File.open("/Users/Jiao/Desktop/ehah_image_aws/szechuan/szechuan2.jpg"), filename: "szechuan2.jpg")
# szechuan3 = szechuan.photos.attach(io: File.open("/Users/Jiao/Desktop/ehah_image_aws/szechuan/szechuan3.jpg"), filename: "szechuan3.jpg")
# szechuan4 = szechuan.photos.attach(io: File.open("/Users/Jiao/Desktop/ehah_image_aws/szechuan/szechuan4.jpg"), filename: "szechuan4.jpg")
# szechuan5 = szechuan.photos.attach(io: File.open("/Users/Jiao/Desktop/ehah_image_aws/szechuan/szechuan5.jpg"), filename: "szechuan5.jpg")

bagelcofffee = Business.create!(
    name: 'Best Bagel & Coffee', 
    address: '225 W 35th St, New York, NY 10001', 
    latitude: 40.752280, 
    longitude: -73.991020, 
    price_rating: '$', 
    description: 'Fresh hand rolled bagels with variety of cream cheeses. Breakfast and lunch sandwiches, egg platters, fresh salads, 
    home made soups, premium coffee and drinks. We also do breakfast and lunch catering. All baking done on premises.',
    weekday_open_hour: '6:00 am', 
    weekday_close_hour: '4:00 pm', 
    weekend_open_hour: '8:00 am',
    weekend_close_hour: '2:30 pm', 
    website: 'bestbagelandcoffee.com', 
    phone: '(212) 564-4409'
)

# bagelcofffee1 = bagelcofffee.photos.attach(io: File.open("/Users/Jiao/Desktop/ehah_image_aws/bagelcofffee/bagelcofffee1.jpg"), filename: "bagelcofffee1.jpg")
# bagelcofffee2 = bagelcofffee.photos.attach(io: File.open("/Users/Jiao/Desktop/ehah_image_aws/bagelcofffee/bagelcofffee2.jpg"), filename: "bagelcofffee2.jpg")
# bagelcofffee3 = bagelcofffee.photos.attach(io: File.open("/Users/Jiao/Desktop/ehah_image_aws/bagelcofffee/bagelcofffee3.jpg"), filename: "bagelcofffee3.jpg")
# bagelcofffee4 = bagelcofffee.photos.attach(io: File.open("/Users/Jiao/Desktop/ehah_image_aws/bagelcofffee/bagelcofffee4.jpg"), filename: "bagelcofffee4.jpg")
# bagelcofffee5 = bagelcofffee.photos.attach(io: File.open("/Users/Jiao/Desktop/ehah_image_aws/bagelcofffee/bagelcofffee5.jpg"), filename: "bagelcofffee5.jpg")

brener = Business.create!(
    name: 'Brener Construction', 
    address: '20 East 46th St Ste 200-C, New York, NY 10017', 
    latitude: 40.755450, 
    longitude: -73.977890, 
    price_rating: '$$$$', 
    description: 'We all have images that come to mind when we think of our dream home. A bright, open kitchen. An airy, mid-century-inspired 
    study. A spacious, modern-minimal bathroom. Whatever it is you imagine, we at Brener Construction consider it our privilege to bring that 
    dream home to fruition. We offer stunning custom gut renovations, working with our clients throughout the building process to ensure 
    complete satisfaction down to the very last detail. But even if we\'re not starting from the ground up, we bring that same dedication and 
    top-quality workmanship to our renovation and add-on services, too. Don\'t keep it a dream. Let Brener Construction make it a reality.',
    weekday_open_hour: '9:00 am', 
    weekday_close_hour: '5:00 pm', 
    weekend_open_hour: 'closed',
    website: 'brenerconstruction.com', 
    phone: '(917) 825-6791'
)

# brener1 = brener.photos.attach(io: File.open("/Users/Jiao/Desktop/ehah_image_aws/brener/brener1.jpg"), filename: "brener1.jpg")
# brener2 = brener.photos.attach(io: File.open("/Users/Jiao/Desktop/ehah_image_aws/brener/brener2.jpg"), filename: "brener2.jpg")
# brener3 = brener.photos.attach(io: File.open("/Users/Jiao/Desktop/ehah_image_aws/brener/brener3.jpg"), filename: "brener3.jpg")
# brener4 = brener.photos.attach(io: File.open("/Users/Jiao/Desktop/ehah_image_aws/brener/brener4.jpg"), filename: "brener4.jpg")
# brener5 = brener.photos.attach(io: File.open("/Users/Jiao/Desktop/ehah_image_aws/brener/brener5.jpg"), filename: "brener5.jpg")

prestige = Business.create!(
    name: 'Prestige Automotive', 
    address: '547 W 133rd St, New York, NY 10027', 
    latitude: 40.818610, 
    longitude: -73.954980, 
    price_rating: '$$', 
    description: 'Prestige Automotive handles all of your automotive needs in New York City. See us for tires, wheels, and auto repair services in New York, NY, Bronx, 
    NY, Fort Lee, NJ, and surrounding areas. We have 24-hour towing available by calling 212-222-2277. We are also a Carco Photo Inspections Center, operating Monday 
    through Friday 9:00 AM to 12:00 PM and 2:00 PM to 4:00 PM, excluding rain days.',
    weekday_open_hour: '8:00 am', 
    weekday_close_hour: '5:00 pm', 
    weekend_open_hour: 'closed',
    website: 'brenerconstruction.com', 
    phone: '(347) 966-7771'
)

# prestige1 = prestige.photos.attach(io: File.open("/Users/Jiao/Desktop/ehah_image_aws/prestige/prestige1.jpg"), filename: "prestige1.jpg")
# prestige2 = prestige.photos.attach(io: File.open("/Users/Jiao/Desktop/ehah_image_aws/prestige/prestige2.jpg"), filename: "prestige2.jpg")
# prestige3 = prestige.photos.attach(io: File.open("/Users/Jiao/Desktop/ehah_image_aws/prestige/prestige3.jpg"), filename: "prestige3.jpg")
# prestige4 = prestige.photos.attach(io: File.open("/Users/Jiao/Desktop/ehah_image_aws/prestige/prestige4.jpg"), filename: "prestige4.jpg")
# prestige5 = prestige.photos.attach(io: File.open("/Users/Jiao/Desktop/ehah_image_aws/prestige/prestige5.jpg"), filename: "prestige5.jpg")

autobody = Business.create!(
    name: 'Don Joe Auto Body', 
    address: '247 E Shore Rd, Great Neck, NY 11023', 
    latitude: 40.796690, 
    longitude: -73.713550, 
    price_rating: '$$$', 
    description: 'The professioals at Don Joe Auto Body understand that getting into an accident is never convenient. However, at our auto body shop in Great Neck, New York, 
    we do everything in our power to make your experience as hassle-free as possible! We are a one stop shop offering services such as: Collision Repair Dent Removal Enterprise 
    Rentals Custom Paint Jobs Interior/ Exterior Detailing Paint correcting Detailing Whether it\'s a small dent or scratch, a major collision, or just for a full-service detail, 
    we are pleased to serve you. Stop by anytime and our friendly team will be more than happy to assist you. We are fluent in: English Spanish Italian',
    weekday_open_hour: '7:30 am', 
    weekday_close_hour: '5:00 pm', 
    weekend_open_hour: '7:30 am',
    weekend_close_hour: '12:00 pm',
    website: 'donjoeautobodyworks.com', 
    phone: '(347) 966-7771'
)

# autobody1 = autobody.photos.attach(io: File.open("/Users/Jiao/Desktop/ehah_image_aws/autobody/autobody1.jpg"), filename: "autobody1.jpg")
# autobody2 = autobody.photos.attach(io: File.open("/Users/Jiao/Desktop/ehah_image_aws/autobody/autobody2.jpg"), filename: "autobody2.jpg")
# autobody3 = autobody.photos.attach(io: File.open("/Users/Jiao/Desktop/ehah_image_aws/autobody/autobody3.jpg"), filename: "autobody3.jpg")
# autobody4 = autobody.photos.attach(io: File.open("/Users/Jiao/Desktop/ehah_image_aws/autobody/autobody4.jpg"), filename: "autobody4.jpg")
# autobody5 = autobody.photos.attach(io: File.open("/Users/Jiao/Desktop/ehah_image_aws/autobody/autobody5.jpg"), filename: "autobody5.jpg")

frederick = Business.create!(
    name: 'The Frederick Hotel', 
    address: '95 W Broadway, New York, NY 10007', 
    latitude: 40.713861, 
    longitude: -74.010583, 
    price_rating: '$', 
    description: 'The Frederick Hotel is a family owned business. It\'s the most economic hotel in TriBeCa Area in City. We have nice and helpful stuff here to accommodate our guests\' needs.
    We are delicated to give you the best travel experience in New York City!',
    weekday_open_hour: '1:00 am', 
    weekday_close_hour: '11:00 pm', 
    weekend_open_hour: '1:00 am',
    weekend_close_hour: '11:00 pm',
    website: 'frederickhotelnyc.com', 
    phone: '(212) 566-1900'
)

# frederick1 = frederick.photos.attach(io: File.open("/Users/Jiao/Desktop/ehah_image_aws/frederick/frederick1.jpg"), filename: "frederick1.jpg")
# frederick2 = frederick.photos.attach(io: File.open("/Users/Jiao/Desktop/ehah_image_aws/frederick/frederick2.jpg"), filename: "frederick2.jpg")
# frederick3 = frederick.photos.attach(io: File.open("/Users/Jiao/Desktop/ehah_image_aws/frederick/frederick3.jpg"), filename: "frederick3.jpg")
# frederick4 = frederick.photos.attach(io: File.open("/Users/Jiao/Desktop/ehah_image_aws/frederick/frederick4.jpg"), filename: "frederick4.jpg")
# frederick5 = frederick.photos.attach(io: File.open("/Users/Jiao/Desktop/ehah_image_aws/frederick/frederick5.jpg"), filename: "frederick5.jpg")

beacon = Business.create!(
    name: 'Hotel Beacon', 
    address: '2130 Broadway, New York, NY 10023', 
    latitude: 40.780659, 
    longitude: -73.981117, 
    price_rating: '$$$', 
    description: 'Hotel Beacon has great location in New York City! It\'s often tourists\' best choice. Our staff here are super nice and helpful. Our room are spacious and clean.',
    weekday_open_hour: '1:00 am', 
    weekday_close_hour: '11:00 pm', 
    weekend_open_hour: '1:00 am',
    weekend_close_hour: '11:00 pm',
    website: 'beaconhotel.com', 
    phone: '(929) 341-1197'
)

# beacon1 = beacon.photos.attach(io: File.open("/Users/Jiao/Desktop/ehah_image_aws/beacon/beacon1.jpg"), filename: "beacon1.jpg")
# beacon2 = beacon.photos.attach(io: File.open("/Users/Jiao/Desktop/ehah_image_aws/beacon/beacon2.jpg"), filename: "beacon2.jpg")
# beacon3 = beacon.photos.attach(io: File.open("/Users/Jiao/Desktop/ehah_image_aws/beacon/beacon3.jpg"), filename: "beacon3.jpg")
# beacon4 = beacon.photos.attach(io: File.open("/Users/Jiao/Desktop/ehah_image_aws/beacon/beacon4.jpg"), filename: "beacon4.jpg")
# beacon5 = beacon.photos.attach(io: File.open("/Users/Jiao/Desktop/ehah_image_aws/beacon/beacon5.jpg"), filename: "beacon5.jpg")


## create category table

restaurant = Category.create!(category_name: 'Restaurant')
fastfood = Category.create!(category_name: 'Fast Food')
breakfast = Category.create!(category_name: 'Breakfast & Brunch')
chinese = Category.create!(category_name: 'Chinese')
american = Category.create!(category_name: 'American')
takeout = Category.create!(category_name: 'Takeout')

homeservice = Category.create!(category_name: 'Home Service')
autoservice = Category.create!(category_name: 'Auto Service')
hotel = Category.create!(category_name: 'Hotel')


## create join table

bc1 = BusinessCategory.create!(business_id: burgerking3ave.id, category_id: restaurant.id)
bc2 = BusinessCategory.create!(business_id: burgerking3ave.id, category_id: fastfood.id)
bc3 = BusinessCategory.create!(business_id: burgerking3ave.id, category_id: american.id)

bc4 = BusinessCategory.create!(business_id: suger.id, category_id: restaurant.id)
bc5 = BusinessCategory.create!(business_id: suger.id, category_id: breakfast.id)
bc6 = BusinessCategory.create!(business_id: suger.id, category_id: american.id)

bc7 = BusinessCategory.create!(business_id: kingskitchen.id, category_id: restaurant.id)
bc8 = BusinessCategory.create!(business_id: kingskitchen.id, category_id: chinese.id)
bc9 = BusinessCategory.create!(business_id: kingskitchen.id, category_id: takeout.id)

bc10 = BusinessCategory.create!(business_id: szechuan.id, category_id: restaurant.id)
bc11 = BusinessCategory.create!(business_id: szechuan.id, category_id: takeout.id)
bc12 = BusinessCategory.create!(business_id: szechuan.id, category_id: chinese.id)

bc13 = BusinessCategory.create!(business_id: bagelcofffee.id, category_id: restaurant.id)
bc14 = BusinessCategory.create!(business_id: bagelcofffee.id, category_id: breakfast.id)
bc15 = BusinessCategory.create!(business_id: bagelcofffee.id, category_id: takeout.id)
bc16 = BusinessCategory.create!(business_id: bagelcofffee.id, category_id: american.id)

bc17 = BusinessCategory.create!(business_id: buds.id, category_id: homeservice.id)
bc18 = BusinessCategory.create!(business_id: brener.id, category_id: homeservice.id)

bc19 = BusinessCategory.create!(business_id: prestige.id, category_id: autoservice.id)
bc20 = BusinessCategory.create!(business_id: autobody.id, category_id: autoservice.id)

bc21 = BusinessCategory.create!(business_id: frederick.id, category_id: hotel.id)
bc22 = BusinessCategory.create!(business_id: beacon.id, category_id: hotel.id)





