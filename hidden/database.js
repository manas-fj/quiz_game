const csvData = `topic,question,option_0,option_1,option_2,option_3,answer
Pop Culture,Who is known as the 'King of Pop'?,Elvis Presley,Prince,Michael Jackson,Justin Timberlake,2
Pop Culture,Which movie features the character Iron Man?,Batman,Avengers,X-Men,Fantastic Four,1
Pop Culture,Which singer is known for the song 'Shake It Off'?,Katy Perry,Ariana Grande,Taylor Swift,Billie Eilish,2
Pop Culture,Which show features the character Eleven?,Stranger Things,The Flash,Riverdale,The 100,0
Pop Culture,Which social media app is known for short dance videos?,Instagram,Snapchat,TikTok,YouTube,2
Pop Culture,Which movie series features Hogwarts?,Lord of the Rings,Harry Potter,Star Wars,Twilight,1
Pop Culture,Which superhero is from Wakanda?,Iron Man,Batman,Black Panther,Superman,2
Pop Culture,Who sings 'Blinding Lights'?,Drake,The Weeknd,Post Malone,Bruno Mars,1
Pop Culture,Which artist painted the Mona Lisa?,Van Gogh,Michelangelo,Picasso,Da Vinci,3
Pop Culture,Which band is known for the song 'Bohemian Rhapsody'?,The Beatles,Queen,Rolling Stones,Nirvana,1
Pop Culture,Who is the main character in the Mario video game series?,Luigi,Toad,Mario,Yoshi,2
Pop Culture,Which TV show is known for the phrase 'Winter is Coming'?,The Witcher,Vikings,Game of Thrones,Breaking Bad,2
Pop Culture,Which pop star famously wore a meat dress?,Rihanna,Lady Gaga,Miley Cyrus,Dua Lipa,1
Pop Culture,Which video platform is owned by Google?,TikTok,Vimeo,YouTube,Twitch,2
Pop Culture,Which singer goes by the nickname 'Queen Bey'?,Nicki Minaj,Rihanna,Adele,Beyoncé,3
Pop Culture,Which movie features a talking snowman named Olaf?,Moana,Frozen,Encanto,Tangled,1
Pop Culture,Which app uses the blue bird as its logo?,Snapchat,Facebook,Twitter,Reddit,2
Pop Culture,Who is Spider-Man in the Marvel Cinematic Universe (MCU)?,Tom Holland,Andrew Garfield,Tobey Maguire,Chris Evans,0
Pop Culture,Which girl group sang 'Wannabe'?,Destiny's Child,Spice Girls,Little Mix,Fifth Harmony,1
Pop Culture,Which movie series features a golden ring and hobbits?,Harry Potter,Narnia,Lord of the Rings,Twilight,2
Pop Culture,Which singer had a hit with 'Bad Guy'?,Selena Gomez,Billie Eilish,Doja Cat,Ariana Grande,1
Pop Culture,Which actor played Iron Man?,Chris Hemsworth,Chris Pratt,Robert Downey Jr.,Mark Ruffalo,2
Pop Culture,What is the name of the green Star Wars character?,Yoda,Chewbacca,Vader,Obi-Wan,0
Pop Culture,What platform is known for binge-worthy original series like 'Stranger Things'?,Netflix,Hulu,HBO,Disney+,0
Pop Culture,Who hosted 'The Ellen DeGeneres Show'?,Oprah,Ellen DeGeneres,Kelly Clarkson,Jimmy Fallon,1
Pop Culture,Which singer released the album '1989'?,Adele,Taylor Swift,Katy Perry,Lorde,1
Pop Culture,Which animated series features characters named Bart and Homer?,Family Guy,Futurama,The Simpsons,South Park,2
Pop Culture,What is Barbie's boyfriend's name?,John,Ken,Max,Jake,1
Pop Culture,Which superhero has a shield with a star on it?,Iron Man,Batman,Captain America,Thor,2
Pop Culture,Which game features characters like Pikachu and Charizard?,Minecraft,Fortnite,Pokemon,Among Us,2
History,Who was the first President of the United States?,Abraham Lincoln,George Washington,Thomas Jefferson,John Adams,1
History,In which country did the pyramids originate?,Mexico,Greece,Egypt,India,2
History,What ship famously sank in 1912?,Lusitania,Titanic,Mayflower,Bismarck,1
History,Who discovered America in 1492?,Marco Polo,Leif Erikson,Christopher Columbus,Ferdinand Magellan,2
History,What wall divided East and West Berlin?,The Wall of China,Berlin Wall,Iron Curtain,Great Wall,1
History,Who was the leader of Nazi Germany?,Joseph Stalin,Winston Churchill,Adolf Hitler,Benito Mussolini,2
History,What year did World War II end?,1942,1945,1950,1939,1
History,Where did the American Civil War take place?,Canada,Mexico,United States,France,2
History,Who was known for the 'I Have a Dream' speech?,Barack Obama,Malcolm X,Martin Luther King Jr.,Frederick Douglass,2
History,What ancient city is known for its Colosseum?,Athens,Rome,Cairo,Paris,1
History,Who was the Queen of France during the French Revolution?,Marie Curie,Catherine the Great,Marie Antoinette,Joan of Arc,2
History,What invention is Thomas Edison famous for?,Airplane,Light bulb,Radio,Telephone,1
History,Which war was fought between the North and South in the U.S.?,World War I,American Revolution,Cold War,Civil War,3
History,What was the name of the first human in space?,Buzz Aldrin,Neil Armstrong,Yuri Gagarin,Alan Shepard,2
History,Which empire built the Great Wall of China?,Roman Empire,Mongol Empire,Qin Dynasty,British Empire,2
History,Who was the U.S. president during most of the Great Depression?,Woodrow Wilson,Herbert Hoover,Franklin D. Roosevelt,Harry Truman,2
History,Where was Nelson Mandela from?,Kenya,South Africa,Ghana,Nigeria,1
History,What ancient civilization built Machu Picchu?,Aztecs,Mayans,Incas,Olmecs,2
History,What country gifted the Statue of Liberty to the U.S.?,England,Germany,France,Italy,2
History,Who wrote the U.S. Declaration of Independence?,George Washington,Alexander Hamilton,Benjamin Franklin,Thomas Jefferson,3
History,What year did the first man land on the moon?,1965,1969,1971,1975,1
History,Who was the famous nurse during the Crimean War?,Clara Barton,Florence Nightingale,Marie Curie,Susan B. Anthony,1
History,What empire did Julius Caesar belong to?,Greek,Persian,Roman,Ottoman,2
History,Who invented the telephone?,Thomas Edison,Nikola Tesla,Alexander Graham Bell,James Watt,2
History,What was the name of the medieval disease called the Black Death?,Influenza,Cholera,Plague,Typhoid,2
History,Who was the British Prime Minister during WWII?,Winston Churchill,Neville Chamberlain,Tony Blair,Margaret Thatcher,0
History,What country did the Renaissance begin in?,France,Germany,Italy,Spain,2
History,What was the Cold War mainly about?,Oil,Technology,Ideologies,Trade,2
History,Who was the first emperor of China?,Liu Bang,Qin Shi Huang,Kublai Khan,Sun Yat-sen,1
History,Which country dropped the first atomic bomb in war?,Germany,Russia,Japan,United States,3
Math,What is 5 + 3?,6,7,8,9,2
Math,What is 12 - 4?,6,7,8,9,2
Math,What is 3 x 3?,6,9,12,15,1
Math,What is 16 ÷ 4?,2,4,6,8,1
Math,"What is the next number in the sequence: 2, 4, 6, ?",7,8,9,10,1
Math,What is 10% of 100?,5,10,15,20,1
Math,What is the value of 2²?,2,4,6,8,1
Math,Which number is even?,3,5,7,8,3
Math,What is 9 - 6?,2,3,4,5,1
Math,Which number is a multiple of 5?,11,15,18,22,1
Math,What is 7 + 2?,8,9,10,11,1
Math,What is 14 ÷ 2?,6,7,8,9,1
Math,What is the square root of 25?,3,4,5,6,2
Math,What is 6 x 2?,10,11,12,13,2
Math,What is 20 - 5?,13,14,15,16,2
Math,What is 4 + 6?,9,10,11,12,1
Math,Which is the largest number?,23,45,12,39,1
Math,Which is the smallest number?,11,9,13,15,1
Math,What is 100 - 99?,1,2,0,3,0
Math,What is 3 x 4?,11,12,13,14,1
Math,"What comes next: 5, 10, 15, ?",18,20,22,25,1
Math,How many sides does a triangle have?,2,3,4,5,1
Math,What is 50% of 200?,50,75,100,150,2
Math,What is 1 more than 99?,98,99,100,101,2
Math,What is 0 x 12?,0,1,12,24,0
Math,Which number is odd?,8,6,3,4,2
Math,What is 11 + 0?,10,11,12,13,1
Math,What is the product of 2 and 5?,10,12,15,20,0
Math,What is the sum of 6 and 7?,11,12,13,14,2
Math,What is 18 ÷ 3?,5,6,7,8,1
Science,What planet do we live on?,Mars,Earth,Venus,Jupiter,1
Science,What do humans need to breathe?,Carbon Dioxide,Oxygen,Nitrogen,Hydrogen,1
Science,What is H2O commonly known as?,Oxygen,Hydrogen,Water,Salt,2
Science,Which organ pumps blood through the body?,Brain,Liver,Heart,Lung,2
Science,What gas do plants take in from the air?,Oxygen,Nitrogen,Carbon Dioxide,Helium,2
Science,What is the center of the solar system?,Earth,Moon,Mars,Sun,3
Science,How many legs does an insect have?,4,6,8,10,1
Science,Which state of matter is ice?,Solid,Liquid,Gas,Plasma,0
Science,What part of the plant absorbs water?,Stem,Root,Leaf,Flower,1
Science,Which sense organ is used to see?,Nose,Eye,Ear,Hand,1
Science,What causes day and night?,Moon phases,Earth's rotation,Sun moving,Star alignment,1
Science,Which planet is known as the Red Planet?,Earth,Mars,Jupiter,Venus,1
Science,What do bees make?,Milk,Butter,Honey,Jam,2
Science,Which natural resource is used to make paper?,Coal,Oil,Wood,Plastic,2
Science,How many bones does an adult human have?,106,206,306,406,1
Science,Which of these is a gas?,Ice,Steam,Salt,Wood,1
Science,Which planet has rings?,Mars,Earth,Saturn,Venus,2
Science,What organ helps you digest food?,Heart,Lung,Stomach,Kidney,2
Science,What is the main source of energy for Earth?,Moon,Wind,Sun,Water,2
Science,Which animal lays eggs?,Dog,Cat,Cow,Duck,3
Science,What are clouds made of?,Dust,Water droplets,Smoke,Air,1
Science,Which of these is not a planet?,Moon,Mars,Jupiter,Mercury,0
Science,What part of the body lets you hear?,Eye,Mouth,Ear,Nose,2
Science,Which of these is a mammal?,Frog,Shark,Whale,Lizard,2
Science,Which force pulls things toward Earth?,Magnetism,Electricity,Friction,Gravity,3
Science,Which is the largest planet in our solar system?,Earth,Jupiter,Saturn,Uranus,1
Science,Which sense do you use to smell?,Mouth,Eye,Ear,Nose,3
Science,What is the boiling point of water?,50°C,75°C,100°C,125°C,2
Science,What do plants release during photosynthesis?,Carbon dioxide,Oxygen,Hydrogen,Nitrogen,1
Science,What do you call animals that eat only plants?,Carnivores,Herbivores,Omnivores,Insectivores,1
Geography,What is the name of the planet we live on?,Mars,Earth,Jupiter,Venus,1
Geography,Which ocean is the largest?,Atlantic,Indian,Pacific,Arctic,2
Geography,What is the capital of the United States?,New York,Los Angeles,"Washington, D.C.",Chicago,2
Geography,Which country is shaped like a boot?,Spain,Italy,France,Portugal,1
Geography,What continent is Egypt in?,Asia,Europe,Africa,South America,2
Geography,What is the longest river in the world?,Amazon,Nile,Yangtze,Mississippi,1
Geography,Which direction does the sun rise?,North,South,East,West,2
Geography,What is the name of the mountain range that includes Mount Everest?,Andes,Alps,Himalayas,Rockies,2
Geography,Which country has the most people?,USA,India,Russia,China,3
Geography,Which of these is a desert?,Sahara,Amazon,Arctic,Himalaya,0
Geography,Which is the smallest continent?,Europe,Australia,Antarctica,South America,1
Geography,Which country is known for the Eiffel Tower?,Italy,Spain,France,Germany,2
Geography,What is the capital of the United Kingdom?,Edinburgh,Dublin,Manchester,London,3
Geography,Which body of water separates Europe from Africa?,Indian Ocean,Atlantic Ocean,Red Sea,Mediterranean Sea,3
Geography,Which U.S. state is the largest by area?,Texas,California,Alaska,Montana,2
Geography,What continent is Brazil in?,Africa,Asia,Europe,South America,3
Geography,Which direction is opposite of west?,East,North,South,Up,0
Geography,What is the capital city of Japan?,Kyoto,Osaka,Tokyo,Hiroshima,2
Geography,Which is a landform surrounded by water on three sides?,Island,Valley,Peninsula,Mountain,2
Geography,Which U.S. state is an island chain?,Hawaii,Florida,California,Alaska,0
Geography,What is the name of Earth's only natural satellite?,Moon,Mars,Sun,Comet,0
Geography,What line separates the Northern and Southern Hemispheres?,Prime Meridian,Tropic of Cancer,Equator,Longitude,2
Geography,What is the capital of Canada?,Toronto,Ottawa,Vancouver,Montreal,1
Geography,Which continent has the most countries?,Asia,Africa,Europe,South America,1
Geography,What is the capital of Australia?,Sydney,Melbourne,Perth,Canberra,3
Geography,Which country is famous for pyramids?,India,Mexico,Egypt,Greece,2
Geography,Where is the Amazon Rainforest located?,Africa,Asia,South America,North America,2
Geography,What is the southernmost continent?,Australia,Africa,Antarctica,South America,2
Geography,Which continent is India in?,Asia,Europe,Africa,Australia,0
Geography,Which city is known as the Big Apple?,Chicago,Los Angeles,Miami,New York,3`;
