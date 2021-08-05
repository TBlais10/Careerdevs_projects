let departments = [
    ["d001", "Marketing"],
    ["d002", "Finance"],
    ["d003", "Human Resources"],
    ["d004", "Production"],
    ["d005", "Development"],
    ["d006", "Quality Management"],
    ["d007", "Sales"],
    ["d008", "Research"],
    ["d009", "Customer Service"],
]

//index = employeeId - 10001
let employeeDepartments = [
    [10001, "d005", "1986-06-26", "9999-01-01"],
    [10002, "d007", "1996-08-03", "9999-01-01"],
    [10003, "d004", "1995-12-03", "9999-01-01"],
    [10004, "d004", "1986-12-01", "9999-01-01"],
    [10005, "d003", "1989-09-12", "9999-01-01"],
    [10006, "d005", "1990-08-05", "9999-01-01"],
    [10007, "d008", "1989-02-10", "9999-01-01"],
    [10008, "d005", "1998-03-11", "2000-07-31"],
    [10009, "d006", "1985-02-18", "9999-01-01"],
    [10010, "d004", "1996-11-24", "2000-06-26"],
    [10010, "d006", "2000-06-26", "9999-01-01"],
    [10011, "d009", "1990-01-22", "1996-11-09"],
    [10012, "d005", "1992-12-18", "9999-01-01"],
    [10013, "d003", "1985-10-20", "9999-01-01"],
    [10014, "d005", "1993-12-29", "9999-01-01"],
    [10015, "d008", "1992-09-19", "1993-08-22"],
    [10016, "d007", "1998-02-11", "9999-01-01"],
    [10017, "d001", "1993-08-03", "9999-01-01"],
    [10018, "d004", "1992-07-29", "9999-01-01"],
    [10018, "d005", "1987-04-03", "1992-07-29"],
    [10019, "d008", "1999-04-30", "9999-01-01"],
    [10020, "d004", "1997-12-30", "9999-01-01"],
    [10021, "d005", "1988-02-10", "2002-07-15"],
    [10022, "d005", "1999-09-03", "9999-01-01"],
    [10023, "d005", "1999-09-27", "9999-01-01"],
    [10024, "d004", "1998-06-14", "9999-01-01"],
    [10025, "d005", "1987-08-17", "1997-10-15"],
    [10026, "d004", "1995-03-20", "9999-01-01"],
    [10027, "d005", "1995-04-02", "9999-01-01"],
    [10028, "d005", "1991-10-22", "1998-04-06"],
    [10029, "d004", "1991-09-18", "1999-07-08"],
    [10029, "d006", "1999-07-08", "9999-01-01"],
    [10030, "d004", "1994-02-17", "9999-01-01"],
    [10031, "d005", "1991-09-01", "9999-01-01"],
    [10032, "d004", "1990-06-20", "9999-01-01"],
    [10033, "d006", "1987-03-18", "1993-03-24"],
    [10034, "d007", "1995-04-12", "1999-10-31"],
    [10035, "d004", "1988-09-05", "9999-01-01"],
    [10036, "d003", "1992-04-28", "9999-01-01"],
    [10037, "d005", "1990-12-05", "9999-01-01"],
    [10038, "d009", "1989-09-20", "9999-01-01"],
    [10039, "d003", "1988-01-19", "9999-01-01"],
    [10040, "d005", "1993-02-14", "2002-01-22"]
]

let employees = [
    [10001, "1953-09-02", "Georgi", "Facello", "M", "1986-06-26"],
    [10002, "1964-06-02", "Bezalel", "Simmel", "F", "1985-11-21"],
    [10003, "1959-12-03", "Parto", "Bamford", "M", "1986-08-28"],
    [10004, "1954-05-01", "Chirstian", "Koblick", "M", "1986-12-01"],
    [10005, "1955-01-21", "Kyoichi", "Maliniak", "M", "1989-09-12"],
    [10006, "1953-04-20", "Anneke", "Preusig", "F", "1989-06-02"],
    [10007, "1957-05-23", "Tzvetan", "Zielinski", "F", "1989-02-10"],
    [10008, "1958-02-19", "Saniya", "Kalloufi", "M", "1994-09-15"],
    [10009, "1952-04-19", "Sumant", "Peac", "F", "1985-02-18"],
    [10010, "1963-06-01", "Duangkaew", "Piveteau", "F", "1989-08-24"],
    [10011, "1953-11-07", "Mary", "Sluis", "F", "1990-01-22"],
    [10012, "1960-10-04", "Patricio", "Bridgland", "M", "1992-12-18"],
    [10013, "1963-06-07", "Eberhardt", "Terkki", "M", "1985-10-20"],
    [10014, "1956-02-12", "Berni", "Genin", "M", "1987-03-11"],
    [10015, "1959-08-19", "Guoxiang", "Nooteboom", "M", "1987-07-02"],
    [10016, "1961-05-02", "Kazuhito", "Cappelletti", "M", "1995-01-27"],
    [10017, "1958-07-06", "Cristinel", "Bouloucos", "F", "1993-08-03"],
    [10018, "1954-06-19", "Kazuhide", "Peha", "F", "1987-04-03"],
    [10019, "1953-01-23", "Lillian", "Haddadi", "M", "1999-04-30"],
    [10020, "1952-12-24", "Mayuko", "Warwick", "M", "1991-01-26"],
    [10021, "1960-02-20", "Ramzi", "Erde", "M", "1988-02-10"],
    [10022, "1952-07-08", "Shahaf", "Famili", "M", "1995-08-22"],
    [10023, "1953-09-29", "Bojan", "Montemayor", "F", "1989-12-17"],
    [10024, "1958-09-05", "Suzette", "Pettey", "F", "1997-05-19"],
    [10025, "1958-10-31", "Prasadram", "Heyers", "M", "1987-08-17"],
    [10026, "1953-04-03", "Yongqiao", "Berztiss", "M", "1995-03-20"],
    [10027, "1962-07-10", "Divier", "Reistad", "F", "1989-07-07"],
    [10028, "1963-11-26", "Domenick", "Tempesti", "M", "1991-10-22"],
    [10029, "1956-12-13", "Otmar", "Herbst", "M", "1985-11-20"],
    [10030, "1958-07-14", "Elvis", "Demeyer", "M", "1994-02-17"],
    [10031, "1959-01-27", "Karsten", "Joslin", "M", "1991-09-01"],
    [10032, "1960-08-09", "Jeong", "Reistad", "F", "1990-06-20"],
    [10033, "1956-11-14", "Arif", "Merlo", "M", "1987-03-18"],
    [10034, "1962-12-29", "Bader", "Swan", "M", "1988-09-21"],
    [10035, "1953-02-08", "Alain", "Chappelet", "M", "1988-09-05"],
    [10036, "1959-08-10", "Adamantios", "Portugali", "M", "1992-01-03"],
    [10037, "1963-07-22", "Pradeep", "Makrucki", "M", "1990-12-05"],
    [10038, "1960-07-20", "Huan", "Lortz", "M", "1989-09-20"],
    [10039, "1959-10-01", "Alejandro", "Brender", "M", "1988-01-19"],
    [10040, "1959-09-13", "Weiyi", "Meriste", "F", "1993-02-14"],
    [10041, "1959-08-27", "Uri", "Lenart", "F", "1989-11-12"],
    [10042, "1956-02-26", "Magy", "Stamatiou", "F", "1993-03-21"],
    [10043, "1960-09-19", "Yishay", "Tzvieli", "M", "1990-10-20"],
    [10044, "1961-09-21", "Mingsen", "Casley", "F", "1994-05-21"],
    [10045, "1957-08-14", "Moss", "Shanbhogue", "M", "1989-09-02"],
    [10046, "1960-07-23", "Lucien", "Rosenbaum", "M", "1992-06-20"],
    [10047, "1952-06-29", "Zvonko", "Nyanchama", "M", "1989-03-31"],
    [10048, "1963-07-11", "Florian", "Syrotiuk", "M", "1985-02-24"],
    [10049, "1961-04-24", "Basil", "Tramer", "F", "1992-05-04"],
    [10050, "1958-05-21", "Yinghua", "Dredge", "M", "1990-12-25"],
    [10051, "1953-07-28", "Hidefumi", "Caine", "M", "1992-10-15"],
    [10052, "1961-02-26", "Heping", "Nitsch", "M", "1988-05-21"],
    [10053, "1954-09-13", "Sanjiv", "Zschoche", "F", "1986-02-04"],
    [10054, "1957-04-04", "Mayumi", "Schueller", "M", "1995-03-13"],
    [10055, "1956-06-06", "Georgy", "Dredge", "M", "1992-04-27"],
    [10056, "1961-09-01", "Brendon", "Bernini", "F", "1990-02-01"],
    [10057, "1954-05-30", "Ebbe", "Callaway", "F", "1992-01-15"],
    [10058, "1954-10-01", "Berhard", "McFarlin", "M", "1987-04-13"],
    [10059, "1953-09-19", "Alejandro", "McAlpine", "F", "1991-06-26"],
    [10060, "1961-10-15", "Breannda", "Billingsley", "M", "1987-11-02"],
    [10061, "1962-10-19", "Tse", "Herber", "M", "1985-09-17"],
    [10062, "1961-11-02", "Anoosh", "Peyn", "M", "1991-08-30"],
    [10063, "1952-08-06", "Gino", "Leonhardt", "F", "1989-04-08"],
    [10064, "1959-04-07", "Udi", "Jansch", "M", "1985-11-20"],
    [10065, "1963-04-14", "Satosi", "Awdeh", "M", "1988-05-18"],
    [10066, "1952-11-13", "Kwee", "Schusler", "M", "1986-02-26"],
    [10067, "1953-01-07", "Claudi", "Stavenow", "M", "1987-03-04"],
    [10068, "1962-11-26", "Charlene", "Brattka", "M", "1987-08-07"],
    [10069, "1960-09-06", "Margareta", "Bierman", "F", "1989-11-05"],
    [10070, "1955-08-20", "Reuven", "Garigliano", "M", "1985-10-14"],
    [10071, "1958-01-21", "Hisao", "Lipner", "M", "1987-10-01"],
    [10072, "1952-05-15", "Hironoby", "Sidou", "F", "1988-07-21"],
    [10073, "1954-02-23", "Shir", "McClurg", "M", "1991-12-01"],
    [10074, "1955-08-28", "Mokhtar", "Bernatsky", "F", "1990-08-13"],
    [10075, "1960-03-09", "Gao", "Dolinsky", "F", "1987-03-19"],
    [10076, "1952-06-13", "Erez", "Ritzmann", "F", "1985-07-09"],
    [10077, "1964-04-18", "Mona", "Azuma", "M", "1990-03-02"],
    [10078, "1959-12-25", "Danel", "Mondadori", "F", "1987-05-26"],
    [10079, "1961-10-05", "Kshitij", "Gils", "F", "1986-03-27"],
    [10080, "1957-12-03", "Premal", "Baek", "M", "1985-11-19"],
    [10081, "1960-12-17", "Zhongwei", "Rosen", "M", "1986-10-30"],
    [10082, "1963-09-09", "Parviz", "Lortz", "M", "1990-01-03"],
    [10083, "1959-07-23", "Vishv", "Zockler", "M", "1987-03-31"],
    [10084, "1960-05-25", "Tuval", "Kalloufi", "M", "1995-12-15"],
    [10085, "1962-11-07", "Kenroku", "Malabarba", "M", "1994-04-09"],
    [10086, "1962-11-19", "Somnath", "Foote", "M", "1990-02-16"],
    [10087, "1959-07-23", "Xinglin", "Eugenio", "F", "1986-09-08"],
    [10088, "1954-02-25", "Jungsoon", "Syrzycki", "F", "1988-09-02"],
    [10089, "1963-03-21", "Sudharsan", "Flasterstein", "F", "1986-08-12"],
    [10090, "1961-05-30", "Kendra", "Hofting", "M", "1986-03-14"],
    [10091, "1955-10-04", "Amabile", "Gomatam", "M", "1992-11-18"],
    [10092, "1964-10-18", "Valdiodio", "Niizuma", "F", "1989-09-22"],
    [10093, "1964-06-11", "Sailaja", "Desikan", "M", "1996-11-05"],
    [10094, "1957-05-25", "Arumugam", "Ossenbruggen", "F", "1987-04-18"],
    [10095, "1965-01-03", "Hilari", "Morton", "M", "1986-07-15"],
    [10096, "1954-09-16", "Jayson", "Mandell", "M", "1990-01-14"],
    [10097, "1952-02-27", "Remzi", "Waschkowski", "M", "1990-09-15"],
    [10098, "1961-09-23", "Sreekrishna", "Servieres", "F", "1985-05-13"],
    [10099, "1956-05-25", "Valter", "Sullins", "F", "1988-10-18"],
    [10100, "1953-04-21", "Hironobu", "Haraldson", "F", "1987-09-21"],
    [10101, "1952-04-15", "Perla", "Heyers", "F", "1992-12-28"],
    [10102, "1959-11-04", "Paraskevi", "Luby", "F", "1994-01-26"],
    [10103, "1953-11-26", "Akemi", "Birch", "M", "1986-12-02"],
    [10104, "1961-11-19", "Xinyu", "Warwick", "M", "1987-04-16"],
    [10105, "1962-02-05", "Hironoby", "Piveteau", "M", "1999-03-23"],
    [10106, "1952-08-29", "Eben", "Aingworth", "M", "1990-12-19"],
    [10107, "1956-06-13", "Dung", "Baca", "F", "1994-03-22"],
    [10108, "1952-04-07", "Lunjin", "Giveon", "M", "1986-10-02"],
    [10109, "1958-11-25", "Mariusz", "Prampolini", "F", "1993-06-16"],
    [10110, "1957-03-07", "Xuejia", "Ullian", "F", "1986-08-22"],
    [10111, "1963-08-29", "Hugo", "Rosis", "F", "1988-06-19"],
    [10112, "1963-08-13", "Yuichiro", "Swick", "F", "1985-10-08"],
    [10113, "1963-11-13", "Jaewon", "Syrzycki", "M", "1989-12-24"],
    [10114, "1957-02-16", "Munir", "Demeyer", "F", "1992-07-17"],
    [10115, "1964-12-25", "Chikara", "Rissland", "M", "1986-01-23"],
    [10116, "1955-08-26", "Dayanand", "Czap", "F", "1985-05-28"],
    [10117, "1961-10-24", "Kiyotoshi", "Blokdijk", "F", "1990-05-28"],
    [10118, "1957-03-29", "Zhonghui", "Zyda", "F", "1990-09-13"],
    [10119, "1960-12-01", "Domenick", "Peltason", "M", "1986-03-14"],
    [10120, "1960-03-26", "Armond", "Fairtlough", "F", "1996-07-06"],
    [10121, "1962-07-14", "Guoxiang", "Ramsay", "M", "1989-05-03"],
    [10122, "1965-01-19", "Ohad", "Esposito", "M", "1992-12-23"],
]

let employeeSalaries = [
    [10001, 60117, "1986-06-26", "1987-06-26"],
    [10001, 62102, "1987-06-26", "1988-06-25"],
    [10001, 66074, "1988-06-25", "1989-06-25"],
    [10001, 66596, "1989-06-25", "1990-06-25"],
    [10001, 66961, "1990-06-25", "1991-06-25"],
    [10001, 71046, "1991-06-25", "1992-06-24"],
    [10001, 74333, "1992-06-24", "1993-06-24"],
    [10001, 75286, "1993-06-24", "1994-06-24"],
    [10001, 75994, "1994-06-24", "1995-06-24"],
    [10001, 76884, "1995-06-24", "1996-06-23"],
    [10001, 80013, "1996-06-23", "1997-06-23"],
    [10001, 81025, "1997-06-23", "1998-06-23"],
    [10001, 81097, "1998-06-23", "1999-06-23"],
    [10001, 84917, "1999-06-23", "2000-06-22"],
    [10001, 85112, "2000-06-22", "2001-06-22"],
    [10001, 85097, "2001-06-22", "2002-06-22"],
    [10001, 88958, "2002-06-22", "9999-01-01"],
    [10002, 65828, "1996-08-03", "1997-08-03"],
    [10002, 65909, "1997-08-03", "1998-08-03"],
    [10002, 67534, "1998-08-03", "1999-08-03"],
    [10002, 69366, "1999-08-03", "2000-08-02"],
    [10002, 71963, "2000-08-02", "2001-08-02"],
    [10002, 72527, "2001-08-02", "9999-01-01"],
    [10003, 40006, "1995-12-03", "1996-12-02"],
    [10003, 43616, "1996-12-02", "1997-12-02"],
    [10003, 43466, "1997-12-02", "1998-12-02"],
    [10003, 43636, "1998-12-02", "1999-12-02"],
    [10003, 43478, "1999-12-02", "2000-12-01"],
    [10003, 43699, "2000-12-01", "2001-12-01"],
    [10003, 43311, "2001-12-01", "9999-01-01"],
    [10004, 40054, "1986-12-01", "1987-12-01"],
    [10004, 42283, "1987-12-01", "1988-11-30"],
    [10004, 42542, "1988-11-30", "1989-11-30"],
    [10004, 46065, "1989-11-30", "1990-11-30"],
    [10004, 48271, "1990-11-30", "1991-11-30"],
    [10004, 50594, "1991-11-30", "1992-11-29"],
    [10004, 52119, "1992-11-29", "1993-11-29"],
    [10004, 54693, "1993-11-29", "1994-11-29"],
    [10004, 58326, "1994-11-29", "1995-11-29"],
    [10004, 60770, "1995-11-29", "1996-11-28"],
    [10004, 62566, "1996-11-28", "1997-11-28"],
    [10004, 64340, "1997-11-28", "1998-11-28"],
    [10004, 67096, "1998-11-28", "1999-11-28"],
    [10004, 69722, "1999-11-28", "2000-11-27"],
    [10004, 70698, "2000-11-27", "2001-11-27"],
    [10004, 74057, "2001-11-27", "9999-01-01"],
    [10005, 78228, "1989-09-12", "1990-09-12"],
    [10005, 82621, "1990-09-12", "1991-09-12"],
    [10005, 83735, "1991-09-12", "1992-09-11"],
    [10005, 85572, "1992-09-11", "1993-09-11"],
    [10005, 85076, "1993-09-11", "1994-09-11"],
    [10005, 86050, "1994-09-11", "1995-09-11"],
    [10005, 88448, "1995-09-11", "1996-09-10"],
    [10005, 88063, "1996-09-10", "1997-09-10"],
    [10005, 89724, "1997-09-10", "1998-09-10"],
    [10005, 90392, "1998-09-10", "1999-09-10"],
    [10005, 90531, "1999-09-10", "2000-09-09"],
    [10005, 91453, "2000-09-09", "2001-09-09"],
    [10005, 94692, "2001-09-09", "9999-01-01"],
    [10006, 40000, "1990-08-05", "1991-08-05"],
    [10006, 42085, "1991-08-05", "1992-08-04"],
    [10006, 42629, "1992-08-04", "1993-08-04"],
    [10006, 45844, "1993-08-04", "1994-08-04"],
    [10006, 47518, "1994-08-04", "1995-08-04"],
    [10006, 47917, "1995-08-04", "1996-08-03"],
    [10006, 52255, "1996-08-03", "1997-08-03"],
    [10006, 53747, "1997-08-03", "1998-08-03"],
    [10006, 56032, "1998-08-03", "1999-08-03"],
    [10006, 58299, "1999-08-03", "2000-08-02"],
    [10006, 60098, "2000-08-02", "2001-08-02"],
    [10006, 59755, "2001-08-02", "9999-01-01"],
    [10007, 56724, "1989-02-10", "1990-02-10"],
    [10007, 60740, "1990-02-10", "1991-02-10"],
    [10007, 62745, "1991-02-10", "1992-02-10"],
    [10007, 63475, "1992-02-10", "1993-02-09"],
    [10007, 63208, "1993-02-09", "1994-02-09"],
    [10007, 64563, "1994-02-09", "1995-02-09"],
    [10007, 68833, "1995-02-09", "1996-02-09"],
    [10007, 70220, "1996-02-09", "1997-02-08"],
    [10007, 73362, "1997-02-08", "1998-02-08"],
    [10007, 75582, "1998-02-08", "1999-02-08"],
    [10007, 79513, "1999-02-08", "2000-02-08"],
    [10007, 80083, "2000-02-08", "2001-02-07"],
    [10007, 84456, "2001-02-07", "2002-02-07"],
    [10007, 88070, "2002-02-07", "9999-01-01"],
    [10008, 46671, "1998-03-11", "1999-03-11"],
    [10008, 48584, "1999-03-11", "2000-03-10"],
    [10008, 52668, "2000-03-10", "2000-07-31"],
    [10009, 60929, "1985-02-18", "1986-02-18"],
    [10009, 64604, "1986-02-18", "1987-02-18"],
    [10009, 64780, "1987-02-18", "1988-02-18"],
    [10009, 66302, "1988-02-18", "1989-02-17"],
    [10009, 69042, "1989-02-17", "1990-02-17"],
    [10009, 70889, "1990-02-17", "1991-02-17"],
    [10009, 71434, "1991-02-17", "1992-02-17"],
    [10009, 74612, "1992-02-17", "1993-02-16"],
    [10009, 76518, "1993-02-16", "1994-02-16"],
    [10009, 78335, "1994-02-16", "1995-02-16"],
    [10009, 80944, "1995-02-16", "1996-02-16"],
    [10009, 82507, "1996-02-16", "1997-02-15"],
    [10009, 85875, "1997-02-15", "1998-02-15"],
    [10009, 89324, "1998-02-15", "1999-02-15"],
    [10009, 90668, "1999-02-15", "2000-02-15"],
    [10009, 93507, "2000-02-15", "2001-02-14"],
    [10009, 94443, "2001-02-14", "2002-02-14"],
    [10009, 94409, "2002-02-14", "9999-01-01"],
    [10010, 72488, "1996-11-24", "1997-11-24"],
    [10010, 74347, "1997-11-24", "1998-11-24"],
    [10010, 75405, "1998-11-24", "1999-11-24"],
    [10010, 78194, "1999-11-24", "2000-11-23"],
    [10010, 79580, "2000-11-23", "2001-11-23"],
    [10010, 80324, "2001-11-23", "9999-01-01"],
    [10011, 42365, "1990-01-22", "1991-01-22"],
    [10011, 44200, "1991-01-22", "1992-01-22"],
    [10011, 48214, "1992-01-22", "1993-01-21"],
    [10011, 50927, "1993-01-21", "1994-01-21"],
    [10011, 51470, "1994-01-21", "1995-01-21"],
    [10011, 54545, "1995-01-21", "1996-01-21"],
    [10011, 56753, "1996-01-21", "1996-11-09"],
    [10012, 40000, "1992-12-18", "1993-12-18"],
    [10012, 41867, "1993-12-18", "1994-12-18"],
    [10012, 42318, "1994-12-18", "1995-12-18"],
    [10012, 44195, "1995-12-18", "1996-12-17"],
    [10012, 46460, "1996-12-17", "1997-12-17"],
    [10012, 46485, "1997-12-17", "1998-12-17"],
    [10012, 47364, "1998-12-17", "1999-12-17"],
    [10012, 51122, "1999-12-17", "2000-12-16"],
    [10012, 54794, "2000-12-16", "2001-12-16"],
    [10012, 54423, "2001-12-16", "9999-01-01"],
    [10013, 40000, "1985-10-20", "1986-10-20"],
    [10013, 40623, "1986-10-20", "1987-10-20"],
    [10013, 40561, "1987-10-20", "1988-10-19"],
    [10013, 40306, "1988-10-19", "1989-10-19"],
    [10013, 43569, "1989-10-19", "1990-10-19"],
    [10013, 46305, "1990-10-19", "1991-10-19"],
    [10013, 47118, "1991-10-19", "1992-10-18"],
    [10013, 50351, "1992-10-18", "1993-10-18"],
    [10013, 49887, "1993-10-18", "1994-10-18"],
    [10013, 53957, "1994-10-18", "1995-10-18"],
    [10013, 57590, "1995-10-18", "1996-10-17"],
    [10013, 59228, "1996-10-17", "1997-10-17"],
    [10013, 59571, "1997-10-17", "1998-10-17"],
    [10013, 63274, "1998-10-17", "1999-10-17"],
    [10013, 63352, "1999-10-17", "2000-10-16"],
    [10013, 66744, "2000-10-16", "2001-10-16"],
    [10013, 68901, "2001-10-16", "9999-01-01"],
    [10014, 46168, "1993-12-29", "1994-12-29"],
    [10014, 48242, "1994-12-29", "1995-12-29"],
    [10014, 47921, "1995-12-29", "1996-12-28"],
    [10014, 50715, "1996-12-28", "1997-12-28"],
    [10014, 53228, "1997-12-28", "1998-12-28"],
    [10014, 53962, "1998-12-28", "1999-12-28"],
    [10014, 56937, "1999-12-28", "2000-12-27"],
    [10014, 59142, "2000-12-27", "2001-12-27"],
    [10014, 60598, "2001-12-27", "9999-01-01"],
    [10015, 40000, "1992-09-19", "1993-08-22"], //no longer working
    [10016, 70889, "1998-02-11", "1999-02-11"],
    [10016, 72946, "1999-02-11", "2000-02-11"],
    [10016, 76826, "2000-02-11", "2001-02-10"],
    [10016, 76381, "2001-02-10", "2002-02-10"],
    [10016, 77935, "2002-02-10", "9999-01-01"],
    [10017, 71380, "1993-08-03", "1994-08-03"],
    [10017, 75538, "1994-08-03", "1995-08-03"],
    [10017, 79510, "1995-08-03", "1996-08-02"],
    [10017, 82163, "1996-08-02", "1997-08-02"],
    [10017, 86157, "1997-08-02", "1998-08-02"],
    [10017, 89619, "1998-08-02", "1999-08-02"],
    [10017, 91985, "1999-08-02", "2000-08-01"],
    [10017, 96122, "2000-08-01", "2001-08-01"],
    [10017, 98522, "2001-08-01", "2002-08-01"],
    [10017, 99651, "2002-08-01", "9999-01-01"],
    [10018, 55881, "1987-04-03", "1988-04-02"],
    [10018, 59206, "1988-04-02", "1989-04-02"],
    [10018, 61361, "1989-04-02", "1990-04-02"],
    [10018, 61648, "1990-04-02", "1991-04-02"],
    [10018, 61217, "1991-04-02", "1992-04-01"],
    [10018, 61244, "1992-04-01", "1993-04-01"],
    [10018, 63286, "1993-04-01", "1994-04-01"],
    [10018, 65739, "1994-04-01", "1995-04-01"],
    [10018, 67519, "1995-04-01", "1996-03-31"],
    [10018, 69276, "1996-03-31", "1997-03-31"],
    [10018, 72585, "1997-03-31", "1998-03-31"],
    [10018, 72804, "1998-03-31", "1999-03-31"],
    [10018, 76957, "1999-03-31", "2000-03-30"],
    [10018, 80305, "2000-03-30", "2001-03-30"],
    [10018, 84541, "2001-03-30", "2002-03-30"],
    [10018, 84672, "2002-03-30", "9999-01-01"],
    [10019, 44276, "1999-04-30", "2000-04-29"],
    [10019, 46946, "2000-04-29", "2001-04-29"],
    [10019, 46775, "2001-04-29", "2002-04-29"],
    [10019, 50032, "2002-04-29", "9999-01-01"],
    [10020, 40000, "1997-12-30", "1998-12-30"],
    [10020, 40647, "1998-12-30", "1999-12-30"],
    [10020, 43800, "1999-12-30", "2000-12-29"],
    [10020, 44927, "2000-12-29", "2001-12-29"],
    [10020, 47017, "2001-12-29", "9999-01-01"],
    [10021, 55025, "1988-02-10", "1989-02-09"],
    [10021, 56399, "1989-02-09", "1990-02-09"],
    [10021, 59700, "1990-02-09", "1991-02-09"],
    [10021, 60851, "1991-02-09", "1992-02-09"],
    [10021, 61117, "1992-02-09", "1993-02-08"],
    [10021, 60708, "1993-02-08", "1994-02-08"],
    [10021, 63514, "1994-02-08", "1995-02-08"],
    [10021, 66249, "1995-02-08", "1996-02-08"],
    [10021, 70570, "1996-02-08", "1997-02-07"],
    [10021, 74759, "1997-02-07", "1998-02-07"],
    [10021, 77519, "1998-02-07", "1999-02-07"],
    [10021, 77237, "1999-02-07", "2000-02-07"],
    [10021, 79631, "2000-02-07", "2001-02-06"],
    [10021, 82295, "2001-02-06", "2002-02-06"], //no longer employed
    [10021, 84169, "2002-02-06", "2002-07-15"],
    [10022, 40000, "1999-09-03", "2000-09-02"],
    [10022, 39935, "2000-09-02", "2001-09-02"],
    [10022, 41348, "2001-09-02", "9999-01-01"],
    [10023, 47883, "1999-09-27", "2000-09-26"],
    [10023, 50319, "2000-09-26", "2001-09-26"],
    [10023, 50113, "2001-09-26", "9999-01-01"],
    [10024, 83733, "1998-06-14", "1999-06-14"],
    [10024, 86715, "1999-06-14", "2000-06-13"],
    [10024, 91067, "2000-06-13", "2001-06-13"],
    [10024, 94701, "2001-06-13", "2002-06-13"],
    [10024, 96646, "2002-06-13", "9999-01-01"],
    [10025, 40000, "1987-08-17", "1988-08-16"],
    [10025, 44416, "1988-08-16", "1989-08-16"],
    [10025, 48680, "1989-08-16", "1990-08-16"],
    [10025, 50120, "1990-08-16", "1991-08-16"],
    [10025, 50980, "1991-08-16", "1992-08-15"],
    [10025, 54459, "1992-08-15", "1993-08-15"],
    [10025, 54395, "1993-08-15", "1994-08-15"],
    [10025, 56643, "1994-08-15", "1995-08-15"],
    [10025, 57585, "1995-08-15", "1996-08-14"],
    [10025, 57110, "1996-08-14", "1997-08-14"],
    [10025, 57157, "1997-08-14", "1997-10-15"], // no longer employed
    [10026, 47585, "1995-03-20", "1996-03-19"],
    [10026, 51730, "1996-03-19", "1997-03-19"],
    [10026, 53682, "1997-03-19", "1998-03-19"],
    [10026, 56769, "1998-03-19", "1999-03-19"],
    [10026, 60397, "1999-03-19", "2000-03-18"],
    [10026, 64132, "2000-03-18", "2001-03-18"],
    [10026, 65415, "2001-03-18", "2002-03-18"],
    [10026, 66313, "2002-03-18", "9999-01-01"],
    [10027, 40000, "1995-04-02", "1996-04-01"],
    [10027, 39520, "1996-04-01", "1997-04-01"],
    [10027, 42382, "1997-04-01", "1998-04-01"],
    [10027, 43654, "1998-04-01", "1999-04-01"],
    [10027, 43925, "1999-04-01", "2000-03-31"],
    [10027, 45157, "2000-03-31", "2001-03-31"],
    [10027, 45771, "2001-03-31", "2002-03-31"],
    [10027, 46145, "2002-03-31", "9999-01-01"],
    [10028, 48859, "1991-10-22", "1992-10-21"],
    [10028, 50805, "1992-10-21", "1993-10-21"],
    [10028, 52082, "1993-10-21", "1994-10-21"],
    [10028, 54949, "1994-10-21", "1995-10-21"],
    [10028, 55963, "1995-10-21", "1996-10-20"],
    [10028, 57831, "1996-10-20", "1997-10-20"],
    [10028, 58502, "1997-10-20", "1998-04-06"],
    [10029, 63163, "1991-09-18", "1992-09-17"],
    [10029, 66877, "1992-09-17", "1993-09-17"],
    [10029, 69211, "1993-09-17", "1994-09-17"],
    [10029, 70624, "1994-09-17", "1995-09-17"],
    [10029, 70294, "1995-09-17", "1996-09-16"],
    [10029, 70671, "1996-09-16", "1997-09-16"],
    [10029, 73510, "1997-09-16", "1998-09-16"],
    [10029, 75773, "1998-09-16", "1999-09-16"],
    [10029, 76067, "1999-09-16", "2000-09-15"],
    [10029, 76608, "2000-09-15", "2001-09-15"],
    [10029, 77777, "2001-09-15", "9999-01-01"],
    [10030, 66956, "1994-02-17", "1995-02-17"],
    [10030, 68393, "1995-02-17", "1996-02-17"],
    [10030, 72795, "1996-02-17", "1997-02-16"],
    [10030, 76453, "1997-02-16", "1998-02-16"],
    [10030, 79290, "1998-02-16", "1999-02-16"],
    [10030, 83327, "1999-02-16", "2000-02-16"],
    [10030, 86634, "2000-02-16", "2001-02-15"],
    [10030, 87027, "2001-02-15", "2002-02-15"],
    [10030, 88806, "2002-02-15", "9999-01-01"],
    [10031, 40000, "1991-09-01", "1992-08-31"],
    [10031, 40859, "1992-08-31", "1993-08-31"],
    [10031, 41881, "1993-08-31", "1994-08-31"],
    [10031, 44191, "1994-08-31", "1995-08-31"],
    [10031, 47202, "1995-08-31", "1996-08-30"],
    [10031, 47606, "1996-08-30", "1997-08-30"],
    [10031, 50810, "1997-08-30", "1998-08-30"],
    [10031, 52675, "1998-08-30", "1999-08-30"],
    [10031, 54177, "1999-08-30", "2000-08-29"],
    [10031, 53873, "2000-08-29", "2001-08-29"],
    [10031, 56689, "2001-08-29", "9999-01-01"],
    [10032, 48426, "1990-06-20", "1991-06-20"],
    [10032, 49389, "1991-06-20", "1992-06-19"],
    [10032, 52000, "1992-06-19", "1993-06-19"],
    [10032, 53038, "1993-06-19", "1994-06-19"],
    [10032, 54336, "1994-06-19", "1995-06-19"],
    [10032, 53978, "1995-06-19", "1996-06-18"],
    [10032, 55090, "1996-06-18", "1997-06-18"],
    [10032, 57110, "1997-06-18", "1998-06-18"],
    [10032, 57926, "1998-06-18", "1999-06-18"],
    [10032, 57876, "1999-06-18", "2000-06-17"],
    [10032, 61709, "2000-06-17", "2001-06-17"],
    [10032, 65820, "2001-06-17", "2002-06-17"],
    [10032, 69539, "2002-06-17", "9999-01-01"],
    [10033, 51258, "1987-03-18", "1988-03-17"],
    [10033, 54972, "1988-03-17", "1989-03-17"],
    [10033, 55410, "1989-03-17", "1990-03-17"],
    [10033, 56095, "1990-03-17", "1991-03-17"],
    [10033, 56038, "1991-03-17", "1992-03-16"],
    [10033, 57712, "1992-03-16", "1993-03-16"],
    [10033, 60433, "1993-03-16", "1993-03-24"], //no longer employed
    [10034, 47561, "1995-04-12", "1996-04-11"],
    [10034, 51192, "1996-04-11", "1997-04-11"],
    [10034, 52687, "1997-04-11", "1998-04-11"],
    [10034, 53112, "1998-04-11", "1999-04-11"],
    [10034, 53164, "1999-04-11", "1999-10-31"], //no longer employed
    [10035, 41538, "1988-09-05", "1989-09-05"],
    [10035, 45131, "1989-09-05", "1990-09-05"],
    [10035, 45629, "1990-09-05", "1991-09-05"],
    [10035, 48360, "1991-09-05", "1992-09-04"],
    [10035, 50664, "1992-09-04", "1993-09-04"],
    [10035, 53060, "1993-09-04", "1994-09-04"],
    [10035, 56640, "1994-09-04", "1995-09-04"],
    [10035, 57621, "1995-09-04", "1996-09-03"],
    [10035, 59291, "1996-09-03", "1997-09-03"],
    [10035, 61793, "1997-09-03", "1998-09-03"],
    [10035, 62285, "1998-09-03", "1999-09-03"],
    [10035, 65332, "1999-09-03", "2000-09-02"],
    [10035, 66584, "2000-09-02", "2001-09-02"], //no longer employed.
]

//---

//Arr structure

//departments
//    ["d001", "Marketing"],

//employeeDepartments
//    [10001, "d005", "1986-06-26", "9999-01-01"],

//employees
//    [10001, "1953-09-02", "Georgi", "Facello", "M", "1986-06-26"],

//employeeSalaries
//    [10001, 60117, "1986-06-26", "1987-06-26"],

//employee ID is shared between employeeDepartments, employees, and employeeSalries
//department ID is shared between employeeDepartments and departments

//employeeDepartments is incomplete as it only catalogs 40 employees and their changes in departments

//employeeSalaries is incomplete as it only catalogs 35 employees and their changes in pay

//many of the employees are still working for this company as noted in the date shown in the 3rd index of salries and the 3rd index of employeeDeparments: "9999-01-01" will be seen often

//---


//challenge 1
//Count how many total females and males there are at this company

// we need to only iterate thru the employees arr as it is the only arr w/ gender information
// create empty global variables to populate the answers
// if difficult, refer to grades homework assigment as it poses a simlar challenge.
//there are a total of 121 employees

// let male = 0
// let female = 0
// //both of these arrs are located globaly and are only referenced inside the for loop because we only need to tally the difference in male and female and will be respectively stored here.

// for (let i = 0; i < employees.length; i++) { //we only need to look at the employees arr as it is the only arr that contains male and female data.

//     if (employees[i][4] == "M") { //4 is the sub index position for the genders of employees

//         male++ // accomplishes the same as male = male + 1.


//         //console.log(male) //designed to check for total of males
//     }

//     else if (employees[i][4] == "F") { //this is critical as once we find all the information for "M", we need to tell the program to now look for "F". We cannot assume it will do the work for us based on the previous statement.

//         female++ // accomplishes the same as female = female + 1

//         //console.log(female) //designed to check for total of females
//     }

//     //ensure the console.log is outside of the arr otherwise it will log the counting this set of arguments will do leading to the final result.
// }

// console.log(`There are ${male} male employees and ${female} female employees working at this company`)


//challenge 2
//Count the total number of employees in each department, include the department name in your logs

//we need to iterate thru 2 arrays - departments and employee departments
//reference the market cap data for how we sorted money type
// we should set a global arr to collect the total number that resets every time we check for a total
//we need to set local variables that are empty that we can change through the loops. we will need two for loops.
//there are duplicates. We need to ensure we capture those who have changed departments ( only 3 )
//key value pairs? for the departments and names?

// let deptTotals = []//becomes a multi dimentional arr that contains the department id#, the department name, and for the sake of the challenge, the number of employees in the respective department

// // let deptId = 0

// for (let i = 0; i < departments.length; i++) {

//     deptTotals.push([departments[i][0], departments[i][1], 0]) //makes this into a data report and turns it into a multi dimentional arr
// }

// //console.log(deptTotals)


// for (let i = 0; i < employeeDepartments.length; i++) {

//     //let departmentsTotal = 0

//     let empId = employeeDepartments[i][0]
//     let empDptId = employeeDepartments[i][1] //set up as a function so it works inside and outside the for loop? issue is the log w/in the loop?!

//     let deptId = empDptId[3] - 1

//     if (empDptId == departments[deptId][0] && employeeDepartments[i + 1] != undefined && empId != employeeDepartments[i + 1][0] || i === employeeDepartments.length - 1) {


//         //console.log(departments[deptId][0] , deptTotals[deptId])

//         if (departments[deptId][0] == deptTotals[deptId][0]) {

//             //deptName.push(departmentsTotal++)

//             deptTotals[deptId][2]++


//         }


//     }

//     //console.log(`The ${departments[deptId][1]} department has a total of ${departmentsTotal} employees.\n`)

//     //console.log(departmentsTotal)

// }

// console.log(deptTotals)

// for (let i = 0; i < deptTotals.length; i++) { //the purpose of this for loop is to log our results for the new deptTotals arr

//     console.log(`The ${deptTotals[i][1]} department has ${deptTotals[i][2]} employees working here.\n`)

// }


//rewriting my code based on the notes i have from gabe's presentation



//gabe's challenge 2

//what are we generating the report about? for each department
//keep a tally just for that department alone - has total located inside first loop.
//d = departments[j] inside of first for loop
//e = employeeDepartments[i] inside of second for loop
// only one if statment.
//if (e[i] == d[0]) -> total++
//console log inside of the last for loop

//Challenge 3
//Log the number of males and females in each department

//notes for challenge 3 from manny
//banners extention
//created the bus arr
//function that takes in the bus arr and itterates thru the challange numbers.
//local variables for employee + department numbers
//used a switch statement for each of the statments
//took the id numbers and pushed them into the quantity arrs
//4 for loops
//pushes the department name onto the deptName rr.
//nested forloop to compare the employee id arrs
//pushes into the according arrs

//going through employee + employeeDepartment arrs in the forloops
//department name declared is its own string
//readable doesn't always mean efficent
//department arr could just be looped thru using the method gabe gave us.

//we need to write code that makes sense to our peers. some times that takes more than one try

//same steps as challenge 2 but adding in the work for challenge 1

//rewrite code from challenge 2 but w/ for loops instead of the cheat code.
//Based on the description of the code, we still need to parse out the employees per department, then get the gender data

// let deptTotals = []

// for (let i = 0; i < departments.length; i++) {

//     let dept = departments[i]

//     deptTotals.push([dept[0], dept[1], 0, 0, 0]) //the sub indexes 3 + 4 will be for recording male and female data. .split(-1) will work for the math.

//     for (let j = 0; j < employeeDepartments.length; j++) {

//         let emplDept = employeeDepartments[j]

//         //console.log(emplDept, dept) // tests if this if statement is working. 

//         let deptIdx = dept[0][3] - 1 //creates math to use this arr as the index for iterating thru arrs dealing w/ dept ids

//         if (emplDept[1] == dept[0] && dept[0] == deptTotals[deptIdx][0]) {


//             //console.log(deptIdx)

//             deptTotals[deptIdx][2]++

//             //beginning of counting genders

//             //let femCount = deptTotals[deptIdx][4].slice(-1) //testing w/ an attempt of adding to a string using slice. failed
//             //let maleCount = deptTotals[deptIdx][3].slice(-1)

//             //console.log(femCount)
//             //console.log(maleCount)

//             for (let k = 0; k < employees.length; k++) {

//                 if (emplDept[0] == employees[k][0]) {

//                     if (employees[k][4] == "F") {

//                         deptTotals[deptIdx][4]++

//                     }


//                 }

//                 if (emplDept[0] == employees[k][0]) {

//                     if (employees[k][4] == "M") {

//                         deptTotals[deptIdx][3]++

//                     }

//                 }

//             }


//         }

//     }

// }
// //deptTotals reference =  [ 'd009', 'Customer Service', 2, 'Males: 0', 'Females: 0' ]
// console.log(deptTotals)

// for (let i = 0; i < deptTotals.length; i++) {

//     console.log(`The ${deptTotals[i][1]} department has ${deptTotals[i][3]} male employee(s) and ${deptTotals[i][4]} female employee(s).\n`)

// }

//Challenge 4
//Log the total salary for each department using only the most current data. Ie if an employee has left do not add their salary to the total

//for this challenge we want the salary totals for each department. they must be the most recent of them + still employed.
//we will need all 4 arrs - departments for keeping track of the departments, employeeDepartments so we can track which employee is working where, employees so we can keep track of their employment status, and salaries for getting the salary data.
//the data bridges will be the employee Ids, the department Ids, and the 'end of pay period' dates.
//continue w/ current method of creating a new multi dimentional arr storing all the necessary information.
//remember its not bad to hae multiple nested if statments for the purpose of not losing the data incase of corruption in the orignal data.
//could still try to track the gender data in this challenge as well for the bonus??
//maybe start working w/ objects in this challenge?

deptTotals = [] //this will be an arry that contains objects. Will need to be dealt w/ as such
//example w/ objects

//[ 'd001', 'Marketing', { males: 0, females: 0, salary: 0 } ]
//the objects are in deptTotals[i]. is always the first value placed inside of the object. see commented out console log for example below.

let totalIdx = 0

for (let i = 0; i < departments.length; i++) {

    let deptId = departments[i][0]
    let deptName = departments[i][1]

    totalIdx = deptId[3] - 1

    deptTotals.push(
        {
            deptId: deptId,
            deptName: deptName,
            employees: 0,
            males: 0,
            maleSal: 0,
            females: 0,
            femaleSal: 0,
            salary: 0
        }

        //running into issues where the terminal is not loging anything. testing w/ standard arr method.
        //[deptId, deptName, 0, 0, 0, 0] sub index 2 is employee count, sub index 3 is male employees, sub index 4 is female employees, sub index 5 is salaries
    )

    //beginning the for loops to produce what we need from this challenge:

    for (let j = 0; j < employeeDepartments.length; j++) {

        let emplDept = employeeDepartments[j]

        //console.log(emplDept, dept) // tests if this if statement is working. 

        totalIdx = deptTotals[0][3] - 1

        let deptIdx = emplDept[1][3] - 1 //creates math to use this arr as the index for iterating thru arrs dealing w/ dept ids

        //let objIdx = deptTotals.deptId[3] - 1

        //console.log(deptIdx)
        //console.log(objIdx)

        if (emplDept[1] == deptId && emplDept[3] == '9999-01-01') {

            //deptTotals[deptIdx][2]++
            deptTotals[deptIdx].employees++

            for (let k = 0; k < employeeSalaries.length; k++) {
                let emplSal = employeeSalaries[k]

                if (emplSal[3] == "9999-01-01" && emplSal[0] == emplDept[0]) {

                    // deptTotals[deptIdx][5] += emplSal[1] //for some reason this reads 5 no problem. ANSWER using wrong reference for index

                    deptTotals[deptIdx].salary += emplSal[1]

                    //for some reason the code does not read the index of deptTotal this deep into the loops

                    //bonus 5
                    for (let l = 0; l < employees.length; l++) {

                        if (emplSal[0] == employees[l][0] && employees[l][4] == 'M')  deptTotals[deptIdx].maleSal += emplSal[1]

                         else if (emplSal[0] == employees[l][0] && employees[l][4] == 'F')  deptTotals[deptIdx].femaleSal += emplSal[1]

                        }

                    }

                }

            }

        }

    }


    //for the final console log
    for (let i = 0; i < deptTotals.length; i++) {

        //console.log(deptTotals[i].deptId[3]) //better example of console loging w/ objects
        //console.log(deptTotals[i][5]) //testing as issues came
        // console.log(`The total salary for the ${deptTotals[i][1]} department was $${deptTotals[i][5].toLocaleString()} this year!\n`)

        console.log(`The total salary for the ${deptTotals[i].deptName} department was $${deptTotals[i].salary.toLocaleString()} this year!\nMale Salary: $${deptTotals[i].maleSal.toLocaleString()}\nFemale Salary: $${deptTotals[i].femaleSal.toLocaleString()}\n`)


    }

//console.log(deptTotals) //for seeing the results of the arguments


//NOTES
//Seems to be an issue /w when the second for loop is not commented. Test outside of the loop. Not an issue w/ objects.