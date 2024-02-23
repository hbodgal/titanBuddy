// apiService.js
import axios from 'axios';

const BASE_URL = 'YOUR_SERVER_BASE_URL';

export const authenticateUser = async (username, password) => {
    try {
        // const response = await axios.post(`${BASE_URL}/YOUR_AUTH_ENDPOINT`, {
        //     username,
        //     password
        // });
        // return response.data; // Assuming server responds with data.
        console.log('authenticated');
        getDepartments();
        return { "authenticated" : true}
    } catch (error) {
        console.error('Error:', error);
        throw error; // Re-throwing the error so you can handle it in the component if needed.
    }
};

// New function to get departments
export const getDepartments = async () => {
    try {
        // const response = await axios.get(`${BASE_URL}/YOUR_DEPARTMENTS_ENDPOINT`);
        const departments =   [
            { "name": "Anderson Field", "code": "AF", "latitude": "33.8863818494202", "longitude": "-117.88497158468293" },
            { "name": "Bookstore/Titan Shops", "code": "B", "latitude": "33.88196920405523", "longitude": "-117.88687397078951" },
            { "name": "Becker Amphitheater", "code": "BA", "latitude": "33.881387640410196", "longitude": "-117.88715003398144" },
            { "name": "Greenhouse Complex", "code": "BGC", "latitude": "33.87982361538679", "longitude": "-117.88743739380908" },
            { "name": "Children's Center", "code": "CC", "latitude": "33.88600328652946", "longitude": "-117.88833321810696" },
            { "name": "Carl's Jr.", "code": "CJ", "latitude": "33.879485820988904", "longitude": "-117.88381284577275" },
            { "name": "College Park", "code": "CP", "latitude": "33.87775672858179", "longitude": "-117.88344290372363" },
            { "name": "Clayes Performing Arts Center", "code": "CPAC", "latitude": "33.88067451508223", "longitude": "-117.88670733255881" },
            { "name": "Corporation Yard", "code": "CY", "latitude": "33.88425081434328", "longitude": "-117.88883130372339" },
            { "name": "Computer Science", "code": "CS", "latitude": "33.88258558057847", "longitude": "-117.88263123719899" },
            { "name": "Computer Engineering Program", "code": "CS", "latitude": "33.88282774622885", "longitude": "-117.8832285811306" },
            { "name": "Engineering", "code": "E", "latitude": "33.8828255737883", "longitude": "-117.88322254745782" },
            { "name": "Education-Classroom", "code": "EC", "latitude": "33.881360255782816", "longitude": "-117.88435280260195" },
            { "name": "Engineering & Computer Science", "code": "ECS", "latitude": "33.882373423227456", "longitude": "-117.88279881537012" },
            { "name": "Eastside Parking Structure", "code": "EPS", "latitude": "33.880451534717146", "longitude": "-117.88120587357407" },
            { "name": "ECS Quad", "code": "EPS", "latitude": "33.882376185741606", "longitude": "-117.8840608743125" },
            { "name": "Golleher Alumni House", "code": "G", "latitude": "33.88244921829362", "longitude": "-117.88937127488802" },
            { "name": "Goodwin Field", "code": "GF", "latitude": "33.887308194820115", "longitude": "-117.88528904605268" },
            { "name": "Humanities-Social Sciences", "code": "H", "latitude": "33.8806319532486", "longitude": "-117.88421413904678" },
            { "name": "Kinesiology & Health Science", "code": "KHS", "latitude": "33.88367230203364", "longitude": "-117.88581714605269" },
            { "name": "Langsdorf Hall", "code": "LH", "latitude": "33.879164212921324", "longitude": "-117.8843116371999" },
            { "name": "McCarthy Hall", "code": "MH", "latitude": "33.87972473228038", "longitude": "-117.88556875715852" },
            { "name": "Mechanical Engineering and Civil Engineering Labs", "code": "MECEL", "latitude": "33.882049542683255", "longitude": "-117.88290027082056" },
            { "name": "Parking & Transportation Office", "code": "P", "latitude": "33.88500259274584", "longitude": "-117.88943713255863" },
            { "name": "Pollak Library", "code": "PL", "latitude": "33.881434682492326", "longitude": "-117.88520275321267" },
            { "name": "Ruby Gerontology Center", "code": "RGC", "latitude": "33.883895999900275", "longitude": "-117.88327226240236" },
            { "name": "Student Health & Counseling Center", "code": "SHCC", "latitude": "33.87993934715555", "longitude": "-117.88544598517538" },
            { "name": "Student Housing Mailroom", "code": "SHMR", "latitude": "33.88367472389682", "longitude": "-117.88157034207192" },
            { "name": "Mihaylo Hall", "code": "SGMH", "latitude": "33.878685735146306", "longitude": "-117.88331845915823" },
            { "name": "Housing and Residential Engagement Office", "code": "HRE", "latitude": "33.883161188836844", "longitude": "-117.88154768245519" },
            { "name": "Student Housing", "code": "SH", "latitude": "33.883678289671806", "longitude": "-117.88205287770623" },
            { "name": "Student Rec Center", "code": "SRC", "latitude": "33.883146229634065", "longitude": "-117.88779803708273" },
            { "name": "Titan Gymnasium", "code": "TG", "latitude": "33.883503745958556", "longitude": "-117.8861132555708" },
            { "name": "Titan House", "code": "TH", "latitude": "33.883856905982", "longitude": "-117.88418663223041" },
            { "name": "Titan Stadium", "code": "TS", "latitude": "33.88674761993404", "longitude": "-117.88698454688004" },
            { "name": "Titan Student Union", "code": "TSU", "latitude": "33.88208830517615", "longitude": "-117.88897450372345" },
            { "name": "University Hall", "code": "UH", "latitude": "33.87987192394445", "longitude": "-117.88420509022961" },
            { "name": "Student Business Services", "code": "UH", "latitude": "33.87943004126346", "longitude": "-117.8842115765519" },
            { "name": "Office of Financial Aid", "code": "OFA", "latitude": "33.879754783318205", "longitude": "-117.8840242538138" },
            { "name": "University Police", "code": "UP", "latitude": "33.882406132234436", "longitude": "-117.88943734790023" },
            { "name": "Visual Arts", "code": "VA", "latitude": "33.88021497315871", "longitude": "-117.88862674605281" },
            { "name": "Nutwood Parking Structure", "code": "NPS", "latitude": "33.879208003636194", "longitude": "-117.88856223255888" },
            { "name": "State College Parking Structure", "code": "SCPS", "latitude": "33.883509639331145", "longitude": "-117.8886896364787" },
            { "name": "Parking Lot A", "code": "A", "latitude": "33.887384769163454", "longitude": "-117.88877970973589" },
            { "name": "Parking Lot G", "code": "G", "latitude": "33.88838776216633", "longitude": "-117.8865509671581" },
            { "name": "Parking Lot E", "code": "E", "latitude": "33.88212374145178", "longitude": "-117.88157228656694" },
            { "name": "Parking Lot D", "code": "D", "latitude": "33.88414679733034", "longitude": "-117.88780768141838" },
            { "name": "Juniper Hall", "code": "D", "latitude": "33.88413307483887", "longitude": "-117.88249030455177" },
            { "name": "Sexual Violence Prevention & Advocacy Services", "code": "SVAS", "latitude": "33.88548998340789", "longitude": "-117.8820578007532" },
            { "name": "Birch", "code": "B", "latitude": "33.88468195545701", "longitude": "-117.88227435789986" },
            { "name": "Fig Hall", "code": "FH", "latitude": "33.88453936069756", "longitude": "-117.88173585924024" },
            { "name": "Pine Hall", "code": "PH", "latitude": "33.883768469751075", "longitude": "-117.88274030466405" },
            { "name": "Gastronome", "code": "G", "latitude": "33.88306385149187", "longitude": "-117.88232783495576" },
            { "name": "Fullerton Marriott", "code": "F", "latitude": "33.87884199263883", "longitude": "-117.88202512147934" },
            { "name": "College of Business & Economics", "code": "CBE", "latitude": "33.87877489514845", "longitude": "-117.8831832345005" },
            { "name": "Office of Admissions", "code": "OA", "latitude": "33.87899846155552", "longitude": "-117.88468405797767" },
            { "name": "Dan Black Hall", "code": "DBH", "latitude": "33.87903857349474", "longitude": "-117.88558835177263" },
            { "name": "College of Natural Science and Mathematics", "code": "CNSM", "latitude": "33.87945714245454", "longitude": "-117.8855876985509" },
            { "name": "Student Health And Counseling Center Pharmacy", "code": "HCC", "latitude": "33.879938343246366", "longitude": "-117.88544508986918" },
            { "name": "Desert Studies Center, Department of Biological Science", "code": "DSC", "latitude": "33.87960981520707", "longitude": "-117.88571389426289" },
            { "name": "Department of Music", "code": "DM", "latitude": "33.88037959863584", "longitude": "-117.88703228480672" },
            { "name": "Becker Amphitheater", "code": "BA", "latitude": "33.88127531796418", "longitude": "-117.88713303330498" },
            { "name": "Meng Concert Hall", "code": "MCH", "latitude": "33.880603663886816", "longitude": "-117.88728201360583" },
            { "name": "Hallberg Theatre", "code": "HT", "latitude": "33.880490984692415", "longitude": "-117.88710359872391" },
            { "name": "Young Theatre", "code": "YT", "latitude": "33.880394124494096", "longitude": "-117.88740072725523" },
            { "name": "Clayes Performing Arts Center", "code": "CPA", "latitude": "33.88049657876305", "longitude": "-117.88669575749618" },
            { "name": "Recital Hall", "code": "RH", "latitude": "33.880399144594534", "longitude": "-117.88618339266652" },
            { "name": "Little Theatre", "code": "LT", "latitude": "33.88021821868433", "longitude": "-117.88616193499588" },
            { "name": "Digital Print Service", "code": "DPS", "latitude": "33.881620736835", "longitude": "-117.88509967539167" },
            { "name": "Starbucks - Library", "code": "SB", "latitude": "33.88146235133958", "longitude": "-117.88510094593785" },
            { "name": "Wells Fargo ATM", "code": "ATM", "latitude": "33.88173545304734", "longitude": "-117.8871681777371" },
            { "name": "U.S. Bank Branch", "code": "UB", "latitude": "33.881756882094706", "longitude": "-117.88691260205516" },
            { "name": "Titan Bowl & Billiards", "code": "TBB", "latitude": "33.88160979019925", "longitude": "-117.88799459407525" },
            { "name": "Amazon Hub Locker", "code": "AHL", "latitude": "33.88173226623373", "longitude": "-117.88771648046433" },
            { "name": "CSUF Campus Dining", "code": "CD", "latitude": "33.88179566002232", "longitude": "-117.88774788216337" },
            { "name": "Panda Express", "code": "PE", "latitude": "33.88189419328089", "longitude": "-117.88766406313728" },
            { "name": "Hibachi-San", "code": "HS", "latitude": "33.881981036058484", "longitude": "-117.88780219689228" },
            { "name": "Baja Fresh", "code": "BF", "latitude": "33.88187248257269", "longitude": "-117.88788266315731" },
            { "name": "TOGO's Sandwich", "code": "TGS", "latitude": "33.881927510541736", "longitude": "-117.88834185520697" },
            { "name": "Eastside Visitor Information Center", "code": "EVIC", "latitude": "33.87968902933005", "longitude": "-117.88172019972332" },
            { "name": "U.S. Army Reserves Officer Training Corps", "code": "USAROT", "latitude": "33.88415361618297", "longitude": "-117.88410840308924" },
            { "name": "Mackey Auditorium", "code": "MA", "latitude": "33.88389415383128", "longitude": "-117.88339517400708" },
            { "name": "Shapiro Wing", "code": "SW", "latitude": "33.88330360376555", "longitude": "-117.88310821580549" },
            { "name": "Intramural Field", "code": "IF", "latitude": "33.8838882890766", "longitude": "-117.88560735069707" },
            { "name": "Titan Track Complex", "code": "TTC", "latitude": "33.8851304097555", "longitude": " -117.88645094170842" },
            { "name": "Titan Sports Complex", "code": "TSC", "latitude": "33.885555829247075", "longitude": "-117.88599591199646" },
            { "name": "Goodwin Field", "code": "GF", "latitude": "33.88713998915694", "longitude": "-117.8853109116486" },
            { "name": "Corporation Yard", "code": "CY", "latitude": "33.88406360981741", "longitude": "-117.88883098484268" },
            { "name": "Shipping & Receiving", "code": "SR", "latitude": "33.88375889876557", "longitude": "-117.8886019676567" },
            { "name": "T100 - Capital Programs & Facilities Management", "code": "CPFM", "latitude": "33.88454524160617", "longitude": "-117.8885526640535" },
            { "name": "Titan Courts", "code": "TC", "latitude": "33.88419196570397", "longitude": "-117.8869992654921" },
            { "name": "Department of Kinesiology", "code": "DK", "latitude": "33.88280859508566", "longitude": "-117.88613238235124" },
            { "name": "Salsa Club", "code": "SC", "latitude": "33.88287372647914", "longitude": "-117.88627856273274" },
            { "name": "Department of Health Science", "code": "CPFM", "latitude": "33.8828753965142", "longitude": "-117.88613372345566" },
            { "name": "KHS 199 CSUF", "code": "KHS", "latitude": "33.88265792561345", "longitude": "-117.88564972434013" },
            { "name": "Nathan L. Longcrier, MS", "code": "NLL", "latitude": "33.883012475659136", "longitude": "-117.88446672968388" },
            { "name": "Student Wellness", "code": "SW", "latitude": "33.88283312516934", "longitude": "-117.88416192388277" },
            { "name": "Titan Radio", "code": "TR", "latitude": "33.88092547871467", "longitude": "-117.88507801091154" },
            { "name": "Quad", "code": "Q", "latitude": "33.88035489426351", "longitude": "-117.8852628831208" },
            { "name": "Department Of Intercollegiate Athletics", "code": "DIA", "latitude": "33.87930182923263", "longitude": "-117.88377185989138" },
            { "name": "Gordon Hall", "code": "GH", "latitude": "33.87968739016978", "longitude": "-117.88417232533361" },
            { "name": "Aloha Java", "code": "AJ", "latitude": "33.880157489877774", "longitude": "-117.88395441629014" },
            { "name": "Juice It Up!", "code": "JIU", "latitude": "33.88077717818574", "longitude": "-117.8840216157655" },
            { "name": "Department of Military Science", "code": "DMS", "latitude": "33.882763076715015", "longitude": "-117.88297392687238" },
            { "name": "Fullerton Betty", "code": "FB", "latitude": "33.883049286667315", "longitude": "-117.88192942147164" },
            { "name": "Community Market", "code": "CM", "latitude": "33.883430048912665", "longitude": "-117.88257037224979" },
            { "name": "Holly Hall", "code": "HH", "latitude": "33.88388539548246", "longitude": "-117.88170206163642" },
            { "name": "Juniper Laundry Room", "code": "JLR", "latitude": "33.88403621403294", "longitude": "-117.88201419400274" },
            { "name": "Osher Lifelong Learning Institute ", "code": "OLLI", "latitude": "33.8837049331996", "longitude": "-117.88309041776893" },
            { "name": "Commons", "code": "CO", "latitude": "33.88147967161163", "longitude": "-117.88626822095526" },
            { "name": "Titan Hall", "code": "TH", "latitude": "33.88090784930576", "longitude": "-117.89004341536096" },
            { "name": "Auxiliary Services Corp", "code": "ASC", "latitude": "33.881214264078345", "longitude": "-117.89056540871596" },
            { "name": "Associated Visitor Information Center", "code": "AVIS", "latitude": "33.88806229111271", "longitude": "-117.8857813425155" },
            { "name": "Arboretum Parking", "code": "AP", "latitude": "33.888020661448266", "longitude": "-117.88519028879865" },
            { "name": "Parking Lot C", "code": "PLC", "latitude": "33.87836009041641", "longitude": "-117.88887015743701" },
            { "name": "Parking Lot F", "code": "PLF", "latitude": "33.8803927919013", "longitude": "-117.88302566415527" },
            { "name": "Parking Lot S", "code": "PLS", "latitude": "33.876125151808615", "longitude": "-117.88333015829771" },
            { "name": "South Central Coastal Information Center", "code": "SCCIS", "latitude": "33.87970996188701", "longitude": "-117.8854635694232" },
            { "name": "Associated Visitor Information Center", "code": "AVIS", "latitude": "33.88806229111271", "longitude": "-117.8857813425155" },
            { "name": "Associated Visitor Information Center", "code": "AVIS", "latitude": "33.88806229111271", "longitude": "-117.8857813425155" },
            { "name": "Associated Visitor Information Center", "code": "AVIS", "latitude": "33.88806229111271", "longitude": "-117.8857813425155" },
            { "name": "Associated Visitor Information Center", "code": "AVIS", "latitude": "33.88806229111271", "longitude": "-117.8857813425155" },
        
        ];
        // return response.data; // Assuming server responds with the departments data.
        return departments;
    } catch (error) {
        console.error('Error:', error);
        throw error; // Re-throwing the error so you can handle it in the component if needed.
    }
};

export const getEvents = async (offset = 0, limit = 10) => {
    try {
        console.log('getting events')
        // const response = await axios.get(`${BASE_URL}/YOUR_EVENTS_ENDPOINT?offset=${offset}&limit=${limit}`);
        const events = [
            {
              "id": "1",
              "name": "Hit Your Prime",
              "date": "Tuesday, November 7",
              "time": "6:30 AM PST",
              "location": "Student Recreation Center",
              "hostName": "Associated Students, Inc.",
              "hostLogo": "https://example.com/path-to-asi-logo.png",
              "image": "https://example.com/path-to-prime-event-image.png"
            },
            {
              "id": "2",
              "name": "Morning Yoga Session",
              "date": "Wednesday, November 8",
              "time": "7:00 AM PST",
              "location": "Campus Green Park",
              "hostName": "Yoga Club",
              "hostLogo": "https://example.com/path-to-yoga-club-logo.png",
              "image": "https://example.com/path-to-yoga-session-image.png"
            },
            {
              "id": "3",
              "name": "Tech Talk: Future of AI",
              "date": "Thursday, November 9",
              "time": "4:00 PM PST",
              "location": "Engineering Building",
              "hostName": "Computer Science Department",
              "hostLogo": "https://example.com/path-to-cs-department-logo.png",
              "image": "https://example.com/path-to-tech-talk-event-image.png"
            },
            {
              "id": "4",
              "name": "Leadership Workshop",
              "date": "Friday, November 10",
              "time": "2:00 PM PST",
              "location": "Student Union",
              "hostName": "Leadership and Development",
              "hostLogo": "https://example.com/path-to-leadership-logo.png",
              "image": "https://example.com/path-to-workshop-image.png"
            },
            {
              "id": "5",
              "name": "Poetry Slam Night",
              "date": "Saturday, November 11",
              "time": "8:00 PM PST",
              "location": "Arts Center",
              "hostName": "Literature Club",
              "hostLogo": "https://example.com/path-to-literature-club-logo.png",
              "image": "https://example.com/path-to-poetry-slam-image.png"
            },
            {
              "id": "6",
              "name": "Sustainable Living Fair",
              "date": "Sunday, November 12",
              "time": "11:00 AM PST",
              "location": "Campus Plaza",
              "hostName": "Eco Club",
              "hostLogo": "https://example.com/path-to-eco-club-logo.png",
              "image": "https://example.com/path-to-sustainable-fair-image.png"
            },
            {
              "id": "7",
              "name": "International Food Festival",
              "date": "Monday, November 13",
              "time": "12:00 PM PST",
              "location": "Central Quad",
              "hostName": "Culinary Arts Society",
              "hostLogo": "https://example.com/path-to-culinary-arts-logo.png",
              "image": "https://example.com/path-to-food-festival-image.png"
            },
            {
              "id": "8",
              "name": "Chess Tournament",
              "date": "Tuesday, November 14",
              "time": "5:00 PM PST",
              "location": "Library Commons",
              "hostName": "Chess Club",
              "hostLogo": "https://example.com/path-to-chess-club-logo.png",
              "image": "https://example.com/path-to-chess-tournament-image.png"
            },
            {
              "id": "9",
              "name": "Start-up Pitch Night",
              "date": "Wednesday, November 15",
              "time": "7:00 PM PST",
              "location": "Business Hall",
              "hostName": "Entrepreneurs Network",
              "hostLogo": "https://example.com/path-to-entrepreneurs-network-logo.png",
              "image": "https://example.com/path-to-pitch-night-image.png"
            },
            {
              "id": "10",
              "name": "Community Volunteering Day",
              "date": "Thursday, November 16",
              "time": "9:00 AM PST",
              "location": "Community Center",
              "hostName": "Volunteers Guild",
              "hostLogo": "https://example.com/path-to-volunteers-guild-logo.png",
              "image": "https://example.com/path-to-volunteering-day-image.png"
            }
          ];          
        return events;
    } catch (error) {
        console.error('Error fetching events:', error);
        throw error;
    }
};
