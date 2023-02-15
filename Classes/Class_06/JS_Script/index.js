// // print only students with grade < 2 and 4 > 
// //print first name last name and avarage grade
// let students = [{ "id": 1, "firstName": "Frasquito", "lastName": "Koop", "email": "fkoop0@ow.ly", "gender": "Male", "city": "Benzilan", "averageGrade": 4, "age": 33 },
// { "id": 2, "firstName": "Mirilla", "lastName": "Heazel", "email": "mheazel1@forbes.com", "gender": "Female", "city": "Buena Esperanza", "averageGrade": 3, "age": 37 },
// { "id": 3, "firstName": "Edie", "lastName": "Butler-Bowdon", "email": "ebutlerbowdon2@hhs.gov", "gender": "Female", "city": "Cigembong", "averageGrade": 2, "age": 14 },
// { "id": 4, "firstName": "Stearn", "lastName": "Chrstine", "email": "schrstine3@google.co.jp", "gender": "Male", "city": "Charras", "averageGrade": 2, "age": 34 },
// { "id": 5, "firstName": "Leslie", "lastName": "Portigall", "email": "lportigall4@java.com", "gender": "Male", "city": "Resende", "averageGrade": 5, "age": 19 },
// { "id": 6, "firstName": "Andros", "lastName": "Dorgon", "email": "adorgon5@sbwire.com", "gender": "Male", "city": "Pila", "averageGrade": 3, "age": 17 },
// { "id": 7, "firstName": "Jervis", "lastName": "Yitshak", "email": "jyitshak6@gizmodo.com", "gender": "Male", "city": "Lâm Thao", "averageGrade": 4, "age": 17 },
// { "id": 8, "firstName": "Carolyne", "lastName": "Kilday", "email": "ckilday7@time.com", "gender": "Female", "city": "Carbajales", "averageGrade": 3, "age": 23 },
// { "id": 9, "firstName": "Karin", "lastName": "Heavens", "email": "kheavens8@nsw.gov.au", "gender": "Female", "city": "Aleksinac", "averageGrade": 4, "age": 13 },
// { "id": 10, "firstName": "Aileen", "lastName": "Ferriere", "email": "aferriere9@behance.net", "gender": "Female", "city": "Niños Heroes", "averageGrade": 1, "age": 38 },
// { "id": 11, "firstName": "Gaby", "lastName": "Allcock", "email": "gallcocka@yolasite.com", "gender": "Male", "city": "Sindangjati", "averageGrade": 2, "age": 22 },
// { "id": 12, "firstName": "Omar", "lastName": "Curro", "email": "ocurrob@wix.com", "gender": "Male", "city": "Bajiao", "averageGrade": 4, "age": 40 },
// { "id": 13, "firstName": "Nelli", "lastName": "O' Mara", "email": "nomarac@telegraph.co.uk", "gender": "Female", "city": "Skopje", "averageGrade": 1, "age": 32 },
// { "id": 14, "firstName": "Grover", "lastName": "Leipoldt", "email": "gleipoldtd@google.com", "gender": "Male", "city": "Katagum", "averageGrade": 1, "age": 17 },
// { "id": 15, "firstName": "Shelia", "lastName": "Basketfield", "email": "sbasketfielde@webnode.com", "gender": "Female", "city": "Baroh", "averageGrade": 5, "age": 42 },
// { "id": 16, "firstName": "Norene", "lastName": "Jeffers", "email": "njeffersf@plala.or.jp", "gender": "Female", "city": "Villa Cañás", "averageGrade": 5, "age": 24 },
// { "id": 17, "firstName": "Katleen", "lastName": "Thornton-Dewhirst", "email": "kthorntondewhirstg@army.mil", "gender": "Female", "city": "Hefu", "averageGrade": 1, "age": 32 },
// { "id": 18, "firstName": "Kenyon", "lastName": "Saffer", "email": "ksafferh@skyrock.com", "gender": "Male", "city": "Norrköping", "averageGrade": 5, "age": 18 },
// { "id": 19, "firstName": "Karia", "lastName": "Puckring", "email": "kpuckringi@cnet.com", "gender": "Female", "city": "San Isidro", "averageGrade": 4, "age": 37 },
// { "id": 20, "firstName": "Pierre", "lastName": "Allmann", "email": "pallmannj@symantec.com", "gender": "Male", "city": "Wailolung", "averageGrade": 4, "age": 36 },
// { "id": 21, "firstName": "Thomasin", "lastName": "Charlewood", "email": "tcharlewoodk@apache.org", "gender": "Female", "city": "Guihuaquan", "averageGrade": 1, "age": 33 },
// { "id": 22, "firstName": "Guthrie", "lastName": "Bucktharp", "email": "gbucktharpl@archive.org", "gender": "Male", "city": "Anār", "averageGrade": 1, "age": 18 },
// { "id": 23, "firstName": "Sayre", "lastName": "Northcote", "email": "snorthcotem@smugmug.com", "gender": "Male", "city": "Haixing", "averageGrade": 3, "age": 22 },
// { "id": 24, "firstName": "Waldo", "lastName": "Neill", "email": "wneilln@yelp.com", "gender": "Male", "city": "Uddevalla", "averageGrade": 4, "age": 30 },
// { "id": 25, "firstName": "Delores", "lastName": "Lalley", "email": "dlalleyo@typepad.com", "gender": "Female", "city": "Thompson", "averageGrade": 4, "age": 24 },
// { "id": 26, "firstName": "Arne", "lastName": "McFaul", "email": "amcfaulp@spotify.com", "gender": "Male", "city": "Baiima", "averageGrade": 5, "age": 31 },
// { "id": 27, "firstName": "Mirabel", "lastName": "Phizakarley", "email": "mphizakarleyq@tripadvisor.com", "gender": "Female", "city": "Kyzylorda", "averageGrade": 3, "age": 22 },
// { "id": 28, "firstName": "Marylynne", "lastName": "Gaspero", "email": "mgasperor@seattletimes.com", "gender": "Female", "city": "Skopje", "averageGrade": 2, "age": 26 },
// { "id": 29, "firstName": "Phillie", "lastName": "Vannini", "email": "pvanninis@ocn.ne.jp", "gender": "Female", "city": "Barinitas", "averageGrade": 5, "age": 38 },
// { "id": 30, "firstName": "Nickolaus", "lastName": "Finden", "email": "nfindent@cbc.ca", "gender": "Male", "city": "Rijeka", "averageGrade": 1, "age": 27 },
// { "id": 31, "firstName": "Renard", "lastName": "Brickwood", "email": "rbrickwoodu@blinklist.com", "gender": "Male", "city": "Khulm", "averageGrade": 2, "age": 22 },
// { "id": 32, "firstName": "Berrie", "lastName": "Swateridge", "email": "bswateridgev@va.gov", "gender": "Female", "city": "Tân An", "averageGrade": 2, "age": 31 },
// { "id": 33, "firstName": "Aluin", "lastName": "Cutsforth", "email": "acutsforthw@google.es", "gender": "Male", "city": "Washington", "averageGrade": 5, "age": 29 },
// { "id": 34, "firstName": "Arthur", "lastName": "Cadore", "email": "acadorex@apple.com", "gender": "Male", "city": "Bang Sai", "averageGrade": 3, "age": 16 },
// { "id": 35, "firstName": "Hollyanne", "lastName": "Selkirk", "email": "hselkirky@theglobeandmail.com", "gender": "Female", "city": "Huaxian", "averageGrade": 1, "age": 23 },
// { "id": 36, "firstName": "Antoine", "lastName": "Rillatt", "email": "arillattz@a8.net", "gender": "Male", "city": "Волочаевское", "averageGrade": 5, "age": 38 },
// { "id": 37, "firstName": "Sibelle", "lastName": "Courage", "email": "scourage10@skype.com", "gender": "Female", "city": "São Mateus", "averageGrade": 3, "age": 34 },
// { "id": 38, "firstName": "Rouvin", "lastName": "Tebbett", "email": "rtebbett11@redcross.org", "gender": "Male", "city": "Agenebode", "averageGrade": 3, "age": 14 },
// { "id": 39, "firstName": "Lind", "lastName": "Sauniere", "email": "lsauniere12@yahoo.co.jp", "gender": "Male", "city": "Zemun", "averageGrade": 4, "age": 30 },
// { "id": 40, "firstName": "Bax", "lastName": "Schankel", "email": "bschankel13@cocolog-nifty.com", "gender": "Male", "city": "Skopje", "averageGrade": 1, "age": 26 },
// { "id": 41, "firstName": "Lamont", "lastName": "Thorneley", "email": "lthorneley14@disqus.com", "gender": "Male", "city": "Santa Rita do Passa Quatro", "averageGrade": 2, "age": 31 },
// { "id": 42, "firstName": "Brear", "lastName": "Fuentes", "email": "bfuentes15@google.es", "gender": "Female", "city": "Yima", "averageGrade": 4, "age": 23 },
// { "id": 43, "firstName": "Ware", "lastName": "Loades", "email": "wloades16@sciencedaily.com", "gender": "Male", "city": "Belung Satu", "averageGrade": 2, "age": 42 },
// { "id": 44, "firstName": "Clarice", "lastName": "July", "email": "cjuly17@wiley.com", "gender": "Female", "city": "Laboulaye", "averageGrade": 4, "age": 36 },
// { "id": 45, "firstName": "Celestia", "lastName": "Gaveltone", "email": "cgaveltone18@yandex.ru", "gender": "Female", "city": "Skopje", "averageGrade": 5, "age": 12 },
// { "id": 46, "firstName": "Giulia", "lastName": "Surgener", "email": "gsurgener19@archive.org", "gender": "Female", "city": "Perístasi", "averageGrade": 4, "age": 41 },
// { "id": 47, "firstName": "Aubrie", "lastName": "Cheers", "email": "acheers1a@usda.gov", "gender": "Female", "city": "Meliau", "averageGrade": 2, "age": 38 },
// { "id": 48, "firstName": "Elenore", "lastName": "McMurtyr", "email": "emcmurtyr1b@bbc.co.uk", "gender": "Female", "city": "Chazón", "averageGrade": 1, "age": 30 },
// { "id": 49, "firstName": "Scotty", "lastName": "Zanassi", "email": "szanassi1c@un.org", "gender": "Male", "city": "Žďár", "averageGrade": 2, "age": 21 },
// { "id": 50, "firstName": "Philippine", "lastName": "De Normanville", "email": "pdenormanville1d@altervista.org", "gender": "Female", "city": "Spandaryan", "averageGrade": 2, "age": 36 },
// { "id": 51, "firstName": "Myron", "lastName": "Danilyak", "email": "mdanilyak1e@blogs.com", "gender": "Male", "city": "Abóboda", "averageGrade": 4, "age": 29 },
// { "id": 52, "firstName": "Finlay", "lastName": "Tejero", "email": "ftejero1f@wikia.com", "gender": "Male", "city": "Peuteuy", "averageGrade": 1, "age": 30 },
// { "id": 53, "firstName": "Joby", "lastName": "Chrismas", "email": "jchrismas1g@bbb.org", "gender": "Female", "city": "Mingjing", "averageGrade": 2, "age": 21 },
// { "id": 54, "firstName": "Aloin", "lastName": "Lavies", "email": "alavies1h@sciencedirect.com", "gender": "Male", "city": "Quemú Quemú", "averageGrade": 3, "age": 14 },
// { "id": 55, "firstName": "Kalil", "lastName": "Grevatt", "email": "kgrevatt1i@usda.gov", "gender": "Male", "city": "Añelo", "averageGrade": 4, "age": 39 },
// { "id": 56, "firstName": "Webb", "lastName": "Peirpoint", "email": "wpeirpoint1j@joomla.org", "gender": "Male", "city": "Yaohua", "averageGrade": 4, "age": 25 },
// { "id": 57, "firstName": "Normie", "lastName": "Espie", "email": "nespie1k@live.com", "gender": "Male", "city": "Monastyrishche", "averageGrade": 5, "age": 34 },
// { "id": 58, "firstName": "Kaleb", "lastName": "Trorey", "email": "ktrorey1l@ustream.tv", "gender": "Male", "city": "Ervedosa do Douro", "averageGrade": 5, "age": 36 },
// { "id": 59, "firstName": "Chantalle", "lastName": "Orcas", "email": "corcas1m@edublogs.org", "gender": "Female", "city": "Minante Segundo", "averageGrade": 3, "age": 23 },
// { "id": 60, "firstName": "Bailey", "lastName": "Karle", "email": "bkarle1n@taobao.com", "gender": "Male", "city": "Vale Covo", "averageGrade": 2, "age": 31 },
// { "id": 61, "firstName": "Don", "lastName": "Rame", "email": "drame1o@salon.com", "gender": "Male", "city": "Wenjiao", "averageGrade": 4, "age": 38 },
// { "id": 62, "firstName": "Jason", "lastName": "Jeffers", "email": "jjeffers1p@jugem.jp", "gender": "Male", "city": "Beicang", "averageGrade": 3, "age": 13 },
// { "id": 63, "firstName": "Oliviero", "lastName": "Harrell", "email": "oharrell1q@nydailynews.com", "gender": "Male", "city": "Saint Louis", "averageGrade": 5, "age": 12 },
// { "id": 64, "firstName": "Torrey", "lastName": "Frith", "email": "tfrith1r@nih.gov", "gender": "Male", "city": "Qŭshkŭpir", "averageGrade": 2, "age": 18 },
// { "id": 65, "firstName": "Ed", "lastName": "Broomer", "email": "ebroomer1s@skyrock.com", "gender": "Male", "city": "Qārah", "averageGrade": 3, "age": 14 },
// { "id": 66, "firstName": "Bordie", "lastName": "Gilstin", "email": "bgilstin1t@delicious.com", "gender": "Male", "city": "Quwa", "averageGrade": 3, "age": 41 },
// { "id": 67, "firstName": "Shermie", "lastName": "Harty", "email": "sharty1u@homestead.com", "gender": "Male", "city": "Morshansk", "averageGrade": 4, "age": 27 },
// { "id": 68, "firstName": "Dorette", "lastName": "Masedon", "email": "dmasedon1v@homestead.com", "gender": "Female", "city": "Skopje", "averageGrade": 2, "age": 15 },
// { "id": 69, "firstName": "Vivia", "lastName": "Gounin", "email": "vgounin1w@hugedomains.com", "gender": "Female", "city": "Kameoka", "averageGrade": 3, "age": 28 },
// { "id": 70, "firstName": "Esteban", "lastName": "Bedle", "email": "ebedle1x@aboutads.info", "gender": "Male", "city": "Tanbu", "averageGrade": 5, "age": 22 },
// { "id": 71, "firstName": "Patience", "lastName": "Oakley", "email": "poakley1y@cornell.edu", "gender": "Female", "city": "Fankeng", "averageGrade": 4, "age": 17 },
// { "id": 72, "firstName": "Kattie", "lastName": "Pressey", "email": "kpressey1z@merriam-webster.com", "gender": "Female", "city": "Siwa Oasis", "averageGrade": 4, "age": 22 },
// { "id": 73, "firstName": "Wald", "lastName": "Leeb", "email": "wleeb20@phpbb.com", "gender": "Male", "city": "Cheban", "averageGrade": 5, "age": 25 },
// { "id": 74, "firstName": "Ricardo", "lastName": "Snar", "email": "rsnar21@google.ca", "gender": "Male", "city": "Geputan", "averageGrade": 4, "age": 39 },
// { "id": 75, "firstName": "Mateo", "lastName": "Hembling", "email": "mhembling22@wix.com", "gender": "Male", "city": "Dubiecko", "averageGrade": 2, "age": 35 },
// { "id": 76, "firstName": "Leslie", "lastName": "Goldsbury", "email": "lgoldsbury23@nba.com", "gender": "Female", "city": "Vila Franca das Naves", "averageGrade": 3, "age": 42 },
// { "id": 77, "firstName": "Guthrey", "lastName": "Trelevan", "email": "gtrelevan24@soup.io", "gender": "Male", "city": "Nonghe", "averageGrade": 2, "age": 19 },
// { "id": 78, "firstName": "Fancie", "lastName": "Gillespie", "email": "fgillespie25@yelp.com", "gender": "Female", "city": "Kŭlob", "averageGrade": 5, "age": 18 },
// { "id": 79, "firstName": "Row", "lastName": "Klemencic", "email": "rklemencic26@hc360.com", "gender": "Female", "city": "Estrada", "averageGrade": 4, "age": 22 },
// { "id": 80, "firstName": "Patsy", "lastName": "Jaggli", "email": "pjaggli27@huffingtonpost.com", "gender": "Female", "city": "Kitapak", "averageGrade": 4, "age": 25 },
// { "id": 81, "firstName": "Fredra", "lastName": "Gayden", "email": "fgayden28@google.com.hk", "gender": "Female", "city": "Sedlice", "averageGrade": 3, "age": 40 },
// { "id": 82, "firstName": "Cybil", "lastName": "Sabathier", "email": "csabathier29@usgs.gov", "gender": "Female", "city": "Zalţan", "averageGrade": 2, "age": 32 },
// { "id": 83, "firstName": "Terence", "lastName": "Hitter", "email": "thitter2a@dion.ne.jp", "gender": "Male", "city": "Santa Ana", "averageGrade": 1, "age": 31 },
// { "id": 84, "firstName": "Filip", "lastName": "Wind", "email": "fwind2b@weather.com", "gender": "Male", "city": "Roissy Charles-de-Gaulle", "averageGrade": 1, "age": 33 },
// { "id": 85, "firstName": "Gordie", "lastName": "Farmery", "email": "gfarmery2c@themeforest.net", "gender": "Male", "city": "Rizal", "averageGrade": 2, "age": 15 },
// { "id": 86, "firstName": "Bruno", "lastName": "Trinkwon", "email": "btrinkwon2d@infoseek.co.jp", "gender": "Male", "city": "Lalībela", "averageGrade": 5, "age": 13 },
// { "id": 87, "firstName": "Hilario", "lastName": "Juris", "email": "hjuris2e@buzzfeed.com", "gender": "Male", "city": "La Gacilly", "averageGrade": 3, "age": 34 },
// { "id": 88, "firstName": "Eduard", "lastName": "Kevlin", "email": "ekevlin2f@prlog.org", "gender": "Male", "city": "Xingong", "averageGrade": 2, "age": 30 },
// { "id": 89, "firstName": "Jaquith", "lastName": "Noah", "email": "jnoah2g@behance.net", "gender": "Female", "city": "Washington", "averageGrade": 4, "age": 17 },
// { "id": 90, "firstName": "Melisa", "lastName": "Beautyman", "email": "mbeautyman2h@privacy.gov.au", "gender": "Female", "city": "Quilmaná", "averageGrade": 2, "age": 37 },
// { "id": 91, "firstName": "Orville", "lastName": "Riseborough", "email": "oriseborough2i@exblog.jp", "gender": "Male", "city": "Yujiawu", "averageGrade": 4, "age": 38 },
// { "id": 92, "firstName": "Tommy", "lastName": "Aggott", "email": "taggott2j@google.cn", "gender": "Male", "city": "Jaru", "averageGrade": 2, "age": 27 },
// { "id": 93, "firstName": "Missie", "lastName": "Marcham", "email": "mmarcham2k@slate.com", "gender": "Female", "city": "Arivonimamo", "averageGrade": 5, "age": 18 },
// { "id": 94, "firstName": "Cosimo", "lastName": "Mackness", "email": "cmackness2l@chron.com", "gender": "Male", "city": "Jiaozhou", "averageGrade": 5, "age": 39 },
// { "id": 95, "firstName": "Antonie", "lastName": "Coltherd", "email": "acoltherd2m@163.com", "gender": "Female", "city": "Pélla", "averageGrade": 3, "age": 27 },
// { "id": 96, "firstName": "Brandice", "lastName": "Deam", "email": "bdeam2n@cnbc.com", "gender": "Female", "city": "Zhugentan", "averageGrade": 2, "age": 30 },
// { "id": 97, "firstName": "Valdemar", "lastName": "Menel", "email": "vmenel2o@feedburner.com", "gender": "Male", "city": "Liuzhou", "averageGrade": 2, "age": 30 },
// { "id": 98, "firstName": "Rochelle", "lastName": "Moscone", "email": "rmoscone2p@arstechnica.com", "gender": "Female", "city": "Koímisi", "averageGrade": 4, "age": 16 },
// { "id": 99, "firstName": "Fabe", "lastName": "Richichi", "email": "frichichi2q@google.com.hk", "gender": "Male", "city": "Olszówka", "averageGrade": 1, "age": 22 },
// { "id": 100, "firstName": "Lanna", "lastName": "Hartle", "email": "lhartle2r@reverbnation.com", "gender": "Female", "city": "Huangban", "averageGrade": 5, "age": 39 },
// { "id": 101, "firstName": "Hurlee", "lastName": "Jaine", "email": "hjaine2s@example.com", "gender": "Male", "city": "Kurów", "averageGrade": 5, "age": 40 },
// { "id": 102, "firstName": "Eleen", "lastName": "Eldredge", "email": "eeldredge2t@gnu.org", "gender": "Female", "city": "Hidalgo", "averageGrade": 2, "age": 17 },
// { "id": 103, "firstName": "Fernando", "lastName": "Hayselden", "email": "fhayselden2u@facebook.com", "gender": "Male", "city": "Kokembang", "averageGrade": 2, "age": 38 },
// { "id": 104, "firstName": "Leigh", "lastName": "Wivell", "email": "lwivell2v@reuters.com", "gender": "Male", "city": "Mayahi", "averageGrade": 5, "age": 34 },
// { "id": 105, "firstName": "Kristofer", "lastName": "Seedhouse", "email": "kseedhouse2w@netlog.com", "gender": "Male", "city": "Skopje", "averageGrade": 5, "age": 42 },
// { "id": 106, "firstName": "Edyth", "lastName": "Tovey", "email": "etovey2x@liveinternet.ru", "gender": "Female", "city": "Dudchany", "averageGrade": 1, "age": 39 },
// { "id": 107, "firstName": "Earlie", "lastName": "Teligin", "email": "eteligin2y@npr.org", "gender": "Male", "city": "Costa de Rios Frios", "averageGrade": 2, "age": 34 },
// { "id": 108, "firstName": "Fabe", "lastName": "Castelijn", "email": "fcastelijn2z@blinklist.com", "gender": "Male", "city": "Kowŏn-ŭp", "averageGrade": 3, "age": 32 },
// { "id": 109, "firstName": "Zacherie", "lastName": "Willshere", "email": "zwillshere30@cloudflare.com", "gender": "Male", "city": "Bode Sadu", "averageGrade": 2, "age": 22 },
// { "id": 110, "firstName": "Carly", "lastName": "Usborn", "email": "cusborn31@thetimes.co.uk", "gender": "Female", "city": "North Saanich", "averageGrade": 5, "age": 30 },
// { "id": 111, "firstName": "Carlotta", "lastName": "Holby", "email": "cholby32@google.com.br", "gender": "Female", "city": "An Nāşirah", "averageGrade": 3, "age": 17 },
// { "id": 112, "firstName": "Rasla", "lastName": "Dowzell", "email": "rdowzell33@nhs.uk", "gender": "Female", "city": "Nueva Vida Sur", "averageGrade": 2, "age": 31 },
// { "id": 113, "firstName": "Clerissa", "lastName": "Couth", "email": "ccouth34@webmd.com", "gender": "Female", "city": "Dzvinogrud", "averageGrade": 3, "age": 31 },
// { "id": 114, "firstName": "Rosabella", "lastName": "Runacres", "email": "rrunacres35@seattletimes.com", "gender": "Female", "city": "Bascaron", "averageGrade": 1, "age": 25 },
// { "id": 115, "firstName": "Raina", "lastName": "Ganter", "email": "rganter36@tripadvisor.com", "gender": "Female", "city": "Jinfeng", "averageGrade": 4, "age": 25 },
// { "id": 116, "firstName": "Lolly", "lastName": "Nanninini", "email": "lnanninini37@economist.com", "gender": "Female", "city": "Kasakh", "averageGrade": 1, "age": 20 },
// { "id": 117, "firstName": "Belia", "lastName": "Sappson", "email": "bsappson38@slashdot.org", "gender": "Female", "city": "Pagak", "averageGrade": 3, "age": 20 },
// { "id": 118, "firstName": "Ferdinande", "lastName": "Clemmett", "email": "fclemmett39@usgs.gov", "gender": "Female", "city": "Sukasari", "averageGrade": 2, "age": 34 },
// { "id": 119, "firstName": "Tessa", "lastName": "Whelpdale", "email": "twhelpdale3a@redcross.org", "gender": "Female", "city": "Fram", "averageGrade": 3, "age": 14 },
// { "id": 120, "firstName": "Olva", "lastName": "Claire", "email": "oclaire3b@bizjournals.com", "gender": "Female", "city": "Kembé", "averageGrade": 3, "age": 12 },
// { "id": 121, "firstName": "Marketa", "lastName": "Annon", "email": "mannon3c@nydailynews.com", "gender": "Female", "city": "Bizhbulyak", "averageGrade": 2, "age": 40 },
// { "id": 122, "firstName": "Alistair", "lastName": "Davydychev", "email": "adavydychev3d@prnewswire.com", "gender": "Male", "city": "Zongga", "averageGrade": 4, "age": 37 },
// { "id": 123, "firstName": "Anabella", "lastName": "Lightman", "email": "alightman3e@goo.gl", "gender": "Female", "city": "Toila", "averageGrade": 4, "age": 21 },
// { "id": 124, "firstName": "Aeriell", "lastName": "Kunes", "email": "akunes3f@usgs.gov", "gender": "Female", "city": "Shangbahe", "averageGrade": 5, "age": 35 },
// { "id": 125, "firstName": "Valma", "lastName": "Doleman", "email": "vdoleman3g@drupal.org", "gender": "Female", "city": "Viking", "averageGrade": 5, "age": 23 },
// { "id": 126, "firstName": "Blondy", "lastName": "Haycraft", "email": "bhaycraft3h@typepad.com", "gender": "Female", "city": "Falefa", "averageGrade": 2, "age": 13 },
// { "id": 127, "firstName": "Dominik", "lastName": "Yeomans", "email": "dyeomans3i@ning.com", "gender": "Male", "city": "Yongfeng", "averageGrade": 3, "age": 24 },
// { "id": 128, "firstName": "Ann-marie", "lastName": "Thirlwall", "email": "athirlwall3j@hostgator.com", "gender": "Female", "city": "Skopje", "averageGrade": 3, "age": 13 },
// { "id": 129, "firstName": "Erl", "lastName": "Finker", "email": "efinker3k@histats.com", "gender": "Male", "city": "Nabari", "averageGrade": 2, "age": 22 },
// { "id": 130, "firstName": "Ralina", "lastName": "Bottrill", "email": "rbottrill3l@answers.com", "gender": "Female", "city": "Skopje", "averageGrade": 3, "age": 39 },
// { "id": 131, "firstName": "Webb", "lastName": "Dressel", "email": "wdressel3m@furl.net", "gender": "Male", "city": "Cruces de Anorí", "averageGrade": 2, "age": 39 },
// { "id": 132, "firstName": "Mike", "lastName": "Harriskine", "email": "mharriskine3n@paginegialle.it", "gender": "Male", "city": "Satte", "averageGrade": 1, "age": 28 },
// { "id": 133, "firstName": "Catlee", "lastName": "Godby", "email": "cgodby3o@yellowbook.com", "gender": "Female", "city": "Nanterre", "averageGrade": 3, "age": 41 },
// { "id": 134, "firstName": "Margit", "lastName": "Hearson", "email": "mhearson3p@hugedomains.com", "gender": "Female", "city": "Bilyayivka", "averageGrade": 3, "age": 22 },
// { "id": 135, "firstName": "Ailsun", "lastName": "Draper", "email": "adraper3q@stanford.edu", "gender": "Female", "city": "Znamenka", "averageGrade": 4, "age": 17 },
// { "id": 136, "firstName": "Rolf", "lastName": "Yaus", "email": "ryaus3r@ucsd.edu", "gender": "Male", "city": "Kallinge", "averageGrade": 3, "age": 24 },
// { "id": 137, "firstName": "Gerhardine", "lastName": "Russel", "email": "grussel3s@biglobe.ne.jp", "gender": "Female", "city": "Mtsensk", "averageGrade": 2, "age": 41 },
// { "id": 138, "firstName": "Ivar", "lastName": "McLise", "email": "imclise3t@github.io", "gender": "Male", "city": "Pak Phli", "averageGrade": 5, "age": 37 },
// { "id": 139, "firstName": "Catrina", "lastName": "McCrudden", "email": "cmccrudden3u@sakura.ne.jp", "gender": "Female", "city": "Kharagauli", "averageGrade": 4, "age": 26 },
// { "id": 140, "firstName": "Basil", "lastName": "Gidden", "email": "bgidden3v@bloomberg.com", "gender": "Male", "city": "Paris 15", "averageGrade": 3, "age": 39 },
// { "id": 141, "firstName": "Cornelia", "lastName": "O'Shaughnessy", "email": "coshaughnessy3w@hhs.gov", "gender": "Female", "city": "La Montañita", "averageGrade": 5, "age": 38 },
// { "id": 142, "firstName": "Mala", "lastName": "Thelwll", "email": "mthelwll3x@indiegogo.com", "gender": "Female", "city": "Fuling", "averageGrade": 3, "age": 31 },
// { "id": 143, "firstName": "Kleon", "lastName": "de Copeman", "email": "kdecopeman3y@devhub.com", "gender": "Male", "city": "Anuling", "averageGrade": 5, "age": 18 },
// { "id": 144, "firstName": "Jayne", "lastName": "Paydon", "email": "jpaydon3z@google.pl", "gender": "Female", "city": "Ngromo", "averageGrade": 3, "age": 17 },
// { "id": 145, "firstName": "Maurits", "lastName": "Holton", "email": "mholton40@ucoz.com", "gender": "Male", "city": "Bojongbenteng", "averageGrade": 1, "age": 23 },
// { "id": 146, "firstName": "Marne", "lastName": "Jurzyk", "email": "mjurzyk41@github.io", "gender": "Female", "city": "Jingdu", "averageGrade": 5, "age": 24 },
// { "id": 147, "firstName": "Minda", "lastName": "Tummons", "email": "mtummons42@ning.com", "gender": "Female", "city": "Sjöbo", "averageGrade": 3, "age": 12 },
// { "id": 148, "firstName": "Nat", "lastName": "Sheirlaw", "email": "nsheirlaw43@sogou.com", "gender": "Female", "city": "Kantharalak", "averageGrade": 3, "age": 39 },
// { "id": 149, "firstName": "Aimil", "lastName": "Allcock", "email": "aallcock44@shop-pro.jp", "gender": "Female", "city": "La Esperanza", "averageGrade": 1, "age": 22 },
// { "id": 150, "firstName": "Neddie", "lastName": "Geraldo", "email": "ngeraldo45@unicef.org", "gender": "Male", "city": "Quartier Militaire", "averageGrade": 1, "age": 42 },
// { "id": 151, "firstName": "Osmond", "lastName": "McCathy", "email": "omccathy46@prlog.org", "gender": "Male", "city": "Yingjiang", "averageGrade": 4, "age": 16 },
// { "id": 152, "firstName": "Alix", "lastName": "Ilive", "email": "ailive47@xrea.com", "gender": "Female", "city": "Mirskoy", "averageGrade": 3, "age": 34 },
// { "id": 153, "firstName": "Teirtza", "lastName": "Conneely", "email": "tconneely48@flavors.me", "gender": "Female", "city": "Vilufushi", "averageGrade": 1, "age": 16 },
// { "id": 154, "firstName": "Tony", "lastName": "Havard", "email": "thavard49@bbb.org", "gender": "Male", "city": "Thetford-Mines", "averageGrade": 5, "age": 35 },
// { "id": 155, "firstName": "Kirsti", "lastName": "Escudier", "email": "kescudier4a@weebly.com", "gender": "Female", "city": "Lunik", "averageGrade": 4, "age": 36 },
// { "id": 156, "firstName": "Micki", "lastName": "Hilary", "email": "mhilary4b@squidoo.com", "gender": "Female", "city": "Pilar", "averageGrade": 3, "age": 36 },
// { "id": 157, "firstName": "Clovis", "lastName": "Franklin", "email": "cfranklin4c@tiny.cc", "gender": "Female", "city": "Tarczyn", "averageGrade": 2, "age": 35 },
// { "id": 158, "firstName": "Jeremiah", "lastName": "Fried", "email": "jfried4d@example.com", "gender": "Male", "city": "Shalushka", "averageGrade": 5, "age": 22 },
// { "id": 159, "firstName": "Vally", "lastName": "Limbourne", "email": "vlimbourne4e@blogtalkradio.com", "gender": "Female", "city": "Lenghu", "averageGrade": 4, "age": 19 },
// { "id": 160, "firstName": "Olimpia", "lastName": "McMychem", "email": "omcmychem4f@pagesperso-orange.fr", "gender": "Female", "city": "Yanac", "averageGrade": 4, "age": 21 },
// { "id": 161, "firstName": "Carlina", "lastName": "Kynoch", "email": "ckynoch4g@dyndns.org", "gender": "Female", "city": "Brandfort", "averageGrade": 5, "age": 13 },
// { "id": 162, "firstName": "Osmund", "lastName": "Longmuir", "email": "olongmuir4h@google.com", "gender": "Male", "city": "Anqing", "averageGrade": 4, "age": 32 },
// { "id": 163, "firstName": "Cahra", "lastName": "Conningham", "email": "cconningham4i@wordpress.com", "gender": "Female", "city": "Nanjie", "averageGrade": 1, "age": 17 },
// { "id": 164, "firstName": "Archibold", "lastName": "Sherebrooke", "email": "asherebrooke4j@google.de", "gender": "Male", "city": "Huimin", "averageGrade": 2, "age": 23 },
// { "id": 165, "firstName": "Melisandra", "lastName": "Bartelli", "email": "mbartelli4k@sohu.com", "gender": "Female", "city": "Bunobogu", "averageGrade": 2, "age": 26 },
// { "id": 166, "firstName": "Bernice", "lastName": "Witling", "email": "bwitling4l@friendfeed.com", "gender": "Female", "city": "Kota Bharu", "averageGrade": 3, "age": 37 },
// { "id": 167, "firstName": "Byram", "lastName": "Moult", "email": "bmoult4m@bbc.co.uk", "gender": "Male", "city": "Boyany", "averageGrade": 5, "age": 29 },
// { "id": 168, "firstName": "Fredrick", "lastName": "Beacroft", "email": "fbeacroft4n@qq.com", "gender": "Male", "city": "El Zapote", "averageGrade": 5, "age": 25 },
// { "id": 169, "firstName": "Laurence", "lastName": "Carpmile", "email": "lcarpmile4o@google.es", "gender": "Male", "city": "Alcalá", "averageGrade": 1, "age": 35 },
// { "id": 170, "firstName": "Lilyan", "lastName": "Stainson", "email": "lstainson4p@elegantthemes.com", "gender": "Female", "city": "Zhenping Chengguanzhen", "averageGrade": 2, "age": 25 },
// { "id": 171, "firstName": "Selene", "lastName": "Swafield", "email": "sswafield4q@prnewswire.com", "gender": "Female", "city": "Longfeng", "averageGrade": 4, "age": 39 },
// { "id": 172, "firstName": "Herold", "lastName": "Rasp", "email": "hrasp4r@edublogs.org", "gender": "Male", "city": "Mercier", "averageGrade": 2, "age": 19 },
// { "id": 173, "firstName": "Shayne", "lastName": "Dowsett", "email": "sdowsett4s@admin.ch", "gender": "Female", "city": "Pule", "averageGrade": 2, "age": 38 },
// { "id": 174, "firstName": "Raddy", "lastName": "Wallhead", "email": "rwallhead4t@google.com.br", "gender": "Male", "city": "Ucuncha", "averageGrade": 2, "age": 29 },
// { "id": 175, "firstName": "Wilfred", "lastName": "Mara", "email": "wmara4u@google.de", "gender": "Male", "city": "Boavista", "averageGrade": 5, "age": 21 },
// { "id": 176, "firstName": "Bailie", "lastName": "Munnery", "email": "bmunnery4v@yolasite.com", "gender": "Male", "city": "Taubaté", "averageGrade": 3, "age": 20 },
// { "id": 177, "firstName": "Zebulen", "lastName": "Hanks", "email": "zhanks4w@bbb.org", "gender": "Male", "city": "Campos do Jordão", "averageGrade": 3, "age": 15 },
// { "id": 178, "firstName": "Merwin", "lastName": "Lewtey", "email": "mlewtey4x@4shared.com", "gender": "Male", "city": "Chumpi", "averageGrade": 2, "age": 30 },
// { "id": 179, "firstName": "Karel", "lastName": "Engall", "email": "kengall4y@telegraph.co.uk", "gender": "Female", "city": "Skopje", "averageGrade": 5, "age": 28 },
// { "id": 180, "firstName": "Vince", "lastName": "Beurich", "email": "vbeurich4z@wordpress.org", "gender": "Male", "city": "Skopje", "averageGrade": 1, "age": 19 },
// { "id": 181, "firstName": "Moshe", "lastName": "Craig", "email": "mcraig50@myspace.com", "gender": "Male", "city": "Kafr Zaytā", "averageGrade": 3, "age": 39 },
// { "id": 182, "firstName": "Blanch", "lastName": "Gerred", "email": "bgerred51@clickbank.net", "gender": "Female", "city": "Condado", "averageGrade": 1, "age": 28 },
// { "id": 183, "firstName": "Edlin", "lastName": "Layzell", "email": "elayzell52@spiegel.de", "gender": "Male", "city": "Petropavlovsk", "averageGrade": 1, "age": 29 },
// { "id": 184, "firstName": "Ike", "lastName": "Lawford", "email": "ilawford53@berkeley.edu", "gender": "Male", "city": "Ilići", "averageGrade": 2, "age": 30 },
// { "id": 185, "firstName": "Doretta", "lastName": "Rosenfield", "email": "drosenfield54@blinklist.com", "gender": "Female", "city": "Ketanen", "averageGrade": 3, "age": 38 },
// { "id": 186, "firstName": "Philly", "lastName": "Dionsetto", "email": "pdionsetto55@vk.com", "gender": "Female", "city": "Macinhata da Seixa", "averageGrade": 5, "age": 29 },
// { "id": 187, "firstName": "Marti", "lastName": "Knappett", "email": "mknappett56@ocn.ne.jp", "gender": "Female", "city": "Gaojingzhuang", "averageGrade": 4, "age": 28 },
// { "id": 188, "firstName": "Hervey", "lastName": "Lewinton", "email": "hlewinton57@csmonitor.com", "gender": "Male", "city": "Carrières-sur-Seine", "averageGrade": 4, "age": 29 },
// { "id": 189, "firstName": "Gwendolin", "lastName": "Leitch", "email": "gleitch58@adobe.com", "gender": "Female", "city": "Skopje", "averageGrade": 4, "age": 21 },
// { "id": 190, "firstName": "Darice", "lastName": "Butt Gow", "email": "dbuttgow59@cnet.com", "gender": "Female", "city": "Tigaherang", "averageGrade": 1, "age": 16 },
// { "id": 191, "firstName": "Sylvia", "lastName": "Taffie", "email": "staffie5a@scribd.com", "gender": "Female", "city": "Mbomba", "averageGrade": 4, "age": 37 },
// { "id": 192, "firstName": "Dag", "lastName": "Whyke", "email": "dwhyke5b@si.edu", "gender": "Male", "city": "Obihiro", "averageGrade": 1, "age": 17 },
// { "id": 193, "firstName": "Daniel", "lastName": "Langfitt", "email": "dlangfitt5c@wix.com", "gender": "Male", "city": "Pervomayskiy", "averageGrade": 3, "age": 28 },
// { "id": 194, "firstName": "Arleyne", "lastName": "Antonazzi", "email": "aantonazzi5d@yale.edu", "gender": "Female", "city": "Hekou", "averageGrade": 2, "age": 32 },
// { "id": 195, "firstName": "Kleon", "lastName": "Petyanin", "email": "kpetyanin5e@elpais.com", "gender": "Male", "city": "Kamaris", "averageGrade": 5, "age": 33 },
// { "id": 196, "firstName": "Timmy", "lastName": "Sawday", "email": "tsawday5f@rambler.ru", "gender": "Male", "city": "Semeljci", "averageGrade": 3, "age": 37 },
// { "id": 197, "firstName": "Abner", "lastName": "Mayger", "email": "amayger5g@myspace.com", "gender": "Male", "city": "Vybor", "averageGrade": 1, "age": 21 },
// { "id": 198, "firstName": "Bibbye", "lastName": "Snozzwell", "email": "bsnozzwell5h@nytimes.com", "gender": "Female", "city": "Kyaukse", "averageGrade": 2, "age": 38 },
// { "id": 199, "firstName": "Svend", "lastName": "Ditty", "email": "sditty5i@independent.co.uk", "gender": "Male", "city": "Augsburg", "averageGrade": 3, "age": 12 },
// { "id": 200, "firstName": "Raimundo", "lastName": "FitzAlan", "email": "rfitzalan5j@ameblo.jp", "gender": "Male", "city": "Huangtan", "averageGrade": 2, "age": 38 }]


// // let studentGrade = students.filter(x => x.averageGrade < 2 || x.averageGrade > 4)
// //     .map(x => `${x.firstName} ${lastName}`)

// // console.log(studentGrade);

// //male students with B and avarage grade 2
// let maleStudents = students.filter(x => x.averageGrade === 2
//     && x.firstName.startsWith("B")
//     && x.gender === "Male")
//     .map(x => `${x.firstName} ${x.lastName}`).forEach(student => console.log(student));


// let otherStudents = [
//     { firstName: "Bob", lastName: "H", grade: 5, age: 19 },
//     { firstName: "Mel", lastName: "B", grade: 2, age: 33 },
//     { firstName: "Jill", lastName: "M", grade: 3, age: 15 },
//     { firstName: "Lucky", lastName: "J", grade: 5, age: 18 },
//     { firstName: "Strike", lastName: "K", grade: 4, age: 16 },
//     { firstName: "Eric", lastName: "I", grade: 1, age: 17 },
// ]



// function sortStudents(otherStudents) {
//     for (let i = 0; i < otherStudents.length; i++) {
//         for (let j = i + 1; j < otherStudents.length; j++) {
//             if (otherStudents[i].firstName.toLowerCase() < otherStudents[j].firstName.toLowerCase()) {
//                 let temp = otherStudents[i];
//                 otherStudents[i] = otherStudents[j];
//                 otherStudents[j] = temp;
//             }
//         }
//     }
//     return otherStudents;
// }

// let sortedGrades = sortStudents(otherStudents);
// console.log(sortedGrades);


// otherStudents.sort((studnet1, student2) => student2.grade - studnet1.grade);
// console.log(otherStudents);

// let numbers = [2, 111, 11, 3, 6, 7, 9, 2, 55, 11, 22, 0, 2]
// // numbers.sort((a,b) => b-a);
// // console.log(numbers);

// function copyArray(arrayToBeCoppied){//make a copy of the array and have it be independat of original
//     let coppiedArray = [];
//     arrayToBeCoppied.forEach(number => {coppiedArray.push(number)}); 
//     return coppiedArray;
// }

// copyArray(numbers);
// console.log(copyArray(numbers));
// let sortedNums = copyArray(numbers);
// sortedNums.sort((number1, number2) => number1 - number2);
// console.log(sortedNums);

// function add (num1, num2){
//     return num1 + num2;
// }

// console.log(add(1,2));

// let object = {
//     a:1
// }

// const pureFunc = (input) => {
//     let output = input.a + 1;
//     return output;
// }

// console.log(pureFunc(object));
// console.log(object);

// let numbs = [1,2,3,4,5];

// function incrementNumbers(input){
//     let temp = [];
//     for(let i = 0; i < input.length; i++){
//         temp.push(input[i] + 1)
//     }
//     return temp;
// }

// console.log(incrementNumbers(numbs));
// console.log(numbs);


`use strict`
let num = 2;

function sum(num,num){return (num+num);};
console.log(sum(num,num));