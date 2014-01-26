angular.module('starter.services', [])


.factory('ContactService', function() {
  var contacts = [

{
    id: 0,
    WardNumber: 1,
    WardName: 'Kempegowda Ward',
    AssemblyConstituency: 'Yelahanka',
    Name: 'Sri. Y.N Ashwath',
    Address: '#722, Deshada Pete Road, Yelahanka, Bangalore-64',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=1.jpg',
    PhoneNumber: '9980326668'
},
{
    id: 1,
    WardNumber: 2,
    WardName: 'Choudeshwari Ward',
    AssemblyConstituency: 'Yelahanka',
    Name: 'Smt. K.V. Yashoda',
    Address: '#2/100, 1st main road, Kamakshamma Layout, Yelahanka, Bangalore-64',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=2.jpg',
    PhoneNumber: '9448508430'
},
{
    id: 2,
    WardNumber: 3,
    WardName: 'Attur',
    AssemblyConstituency: 'Yelahanka',
    Name: 'Smt. K.N Geetha ShashiKumar',
    Address: '#23, Ananthapura, Singanayakanahalli Post, Bangalore',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=3.jpg',
    PhoneNumber: '9845388873'
},
{
    id: 3,
    WardNumber: 4,
    WardName: 'Yelahanka Sub Division',
    AssemblyConstituency: 'Yelahanka',
    Name: 'Sri. M. Muniraju',
    Address: '#520, 1st main road, Chikkabommasandra, G.K.V.K Post, Bangalore-65',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=4.jpg',
    PhoneNumber: '9845151979'
},
{
    id: 4,
    WardNumber: 5,
    WardName: 'Jakkur',
    AssemblyConstituency: 'Byatarayanapura',
    Name: 'Sri. K.A. Muneedra Kumar',
    Address: '#208/1, Kogilu, Yelahanka Post, Bangalore North Taluk',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=5.jpg',
    PhoneNumber: '9845752211'
},
{
    id: 5,
    WardNumber: 6,
    WardName: 'Thanisandra',
    AssemblyConstituency: 'Byatarayanapura',
    Name: 'Smt. Lalitha',
    Address: '#67, Rachenahalli, K.R.Puram Hobli, Bangalore East Taluk, Bangalore-77',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=6.jpg',
    PhoneNumber: '9343753664'
},
{
    id: 6,
    WardNumber: 7,
    WardName: 'Byatarayanapura',
    AssemblyConstituency: 'Byatarayanapura',
    Name: 'Smt. Indira',
    Address: 'Balakrishna Farmhouse, Sahakaranagar post, Bangalore-92',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=7.jpg',
    PhoneNumber: '9243110161'
},
{
    id: 7,
    WardNumber: 8,
    WardName: 'Kodigehalli',
    AssemblyConstituency: 'Byatarayanapura',
    Name: 'Sri. Ashwath Narayan Gowda',
    Address: '# E-104, Kodigehalli, Bangalore-92',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=8.jpg',
    PhoneNumber: '9448078232'
},
{
    id: 8,
    WardNumber: 9,
    WardName: 'Vidyaranyapura',
    AssemblyConstituency: 'Byatarayanapura',
    Name: 'Smt. K. Nandini',
    Address: '# E-321, 1st cross, Tindlu, Vidyaranyapura post, Bangalore-97',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=9.jpg',
    PhoneNumber: '9243430694'
},
{
    id: 9,
    WardNumber: 10,
    WardName: 'Doddabommasandra',
    AssemblyConstituency: 'Byatarayanapura',
    Name: 'Sri. M.E. Pillappa',
    Address: '2nd main road, Ramanna Garden, Bommasandra, Bangalore-97',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=10.jpg',
    PhoneNumber: '9845168272'
},
{
    id: 10,
    WardNumber: 11,
    WardName: 'Kuvempunagar',
    AssemblyConstituency: 'Byatarayanapura',
    Name: 'Smt. K.R. Yashodamma',
    Address: '#1064, 8th cross, 7th block, H.M.T. Layout, Vidyaranyapura Post, Bangalore-97',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=11.jpg',
    PhoneNumber: '9449022996'
},
{
    id: 11,
    WardNumber: 12,
    WardName: 'Shettihalli',
    AssemblyConstituency: 'Dasarahalli',
    Name: 'Smt. Sharadamma',
    Address: '#168/A, Abbigere, Chikkabanavara Post, Bangalore-90',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=12.jpg',
    PhoneNumber: '9008889667'
},
{
    id: 12,
    WardNumber: 13,
    WardName: 'Mallasandra',
    AssemblyConstituency: 'Dasarahalli',
    Name: 'Smt. R.P Shashi',
    Address: '#97/3, Mallasandra, Ashwath Katte Road, T. Dasarahalli, Bangalore-57',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=13.jpg',
    PhoneNumber: '9880173757'
},
{
    id: 13,
    WardNumber: 14,
    WardName: 'Bagalkunte',
    AssemblyConstituency: 'Dasarahalli',
    Name: 'Sri. B.R Chandrashekar',
    Address: '# 194, 19th cross, Bagalkunte, Bangalore-73',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=14.jpg',
    PhoneNumber: '9342954041'
},
{
    id: 14,
    WardNumber: 15,
    WardName: 'T. Dasarahalli',
    AssemblyConstituency: 'Dasarahalli',
    Name: 'Smt. Puttamma',
    Address: '# E-322/1, K.K Road, T.Dasarahalli, Bangalore-57',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=15.jpg',
    PhoneNumber: '9448234101'
},
{
    id: 15,
    WardNumber: 16,
    WardName: 'Jalahalli',
    AssemblyConstituency: 'Rajarajeshwari nagar',
    Name: 'Sri. R. Narayana Swamy',
    Address: '# 219, 3rd cross, R.M.V 2nd stage, 2nd block, Bangalore-94',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=16.jpg',
    PhoneNumber: '9844017010'
},
{
    id: 16,
    WardNumber: 17,
    WardName: 'J.P Garden',
    AssemblyConstituency: 'Rajarajeshwari nagar',
    Name: 'Sri. B.R. Nanjundappa',
    Address: '# 652/8, Bandappa road, Yashwanthpura, Bangaloe-22',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=17.jpg',
    PhoneNumber: '9845056540'
},
{
    id: 17,
    WardNumber: 18,
    WardName: 'Radha Krishna Temple Ward',
    AssemblyConstituency: 'Hebbal',
    Name: 'Sri. D. Venkatesha',
    Address: 'Vishwanatha Nagenahalli, R.T Nagar Post, Bangalore-32',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=18.jpg',
    PhoneNumber: '9243446179'
},
{
    id: 18,
    WardNumber: 19,
    WardName: 'Sanjayanagar',
    AssemblyConstituency: 'Hebbal',
    Name: 'Sri. N.M Krishnamurthy',
    Address: '#133, Muneshwara Temple street, R.M.V 2nd stage, Nagashettihalli, Bangalore-94',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=19.jpg',
    PhoneNumber: '9480454138'
},
{
    id: 19,
    WardNumber: 20,
    WardName: 'Ganganagar',
    AssemblyConstituency: 'Hebbal',
    Name: 'Sri. V. Anand',
    Address: '# 40, 5th main road, Krishnappa Block, Ganganagar, Bangalore-32',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=20.jpg',
    PhoneNumber: '9900000451'
},
{
    id: 20,
    WardNumber: 21,
    WardName: 'Hebbal',
    AssemblyConstituency: 'Hebbal',
    Name: 'Sri. C.R. Jayappa Reddy',
    Address: '#1, Manjunatha Nilaya, 287 E, Near Bus Stand, Cholanayakanahalli, Bangalore-3',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=21.jpg',
    PhoneNumber: '9243100746'
},
{
    id: 21,
    WardNumber: 22,
    WardName: 'Vishwanatha Nagenahalli',
    AssemblyConstituency: 'Hebbal',
    Name: 'Smt. Munirathnamma',
    Address: '#1, 2nd cross, Seethappa Layout, Manorayanapalya, R.T Nagar Post, Bangalore-32',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=22.jpg',
    PhoneNumber: '9341442274'
},
{
    id: 22,
    WardNumber: 23,
    WardName: 'Nagavara',
    AssemblyConstituency: 'Sarvagna Nagar',
    Name: 'Smt. Irshaad Begum',
    Address: '# 177, 2nd main road, 2nd cross, 1st stage, 1st block, H.B.R Layout, Bangalore',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=23.jpg',
    PhoneNumber: '9591538890'
},
{
    id: 23,
    WardNumber: 24,
    WardName: 'H.B.R Layout',
    AssemblyConstituency: 'Sarvagna Nagar',
    Name: 'Sri. B Govindaraju',
    Address: '# 515/1, T.C.H College Road, Nagavara Post, Bangalore-45',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=24.jpg',
    PhoneNumber: '9845169809'
},
{
    id: 24,
    WardNumber: 25,
    WardName: 'Horamavu',
    AssemblyConstituency: 'K.R. Puram',
    Name: 'Smt. Tejaswini N Raju',
    Address: '#95, Horamavu agara, Bangalore-43',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=25.jpg',
    PhoneNumber: '9448386816'
},
{
    id: 25,
    WardNumber: 26,
    WardName: 'Ramamurthy nagar',
    AssemblyConstituency: 'K.R. Puram',
    Name: 'Sri. M Revanna',
    Address: '#4, Kalkere, Horamavu Post, Bangalore',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=26.jpg',
    PhoneNumber: '9448080231'
},
{
    id: 26,
    WardNumber: 27,
    WardName: 'Banaswadi',
    AssemblyConstituency: 'Sarvagna Nagar',
    Name: 'Sri. A. Kodanda Reddy',
    Address: '# 642, 10th B main road, Doddabanaswadi, Bangalore-43',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=27.jpg',
    PhoneNumber: '9845021879'
},
{
    id: 27,
    WardNumber: 28,
    WardName: 'Kammanahalli',
    AssemblyConstituency: 'Sarvagna Nagar',
    Name: 'Sri. M.C. Srinivas',
    Address: '#1, RS Palya, Kammanahalli Main Road, near lakshmi party hall, MS Nagara Post, Bangalore-33',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=28.jpg',
    PhoneNumber: '9844081236'
},
{
    id: 28,
    WardNumber: 29,
    WardName: 'Kacharakanahalli',
    AssemblyConstituency: 'Sarvagna Nagar',
    Name: 'Sri. Padmanabh Reddy',
    Address: '# 27, 5th cross, 3rd Block, H.B.R Layout, Bangalore-84',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=29.jpg',
    PhoneNumber: '9341225174'
},
{
    id: 29,
    WardNumber: 30,
    WardName: 'Kadugondanahalli',
    AssemblyConstituency: 'Sarvagna Nagar',
    Name: 'Smt. Shaheen Taj',
    Address: '# 193 M, Vinobhanagar, K.G.Halli, Bangalore-45',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=30.jpg',
    PhoneNumber: '9343730468'
},
{
    id: 30,
    WardNumber: 31,
    WardName: 'Kushaal nagar',
    AssemblyConstituency: 'Pulikeshinagar',
    Name: 'Smt. Noor Jahaan',
    Address: '#31/9, Sollapuramma Temple Road, Srinivasanagar, Bangalore-45',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=31.jpg',
    PhoneNumber: '9986431786'
},
{
    id: 31,
    WardNumber: 32,
    WardName: 'Kavalbyrasandra',
    AssemblyConstituency: 'Pulikeshinagar',
    Name: 'Smt. Y.R. Gowramma',
    Address: '# 106, Kavalbyrasandra, Bangalore-32',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=32.jpg',
    PhoneNumber: '9845013553'
},
{
    id: 32,
    WardNumber: 33,
    WardName: 'Manorayanapalya',
    AssemblyConstituency: 'Hebbal',
    Name: 'Smt. Foujiya Begum',
    Address: '#90, Maccan Road, Bangalore-1',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=33.jpg',
    PhoneNumber: '9448455538'
},
{
    id: 33,
    WardNumber: 34,
    WardName: 'Gangenahalli',
    AssemblyConstituency: 'Hebbal',
    Name: 'Sri. M. Nagaraja',
    Address: '# 37, 3rd Main road, Gangenahalli Layout, Bangalore-32',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=34.jpg',
    PhoneNumber: '9449646246'
},
{
    id: 34,
    WardNumber: 35,
    WardName: 'Aramane Nagar',
    AssemblyConstituency: 'malleswaram',
    Name: 'Dr. M.S Shivaprasad',
    Address: '#47, 3rd Main Road, AGS Layout, RMV 2nd Stage, Bangalore - 54',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=35.jpg',
    PhoneNumber: '9845544166'
},
{
    id: 35,
    WardNumber: 36,
    WardName: 'Mattikere',
    AssemblyConstituency: 'malleswaram',
    Name: 'Sri. Muniswamy Gowda',
    Address: '# 6, 4th main, 11th Main road, Mattikere Layout, Bangalore-54',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=36.jpg',
    PhoneNumber: '9448643811'
},
{
    id: 36,
    WardNumber: 37,
    WardName: 'Yashwanthpura',
    AssemblyConstituency: 'Rajarajeshwari nagar',
    Name: 'Sri. Munirathna',
    Address: '# 147, 11th cross, Malleshwaram, Bangalore-3',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=37.jpg',
    PhoneNumber: '9844400531'
},
{
    id: 37,
    WardNumber: 38,
    WardName: 'H.M.T Ward',
    AssemblyConstituency: 'Rajarajeshwari nagar',
    Name: 'Smt. Asha Suresh',
    Address: '# 745, Shanth Nilaya, Ashwath Katte Road, Peenya 2nd Block, 1st stage, Bangalore-58',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=38.jpg',
    PhoneNumber: '9845711899'
},
{
    id: 38,
    WardNumber: 39,
    WardName: 'Chokkasandra',
    AssemblyConstituency: 'Dasarahalli',
    Name: 'Sri. M. Muniswamy',
    Address: '#32, Mahimappa Vidya Samste Compound, Chokkasandra main road, Bangalore-57',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=39.jpg',
    PhoneNumber: '9448087651'
},
{
    id: 39,
    WardNumber: 40,
    WardName: 'Doddabidirekallu',
    AssemblyConstituency: 'Rajarajeshwari nagar',
    Name: 'Smt. T.A.Gayithree',
    Address: '#121, "Madilu", 1st E Main Road, 1st Block, Nagarbhavi, 2nd phase, Bangalore - 72',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=40.jpg',
    PhoneNumber: '9341236279'
},
{
    id: 40,
    WardNumber: 41,
    WardName: 'Peenay Industrial Area',
    AssemblyConstituency: 'Dasarahalli',
    Name: 'Sri. K.L Thimmananjayya',
    Address: '#25, 1st Main Road, 3rd Cross, Vidhana Soudha Layout, Laggerre, Bangalore - 58',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=41.jpg',
    PhoneNumber: '9845403533'
},
{
    id: 41,
    WardNumber: 42,
    WardName: 'Lakshmidevinagara',
    AssemblyConstituency: 'Rajarajeshwari nagar',
    Name: 'Sri. Thimmaraju',
    Address: 'Old No. 2/1, New No. 28, 1st cross, Lakshmidevinagar, Bangalore-96',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=42.jpg',
    PhoneNumber: '900171286'
},
{
    id: 42,
    WardNumber: 43,
    WardName: 'Nandini Layout',
    AssemblyConstituency: 'Mahalakshmipura',
    Name: 'Sri. M Nagaraj',
    Address: '#3, 16th C Mainroad, J.C. Nagar, Mahalakshmipuram, Bangalore-86',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=43.jpg',
    PhoneNumber: '9448370141'
},
{
    id: 43,
    WardNumber: 44,
    WardName: 'Marappana Palya',
    AssemblyConstituency: 'Mahalakshmipura',
    Name: 'Smt. Lakshmi',
    Address: '# 53, 4th Main road, 2nd cross, Shankara Nagar, Mahalakshmi Layout, Bangalore-96',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=44.jpg',
    PhoneNumber: '9980875542'
},
{
    id: 44,
    WardNumber: 45,
    WardName: 'Malleshwaram',
    AssemblyConstituency: 'malleswaram',
    Name: 'Sri. N. Jayapala',
    Address: '# 28, 6th cross, 3rd main road, Gokula Layout, Divaanara Palya, Bangalore-54',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=45.jpg',
    PhoneNumber: '9379799099'
},
{
    id: 45,
    WardNumber: 46,
    WardName: 'Jayachamarajendra Nagar',
    AssemblyConstituency: 'Hebbal',
    Name: 'Sri. N. Govindraju',
    Address: '#101, "Divyashree Residency", 1st floor, H.D. Devegowda Road, RT Nagar Post, Bangalore - 32',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=46.jpg',
    PhoneNumber: '9845133943'
},
{
    id: 46,
    WardNumber: 47,
    WardName: 'Devarajeevanahalli',
    AssemblyConstituency: 'Pulikeshinagar',
    Name: 'Sri.R. Sampath Raj.',
    Address: '#5, Murugesh Modaliyaar Road, Frazor Town, Bangalore-5',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=47.jpg',
    PhoneNumber: '9845207879'
},
{
    id: 47,
    WardNumber: 48,
    WardName: 'Muneshwara Nagar',
    AssemblyConstituency: 'Pulikeshinagar',
    Name: 'Smt. S. Kriyaa Shylaja',
    Address: '#32, E-19, C Ramayya Building, Kaval Byrasandra, R.T.Nagar Post, Banglore-32',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=48.jpg',
    PhoneNumber: '9845307991'
},
{
    id: 48,
    WardNumber: 49,
    WardName: 'Lingarajapura',
    AssemblyConstituency: 'Sarvagna Nagar',
    Name: 'Smt. Lavanya Ganesh Reddy',
    Address: '#795, 10th main road, 3rd Block, H.B.R Layout, Bangalore-43',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=49.jpg',
    PhoneNumber: '9980165668'
},
{
    id: 49,
    WardNumber: 50,
    WardName: 'Benniganahalli',
    AssemblyConstituency: 'C.V. Raman Nagar',
    Name: 'Sri. N. Dayanand',
    Address: '129, 3rd cross, 5th main road, O.M.B.R. Layout, Lalbahadur Nagar, B Channasandra, Bangalore-43',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=50.jpg',
    PhoneNumber: '9886785719'
},
{
    id: 50,
    WardNumber: 51,
    WardName: 'Vignanapura',
    AssemblyConstituency: 'K.R. Puram',
    Name: 'Sri. Sugumar (Sugun)',
    Address: '#393, Munikalappa Layout, Vinayaka Street, Ramamurthynagar, Bangalore-16',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=51.jpg',
    PhoneNumber: '9886634076'
},
{
    id: 51,
    WardNumber: 52,
    WardName: 'K.R.Puram',
    AssemblyConstituency: 'K.R.Puram',
    Name: 'Sri. N.Veeranna',
    Address: '#100, 5tth cross, Battarahalli, Veergonagar Post, Bangalore-49',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=52.jpg',
    PhoneNumber: '9341262299'
},
{
    id: 52,
    WardNumber: 53,
    WardName: 'Basavanapura',
    AssemblyConstituency: 'K.R. Puram',
    Name: 'Smt. K Poornima',
    Address: '#111, Kshamadaritri Nilaya, Devasandra main road, K.R.pura, Bangalore-36',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=53.jpg',
    PhoneNumber: '9886468169'
},
{
    id: 53,
    WardNumber: 54,
    WardName: 'Hoodi',
    AssemblyConstituency: 'Mahadevapura',
    Name: 'Sri. B.A. Basavaraju',
    Address: '#331, Srirama Nilaya, Byrathi, Doddagubbi Post, Bangalore-49',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=54.jpg',
    PhoneNumber: '9844029229'
},
{
    id: 54,
    WardNumber: 55,
    WardName: 'Devasandra',
    AssemblyConstituency: 'K.R. Puram',
    Name: 'Smt. R. Manjula Devi',
    Address: '#1, Lakshmi Venkateshwara Nilaya, 1st cross, K.T.B Layout, K.R.Pura, Bangalore-36',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=55.jpg',
    PhoneNumber: '9980096006'
},
{
    id: 55,
    WardNumber: 56,
    WardName: 'A.Narayanapura',
    AssemblyConstituency: 'K.R. Puram',
    Name: 'Sri. S.S Prasad',
    Address: '#5, Giddamma Layout, Akash Nagar, A-Narayanapura, Bangalore-16',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=56.jpg',
    PhoneNumber: '9342529020'
},
{
    id: 56,
    WardNumber: 57,
    WardName: 'C.V Raman Nagar',
    AssemblyConstituency: 'C.V. Raman Nagar',
    Name: 'Sri. M Krishnappa',
    Address: '#51, 1st cross, 5th mainroad, Malleshanapalya, New Thimmasandra, Bangalore-75',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=57.jpg',
    PhoneNumber: '9341242523'
},
{
    id: 57,
    WardNumber: 58,
    WardName: 'New Thippasandra',
    AssemblyConstituency: 'C.V. Raman Nagar',
    Name: 'Smt. Sumithra',
    Address: '#110, 4th mainroad, New Thippasandra, J.M.Palya, Bangalore-75',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=58.jpg',
    PhoneNumber: '9886763819'
},
{
    id: 58,
    WardNumber: 59,
    WardName: 'Maruthi Seva Nagar',
    AssemblyConstituency: 'Sarvagna Nagar',
    Name: 'Sri. R. Rajendran',
    Address: '#491, B.S. English School Road, A.R. Road, Kammanahali, Bangalore-84',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=59.jpg',
    PhoneNumber: '9886536901'
},
{
    id: 59,
    WardNumber: 60,
    WardName: 'Sagayapuram',
    AssemblyConstituency: 'Pulikeshinagar',
    Name: 'Smt. V.Palaniyammal',
    Address: '#40, Kasturi Bai Nagar, Shyampura mainroad, K.G Halli, Bangalore-45',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=60.jpg',
    PhoneNumber: '9980591064'
},
{
    id: 60,
    WardNumber: 61,
    WardName: 'S.K Garden',
    AssemblyConstituency: 'Pulikeshinagar',
    Name: 'Smt. Devikarani Sridhar',
    Address: '#32, 4th mainroad, 2nd cross, S.K. Garden, Bangalore-46',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=61.jpg',
    PhoneNumber: '9845843173'
},
{
    id: 61,
    WardNumber: 62,
    WardName: 'Ramaswamy Palya',
    AssemblyConstituency: 'Shivajinagar',
    Name: 'Sri. N. Chandra',
    Address: 'Old no.3-4,New no.12, 4th cross,Ramakka 1st block,Benson Town(Post), Bangalore-46',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=62.jpg',
    PhoneNumber: '9980088207'
},
{
    id: 62,
    WardNumber: 63,
    WardName: 'Jayamahal',
    AssemblyConstituency: 'Shivajinagar',
    Name: 'Sri.M.K Gunashekar',
    Address: '#17, Annepuram main road, Sudhamanagar, Bangalore',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=63.jpg',
    PhoneNumber: '9844131760'
},
{
    id: 63,
    WardNumber: 64,
    WardName: 'Rajmahal Guttahalli',
    AssemblyConstituency: 'Malleshwaram',
    Name: 'Smt. M. Vijaya Kumari',
    Address: '#07, 4th main road, Dodda Byrappa road,Rajmahal Guttahalli, Bangalore-03',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=64.jpg',
    PhoneNumber: '9611702188'
},
{
    id: 64,
    WardNumber: 65,
    WardName: 'Kadu Malleshwaram',
    AssemblyConstituency: 'Malleshwaram',
    Name: 'Sri. G.Manjunath Raju',
    Address: '#G-2, 4th main road, Ganesh Residency, Malleshwaram, Bangalore-3',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=65.jpg',
    PhoneNumber: '9972000168'
},
{
    id: 65,
    WardNumber: 66,
    WardName: 'Subramanya Nagar',
    AssemblyConstituency: 'Malleshwaram',
    Name: 'Smt. S. Shashikala Kiran',
    Address: '#1628, 6th main road, E Block, 2nd stage, Rajajinagar, Bangalore-10',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=66.jpg',
    PhoneNumber: '9741116189'
},
{
    id: 66,
    WardNumber: 67,
    WardName: 'Nagapura',
    AssemblyConstituency: 'Mahalakshmipura',
    Name: 'Sri. S.Harish',
    Address: '#364/27, 19th F main road, Rajajinagar, 1st N Block Bangalore-10',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=67.jpg',
    PhoneNumber: '9845088052'
},
{
    id: 67,
    WardNumber: 68,
    WardName: 'Mahalakshmipuram',
    AssemblyConstituency: 'Mahalakshmipura',
    Name: 'Sri. S. Keshavmurthy',
    Address: '#19 K, 14th cross, 1st Block, Rajajinagar, Bangalore-10',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=68.jpg',
    PhoneNumber: '9844208489'
},
{
    id: 68,
    WardNumber: 69,
    WardName: 'Laggere',
    AssemblyConstituency: 'Rajarajeshwari',
    Name: 'Sri. Lakshmikanth Reddy',
    Address: '#9, Choudeshwari Nilaya, Laggere Circle, Peenya Post, Bangalore-58',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=69.jpg',
    PhoneNumber: '9900868399'
},
{
    id: 69,
    WardNumber: 70,
    WardName: 'Rajagopalanagar',
    AssemblyConstituency: 'Dasarahalli',
    Name: 'Sri. H.N. Gangadhara',
    Address: 'Oppt. Heggenahalli Govt. Hospital, Vishwaneedam Post, Bangalore-91',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=70.jpg',
    PhoneNumber: '9845183229'
},
{
    id: 70,
    WardNumber: 71,
    WardName: 'Heggenahalli',
    AssemblyConstituency: 'Dasarahalli',
    Name: 'Sri.M.B Govindegowda',
    Address: '#E-99, Sanjeevininagar, Lakshman Nagar, 12, 45th main road, Heggenahalli, Bangalore-91',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=71.jpg',
    PhoneNumber: '9341221678'
},
{
    id: 71,
    WardNumber: 72,
    WardName: 'Herohalli',
    AssemblyConstituency: 'Rajarajeshwarinagar',
    Name: 'Sri. A.M. Hanumanthegowda',
    Address: '#7, Sonnenahalli, Ullal, Kengeri, Bangalore-56',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=72.jpg',
    PhoneNumber: '9845375494'
},
{
    id: 72,
    WardNumber: 73,
    WardName: 'Kottigepalya',
    AssemblyConstituency: 'Rajarajeshwarinagar',
    Name: 'Sri. S. Venkatesh Babu',
    Address: '#8, 4th cross, 7th block, Jayanagar, Bangalore-82',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=73.jpg',
    PhoneNumber: '9902029845'
},
{
    id: 73,
    WardNumber: 74,
    WardName: 'Shakthi Ganapathi Nagar',
    AssemblyConstituency: 'Mahalakshmipura',
    Name: 'Smt. Padmavathi Srinivas',
    Address: '#4, 1st main road, Kamalanagar, Bangalore-79',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=74.jpg',
    PhoneNumber: '9980906228'
},
{
    id: 74,
    WardNumber: 75,
    WardName: 'Shankaramatt',
    AssemblyConstituency: 'Mahalakshmipura',
    Name: 'Sri. M. Shivaraju',
    Address: '#16, 1st main road, 1st cross, Gruhalakshmi Layout, Kamalanagar, Bangalore-79',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=75.jpg',
    PhoneNumber: '9880092283'
},
{
    id: 75,
    WardNumber: 76,
    WardName: 'Gayithri Nagar',
    AssemblyConstituency: 'Malleshwaram',
    Name: 'Smt. Chetan Gowda',
    Address: '#44, 1st cross, 4th main road, Srirampuram, Bangalore-21',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=76.jpg',
    PhoneNumber: '9844560585'
},
{
    id: 76,
    WardNumber: 77,
    WardName: 'Dattatreya Temple',
    AssemblyConstituency: 'Gandhinagar',
    Name: 'Sri. R. S. Sathyanarayana',
    Address: '#10, Sirror Park Road, 1st Cross, Malleshwaram, Bangalore-87',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=77.jpg',
    PhoneNumber: '9845006104'
},
{
    id: 77,
    WardNumber: 78,
    WardName: 'Pulakeshinagar',
    AssemblyConstituency: 'Pulikeshinagar',
    Name: 'Sri. Abdul Rakeeb Zakir',
    Address: '#59/1, Koals Road, Frazor Town, Bangalore-5',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=78.jpg',
    PhoneNumber: '9845028127'
},
{
    id: 78,
    WardNumber: 79,
    WardName: 'Sarvajna Nagar',
    AssemblyConstituency: 'C.V. Raman Nagar',
    Name: 'Smt. G. Bhuvaneshwari',
    Address: '#3208, 6th main road, 13th cross, H.A.L, Indiranagar, Bangalore-38',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=79.jpg',
    PhoneNumber: '9945630799'
},
{
    id: 79,
    WardNumber: 80,
    WardName: 'Hoysala Nagar',
    AssemblyConstituency: 'C.V. Raman Nagar',
    Name: 'Smt. Savitha Ramesh',
    Address: '#12, Hale Binnamangala, Indiranagar, Bangalore-38',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=80.jpg',
    PhoneNumber: '9448840709'
},
{
    id: 80,
    WardNumber: 81,
    WardName: 'Vignana Nagar',
    AssemblyConstituency: 'K.R. Puram',
    Name: 'Smt. Geetha Vivekananda',
    Address: 'M.V.R Building, Sriram Temple Road, Annasandra Palya, H.A.L, Bangalore-17',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=81.jpg',
    PhoneNumber: '9986777728'
},
{
    id: 81,
    WardNumber: 82,
    WardName: 'Garudachar Palya',
    AssemblyConstituency: 'Mahadevapura',
    Name: 'Sri. N. Pillappa',
    Address: '#45, R.H.B Colony, Mahadevapura, Bangalore',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=82.jpg',
    PhoneNumber: '9845545538'
},
{
    id: 82,
    WardNumber: 83,
    WardName: 'Kadugodi',
    AssemblyConstituency: 'Mahadevapura',
    Name: 'Sri. K.N Anjaneya Reddy',
    Address: '#1, Kumbena Agrahara, Kadugodi, Bangalore-67',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=83.jpg',
    PhoneNumber: '9845008072'
},
{
    id: 83,
    WardNumber: 84,
    WardName: 'Hagaduru',
    AssemblyConstituency: 'Mahadevapura',
    Name: 'Sri. H.A.Srinivasa',
    Address: '#10, Sriranga Nilaya, H.P Gas Road, Hagadur Colony, Whitefield, Bangalore-66',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=84.jpg',
    PhoneNumber: '9900093299'
},
{
    id: 84,
    WardNumber: 85,
    WardName: 'Doddanekundi',
    AssemblyConstituency: 'Mahadevapura',
    Name: 'Sri. N.R. Sridhar Reddy',
    Address: 'Doddanekundi, Bangalore-37',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=85.jpg',
    PhoneNumber: '9845382347'
},
{
    id: 85,
    WardNumber: 86,
    WardName: 'Marathhalli',
    AssemblyConstituency: 'Mahadevapura',
    Name: 'Smt. J. Varalakshmi',
    Address: '#138, Manjusathi Nilaya, Near Ishwara Temple, 2nd cross, Yamaluru, Bangalore-37',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=86.jpg',
    PhoneNumber: '9845273261'
},
{
    id: 86,
    WardNumber: 87,
    WardName: 'H.A.L Airport',
    AssemblyConstituency: 'K.R. Puram',
    Name: 'Sri. Siddalingaiah (Siddu)',
    Address: '#27/1, 12th A Cross, Ramesh Nagar, Bangalore-37',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=87.jpg',
    PhoneNumber: '9845102742'
},
{
    id: 87,
    WardNumber: 88,
    WardName: 'Jeevan Bheema Nagar',
    AssemblyConstituency: 'C.V. Raman Nagar',
    Name: 'Sri. K ChandraShekar',
    Address: '#422, 6th main road, New Thippasandra, H.A.L, 3rd stage, Bangalore-75',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=88.jpg',
    PhoneNumber: '9845351544'
},
{
    id: 88,
    WardNumber: 89,
    WardName: 'Jogupalya',
    AssemblyConstituency: 'Shanthinagar',
    Name: 'Sri. M. Gowtham Kumar',
    Address: '#354/5, 3rd Cross, Someshwarapura, Cambridge Layout, Halsoor, Bangalore',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=89.jpg',
    PhoneNumber: '9845035510'
},
{
    id: 89,
    WardNumber: 90,
    WardName: 'Halsoor',
    AssemblyConstituency: 'Shivajinagar',
    Name: 'Sri. R. Uday Kumar',
    Address: '#29, Jajar Street, Halsoor, Bangalore - 08',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=90.jpg',
    PhoneNumber: '9844245333'
},
{
    id: 90,
    WardNumber: 91,
    WardName: 'Bharathi Nagar',
    AssemblyConstituency: 'Shivajinagar',
    Name: 'Sri. Shakeel Ahmad',
    Address: '#64, Old Korachara Palya, B Street, Shivajinagar, Bangalore',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=91.jpg',
    PhoneNumber: '9844036811'
},
{
    id: 91,
    WardNumber: 92,
    WardName: 'Shivaji Nagar',
    AssemblyConstituency: 'Shivajinagar',
    Name: 'Smt. Fareeda',
    Address: '#10/A, Noha Street, Shivajinagar, Bangalore-51',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=92.jpg',
    PhoneNumber: '9980927939'
},
{
    id: 92,
    WardNumber: 93,
    WardName: 'Vasanthnagar',
    AssemblyConstituency: 'Shivajinagar',
    Name: 'Sri. Katta Jagadish',
    Address: '#46/9, 6th O Cross Road, R.M.V Layout, Bangalore-80',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=93.jpg',
    PhoneNumber: '9980777777'
},
{
    id: 93,
    WardNumber: 94,
    WardName: 'Gandhinagar',
    AssemblyConstituency: 'Gandhinagar',
    Name: 'Sri. T Gopala Krishna',
    Address: '#2, 1st Main Road, 2nd Cross, Ramachandrapuram, Bangalore-21',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=94.jpg',
    PhoneNumber: '9845003668'
},
{
    id: 94,
    WardNumber: 95,
    WardName: 'Subhash Nagar',
    AssemblyConstituency: 'Gandhinagar',
    Name: 'Sri. T. Mallesh',
    Address: '#99, A Block, Jakkarayana Lake, Sheshadripuram, Bangalore-20',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=95.jpg',
    PhoneNumber: '9611234449'
},
{
    id: 95,
    WardNumber: 96,
    WardName: 'Okalipuram',
    AssemblyConstituency: 'Gandhinagar',
    Name: 'Smt. Queen Elizebeth',
    Address: '#167, 1st main road, Ramachandrapura, Bangalore-21',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=96.jpg',
    PhoneNumber: '9845440678'
},
{
    id: 96,
    WardNumber: 97,
    WardName: 'Dayananda Nagar',
    AssemblyConstituency: 'Rajajinagar',
    Name: 'Smt.M Shakeela',
    Address: '#G-113, 10th cross, Lakshminarayanapura, Bangalore-21',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=97.jpg',
    PhoneNumber: '9008841122'
},
{
    id: 97,
    WardNumber: 98,
    WardName: 'Prakash Nagar',
    AssemblyConstituency: 'Rajajinagar',
    Name: 'Sri. K Raveendran',
    Address: '#29/5, 8th Main Road, 10th Cross, Prakash Nagara, Bangalore - 21',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=98.jpg',
    PhoneNumber: '9448079309'
},
{
    id: 98,
    WardNumber: 99,
    WardName: 'Rajajinagar',
    AssemblyConstituency: 'Rajajinagar',
    Name: 'Sri. H.R Krishnappa',
    Address: '#266, 10th main road, 2nd Phase, Manjunath nagar, Bangalore-10',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=99.jpg',
    PhoneNumber: '9341233383'
},
{
    id: 99,
    WardNumber: 100,
    WardName: 'Basaveshwaranagar',
    AssemblyConstituency: 'Rajajinagar',
    Name: 'Sri. S.H. Padmaraj',
    Address: '#1077, 6th main road, 3rd stage, 3rd Block, Saneguruvanagahalli, Basaweshwaranagara, Bangalore-79',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=100.jpg',
    PhoneNumber: '23231363'
},
{
    id: 100,
    WardNumber: 101,
    WardName: 'Kamakshipalya',
    AssemblyConstituency: 'Rajajinagar',
    Name: 'Sri. K. Ranganna',
    Address: '#17, 1st main road, Meenakshinagar, Kamakshipalya, Bangalore-79',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=101.jpg',
    PhoneNumber: '9341236103'
},
{
    id: 101,
    WardNumber: 102,
    WardName: 'Vrushabhavathi Nagar',
    AssemblyConstituency: 'Mahalakshmipura',
    Name: 'Smt. L Nagarathna',
    Address: '#3 (53/6) 3rd Main Road, Kaveripura, Opposite to Veeresh Chowtry Road, Magadi Main Road, Bangalore -79',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=102.jpg',
    PhoneNumber: '9964349538'
},
{
    id: 102,
    WardNumber: 103,
    WardName: 'Kaveripura',
    AssemblyConstituency: 'Govindarajanagar',
    Name: 'Sri. R. Prakash',
    Address: '#339, 1st main road, 1st cross, Ranganathpura, Kamakshipalya, Bangalore-79',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=103.jpg',
    PhoneNumber: '9845078058'
},
{
    id: 103,
    WardNumber: 104,
    WardName: 'Govindarajanagar',
    AssemblyConstituency: 'Govindarajanagar',
    Name: 'Sri. Mohan Kumar',
    Address: '#5/A, Gokul, 5th cross, 1st main road, Govindrajnagar, Bangalore-40',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=104.jpg',
    PhoneNumber: '9945567767'
},
{
    id: 104,
    WardNumber: 105,
    WardName: 'Agrahara Dasarahalli',
    AssemblyConstituency: 'Govindarajanagar',
    Name: 'Smt. Roopadevi',
    Address: '#5, 4th main road, Agrahara Dasarahalli, Bangalore-79',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=105.jpg',
    PhoneNumber: '9480417646'
},
{
    id: 105,
    WardNumber: 106,
    WardName: 'Dr. Rajkumar Ward',
    AssemblyConstituency: 'Govindarajanagar',
    Name: 'Sri. Gangabyrayya',
    Address: '#4, 10 B Road, Agrahara Dasarahalli, Bangalore-79',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=106.jpg',
    PhoneNumber: '9844153004'
},
{
    id: 106,
    WardNumber: 107,
    WardName: 'Shiva Nagar',
    AssemblyConstituency: 'Rajajinagar',
    Name: 'Sri. Manjunath',
    Address: '#9, 1st B main road, Shivanagar, Rajajinagar, Bangalore-10',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=107.jpg',
    PhoneNumber: '9343735201'
},
{
    id: 107,
    WardNumber: 108,
    WardName: 'Sri Ramamandira Ward',
    AssemblyConstituency: 'Rajajinagar',
    Name: 'Smt. M.G. Jayarathna',
    Address: '#6/54, 15/6, 10th C main road, 6tth Block, Rajajinagar, Bangalore-10',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=108.jpg',
    PhoneNumber: '9731585627'
},
{
    id: 108,
    WardNumber: 109,
    WardName: 'Chikpete',
    AssemblyConstituency: 'Gandhinagar',
    Name: 'Sri. A.L Shivakumar',
    Address: '#23, 16th cross, Rangaswamy Gudi Beedi, Bangalore-53.',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=109.jpg',
    PhoneNumber: '9844005002'
},
{
    id: 109,
    WardNumber: 110,
    WardName: 'Samapangirama Nagar',
    AssemblyConstituency: 'Shivajinagar',
    Name: 'Sri. M. Gopi',
    Address: '#253, 9th main road, Samangiramanagara, Bangalore-27',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=110.jpg',
    PhoneNumber: '9880083660'
},
{
    id: 110,
    WardNumber: 111,
    WardName: 'Shantala Nagar',
    AssemblyConstituency: 'Shanthinagar',
    Name: 'Sri. K. Shivakumar',
    Address: '#2, Kolandappa Garden, Anepalya, Adugodi, Bangalore-30',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=111.jpg',
    PhoneNumber: 'NIL'
},
{
    id: 111,
    WardNumber: 112,
    WardName: 'Dommalur',
    AssemblyConstituency: 'Shanthinagar',
    Name: 'Smt. Geetha Srinivasareddy',
    Address: '#655, 2nd main road, Dommalur Layout, Bangalore-71',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=112.jpg',
    PhoneNumber: '9880083660'
},
{
    id: 112,
    WardNumber: 113,
    WardName: 'Konena Agrahara',
    AssemblyConstituency: 'C.V. Raman nagar',
    Name: 'Sri. M. Chandrappa Reddy',
    Address: '#125/1, Konena Agrahara, H.A.L, Bangalore-17',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=113.jpg',
    PhoneNumber: '9845273901'
},
{
    id: 113,
    WardNumber: 114,
    WardName: 'Agaram',
    AssemblyConstituency: 'Shanthinagar',
    Name: 'Smt. Sarala',
    Address: '#16/1, 1st corss, Gowtham Pura, Halsoor, Bangalore-8',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=114.jpg',
    PhoneNumber: '9845027393'
},
{
    id: 114,
    WardNumber: 115,
    WardName: 'Vannarpete',
    AssemblyConstituency: 'Shanthinagar',
    Name: 'Sri. S. Vijayan',
    Address: '#38/52, 5th Cross, RoseGarden, Neelasandra, Near Kateramma Temple, Bangalore-47',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=115.jpg',
    PhoneNumber: '9343743297'
},
{
    id: 115,
    WardNumber: 116,
    WardName: 'Neelasandra',
    AssemblyConstituency: 'Shanthinagar',
    Name: 'Sri. Lokesh',
    Address: '#9/2,"Bethel",5th cross, Anepalya,Audugodi post, Neelasandra,Bangalore-76',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=116.jpg',
    PhoneNumber: '9886043167'
},
{
    id: 116,
    WardNumber: 117,
    WardName: 'Shathinagar',
    AssemblyConstituency: 'Shanthinagar',
    Name: 'Smt. P Sowmya',
    Address: '#26, 3rd cross, 1st main road, Vinayakanagara, Adugodi Post, Bangalore-27',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=117.jpg',
    PhoneNumber: '9986220732'
},
{
    id: 117,
    WardNumber: 118,
    WardName: 'Sudham Nagar',
    AssemblyConstituency: 'Chikpet',
    Name: 'Kumari Avvayi',
    Address: '#479, Khadhar Sharif Garden, Lal Bagh, 3rd Cross, Bangalore-27',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=118.jpg',
    PhoneNumber: '9448718631'
},
{
    id: 118,
    WardNumber: 119,
    WardName: 'Dharmaraya Swamy Temple Ward',
    AssemblyConstituency: 'Chikpet',
    Name: 'Sri. P. Dhanaraj',
    Address: '#12, M.R.R.Lane, Kalasipalya, Bangalore-2',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=119.jpg',
    PhoneNumber: '9448385014'
},
{
    id: 119,
    WardNumber: 120,
    WardName: 'Cottonpet',
    AssemblyConstituency: 'Gandhinagar',
    Name: 'Smt. Vasanth Kumari',
    Address: '#G112, Atti Maramma Temple Beedi, Cotton Pete, Bangalore-53',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=120.jpg',
    PhoneNumber: '9845797560'
},
{
    id: 120,
    WardNumber: 121,
    WardName: 'Binnypet',
    AssemblyConstituency: 'Gandhinagar',
    Name: 'Smt. N. SriVidya',
    Address: '#19/2, 9th cross, Manjunathnagar, Bangalore-23',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=121.jpg',
    PhoneNumber: '9886075414'
},
{
    id: 121,
    WardNumber: 122,
    WardName: 'Kempapura Agrahara',
    AssemblyConstituency: 'Vijayanagar',
    Name: 'Smt. Nirmala',
    Address: '#12/1, 20th corss, Bhuvaneshwari, Bangalore-23',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=122.jpg',
    PhoneNumber: '9448616483'
},
{
    id: 122,
    WardNumber: 123,
    WardName: 'Vijaynagara',
    AssemblyConstituency: 'Vijayanagara',
    Name: 'Sri.H. Raveendra',
    Address: '#151, 2nd main road, Vidyaranya nagara, Magadi Road, Bangalore-23',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=123.jpg',
    PhoneNumber: '9845346899'
},
{
    id: 123,
    WardNumber: 124,
    WardName: 'Hosahalli',
    AssemblyConstituency: 'Vijayanagar',
    Name: 'Sri. Dr. S. Raju',
    Address: '#2215, 3rd main road, Hampi nagar, Bangalore-40',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=124.jpg',
    PhoneNumber: '9448357402'
},
{
    id: 124,
    WardNumber: 125,
    WardName: 'Marenahalli',
    AssemblyConstituency: 'Govindarajanagar',
    Name: 'Sri. N. Shakuntala',
    Address: '#26/3, 2nd main, Marenahalli, Vijaynagar, Bangalore-40',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=125.jpg',
    PhoneNumber: '9844278849'
},
{
    id: 125,
    WardNumber: 126,
    WardName: 'Maruthi Mandira Ward',
    AssemblyConstituency: 'Govindarajanagar',
    Name: 'Sri. V. Vagish',
    Address: '#242/H, 19th cross, 21st mainroad, Vijaynagar, Bangalore-40',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=126.jpg',
    PhoneNumber: '9845165479'
},
{
    id: 126,
    WardNumber: 127,
    WardName: 'Moodalapalya',
    AssemblyConstituency: 'Govindarajanagar',
    Name: 'Smt. N. Shanthakumari',
    Address: '#3, 4th B Main road, Byraveshwaranagara, Bangalore-72',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=127.jpg',
    PhoneNumber: '9590327055'
},
{
    id: 127,
    WardNumber: 128,
    WardName: 'Nagarbhavi',
    AssemblyConstituency: 'Govindarajanagar',
    Name: 'Sri. K. Umesh Shetti',
    Address: '#1441, 2nd cross, 1st stage, 2nd stage, Chandra Layout, Bangalore-39',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=128.jpg',
    PhoneNumber: '9845844447'
},
{
    id: 128,
    WardNumber: 129,
    WardName: 'Gnanabharathi Ward',
    AssemblyConstituency: 'Rajarajeshwarinagar',
    Name: 'Sri. Govindaraju',
    Address: '#98, 4th main road, D Group Layout, Srigandada Kavalu, Vishwaneedam, Bangalore-91',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=129.jpg',
    PhoneNumber: '9900864093'
},
{
    id: 129,
    WardNumber: 130,
    WardName: 'Ullala',
    AssemblyConstituency: 'Rajarajeshwari Nagar',
    Name: 'Sri. Rajanna',
    Address: 'Hosahalli Gollarapalya, Vishwaneedam, Bangalore-91',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=130.jpg',
    PhoneNumber: '9741335250'
},
{
    id: 130,
    WardNumber: 131,
    WardName: 'Nayandahalli',
    AssemblyConstituency: 'Govindarajanagar',
    Name: 'Smt. H.S. Rajajeshwari',
    Address: '#6, 1st main road, vinayaka Layout, Nayandhalli, Bangalore',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=131.jpg',
    PhoneNumber: '9900105157'
},
{
    id: 131,
    WardNumber: 132,
    WardName: 'Attiguppe',
    AssemblyConstituency: 'Vijayanagar',
    Name: 'Sri. K. Doddanna',
    Address: '#22/7, 3rd main road, Attiguppe, Bangalore-40',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=132.jpg',
    PhoneNumber: '9880311900'
},
{
    id: 132,
    WardNumber: 133,
    WardName: 'Hampi Nagar',
    AssemblyConstituency: 'Vijayanagar',
    Name: 'Sri. R. ChandraShekarayya',
    Address: '#6, 11th cross, Manjunathnagar, Bangalore-23',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=133.jpg',
    PhoneNumber: '9480090678'
},
{
    id: 133,
    WardNumber: 134,
    WardName: 'Bapuji Nagar',
    AssemblyConstituency: 'Vijayanagar',
    Name: 'Sri. V. Krishna',
    Address: '#12, D Street, 1st main road, Kuvenmpunagar, Hosaguddadahalli, Bangalore-26',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=134.jpg',
    PhoneNumber: '9448281405'
},
{
    id: 134,
    WardNumber: 135,
    WardName: 'Padarayanapura',
    AssemblyConstituency: 'Chamarajpet',
    Name: 'Smt. Najini Begum',
    Address: '#43, 3rd cross,Vivekananda nagar,Near Banasawadi Railway Station,Bangalore-33',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=135.jpg',
    PhoneNumber: '9886653915'
},
{
    id: 135,
    WardNumber: 136,
    WardName: 'Jagajeevan Ramnagar',
    AssemblyConstituency: 'Chamarajpet',
    Name: 'Smt. Seema Kanum',
    Address: '#116/3, 3rd main road, 1st cross, Padarayanapura, Bangalore-26',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=136.jpg',
    PhoneNumber: '9945974514'
},
{
    id: 136,
    WardNumber: 137,
    WardName: 'Rayapuram',
    AssemblyConstituency: 'Chamarajpet',
    Name: 'Sri. C.S. Radhakrishna',
    Address: '#153, 14th cross, 10th main, Venkataswamy Garden, Bangalore-26',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=137.jpg',
    PhoneNumber: '9980851981'
},
{
    id: 137,
    WardNumber: 138,
    WardName: 'Chalavadi Palya',
    AssemblyConstituency: 'Chamarajpet',
    Name: 'Smt. Rekha',
    Address: '#E-36, Anjanappa Garden, C Line, Mysore Road, Bangalore-18',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=138.jpg',
    PhoneNumber: '9880073342'
},
{
    id: 138,
    WardNumber: 139,
    WardName: 'K.R Market',
    AssemblyConstituency: 'Chamarajpet',
    Name: 'Sri. G. A. Ashwath Narayana',
    Address: '#200/9, 7th main road, 11th cross, Venkataswamy Garden, J.J.R. Nagar, Bangalore-26',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=139.jpg',
    PhoneNumber: '9900087578'
},
{
    id: 139,
    WardNumber: 140,
    WardName: 'Chamarajpete',
    AssemblyConstituency: 'Chamarajpet',
    Name: 'Sri. B.V Ganesh',
    Address: '#174/2, 3rd main road, Chamarajpete, Bangalore-18',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=140.jpg',
    PhoneNumber: '9448107286'
},
{
    id: 140,
    WardNumber: 141,
    WardName: 'Azad Nagar',
    AssemblyConstituency: 'Chamarajpet',
    Name: 'Smt. Gowramma',
    Address: '#17, 2nd main road, 3rd cross, K.V.S Layout, Nanjamba Agrahara, Chamarajpete, Bangalore-18',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=141.jpg',
    PhoneNumber: '9449815395'
},
{
    id: 141,
    WardNumber: 142,
    WardName: 'Sunkenahalli',
    AssemblyConstituency: 'Chikpet',
    Name: 'Sri. P. N. Sadashiva',
    Address: '#25, 3rd cross, Gavipuram Extension, Bangalore-19',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=142.jpg',
    PhoneNumber: '9845194642'
},
{
    id: 142,
    WardNumber: 143,
    WardName: 'Vishweshwarapuram',
    AssemblyConstituency: 'Chikpet',
    Name: 'Sri. S. Anil Kumar',
    Address: '#50/3, Mavalli main road, Mavalli, Bangalore-4',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=143.jpg',
    PhoneNumber: '9448062778'
},
{
    id: 143,
    WardNumber: 144,
    WardName: 'Siddapura',
    AssemblyConstituency: 'Chikpet',
    Name: 'Sri. M. Udayshankar',
    Address: '#40, Siddegowda Galli, Doddamavalli, Bangalore-4',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=144.jpg',
    PhoneNumber: '9845154158'
},
{
    id: 144,
    WardNumber: 145,
    WardName: 'Hombegowda Nagar',
    AssemblyConstituency: 'Chikpet',
    Name: 'Sri. D. Chandrappa',
    Address: '#27/4, 1st cross, A.N.Gupta Layout, Lakkasandra, Bangalore-30',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=145.jpg',
    PhoneNumber: '9845196410'
},
{
    id: 145,
    WardNumber: 146,
    WardName: 'Lakkasandra',
    AssemblyConstituency: 'B.T.M. Layout',
    Name: 'Sri. K. Mahesh Babu',
    Address: '#46, 8th cross, R.D.Layout, Lakkasandra, Bangalore-30',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=146.jpg',
    PhoneNumber: '9980567137'
},
{
    id: 146,
    WardNumber: 147,
    WardName: 'Adugodi',
    AssemblyConstituency: 'B.T.M. Layout',
    Name: 'Sri. S.N. Murugesh Modaliyaar',
    Address: '#200, 2nd C Main road, 8th Block, Koramangala, Bangalore-34',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=147.jpg',
    PhoneNumber: '9844020565'
},
{
    id: 147,
    WardNumber: 148,
    WardName: 'Ejeepura',
    AssemblyConstituency: 'B.T.M. Layout',
    Name: 'Smt. P.M Saroja',
    Address: '#240, 5th cross, 5th main road, Vivekanagar, Bangalore-47',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=148.jpg',
    PhoneNumber: '9845002781'
},
{
    id: 148,
    WardNumber: 149,
    WardName: 'Varthur',
    AssemblyConstituency: 'Mahadevapura',
    Name: 'Sri. S. UdayKumar',
    Address: '#480 (16), Munnekolala, Bangalore East, Bangalore-36',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=149.jpg',
    PhoneNumber: '9845453328'
},
{
    id: 149,
    WardNumber: 150,
    WardName: 'Bellandur',
    AssemblyConstituency: 'Mahadevapura',
    Name: 'Sri. B.P. Babu Reddy',
    Address: '#G-07, Durga Saffron Square Apartment, Outer Ring Road, Devarabisanahalli, Bellandur Post, Bangalore-103.',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=150.jpg',
    PhoneNumber: '9880701567'
},
{
    id: 150,
    WardNumber: 151,
    WardName: 'Koramangala',
    AssemblyConstituency: 'B.T.M. Layout',
    Name: 'Smt. B.N. Kokila',
    Address: '#30, 7th C main road, 16th main road, 4th B Block, Koramangala, Bangalore-34',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=151.jpg',
    PhoneNumber: '9740214741'
},
{
    id: 151,
    WardNumber: 152,
    WardName: 'Suddugunte Palya',
    AssemblyConstituency: 'B.T.M. Layout',
    Name: 'Sri. G. Manjunath',
    Address: '#546, 1st main road, 1st cross, 8th Block, Koramangala, Bangalore-34',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=152.jpg',
    PhoneNumber: '9845174796'
},
{
    id: 152,
    WardNumber: 153,
    WardName: 'Jayanagar',
    AssemblyConstituency: 'Chikpet',
    Name: 'Smt. Gangambika',
    Address: '#210/9, 7th main road, Byrasandra, Jayanagar, Bangalore-11',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=153.jpg',
    PhoneNumber: '9448063498'
},
{
    id: 153,
    WardNumber: 154,
    WardName: 'Basavanagudi',
    AssemblyConstituency: 'Basavanagudi',
    Name: 'Sri. B.S. Sathyanarayana',
    Address: '#60/54, 2nd cross, Javarayya Garden, Tyagarajanagar, Banagalore',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=154.jpg',
    PhoneNumber: '9341220836'
},
{
    id: 154,
    WardNumber: 155,
    WardName: 'Hanumathnagar',
    AssemblyConstituency: 'Basavanagudi',
    Name: 'Sri. K. Chandrashekar',
    Address: '#46-25, Bugals Rock Road, Dondusa Layout, Hanumanthnagar, Bangalore',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=155.jpg',
    PhoneNumber: '9243100567'
},
{
    id: 155,
    WardNumber: 156,
    WardName: 'Srinagar',
    AssemblyConstituency: 'Basavanagudi',
    Name: 'Sri. T. Thimmegowda',
    Address: '#527, 2nd main road, Srinagar, Bangalore-50',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=156.jpg',
    PhoneNumber: '9945500408'
},
{
    id: 156,
    WardNumber: 157,
    WardName: 'Gali Anjaneya Temple',
    AssemblyConstituency: 'Vijayanagar',
    Name: 'Sri. B.S. Anand',
    Address: '#72(2), 1st main road, 6th corss, Byatarayanapura, Mysore Road, Bangalore-26',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=157.jpg',
    PhoneNumber: '9341242377'
},
{
    id: 157,
    WardNumber: 158,
    WardName: 'Deepanjali Nagar',
    AssemblyConstituency: 'Vijayanagar',
    Name: 'Smt. Malathi',
    Address: '#21, House No. 4/1-1, A. Street, 1st main road, Hosaguddada Halli, Kuvenmpunagar, Mysore Road, Bangalore-26',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=158.jpg',
    PhoneNumber: '9880711117'
},
{
    id: 158,
    WardNumber: 159,
    WardName: 'Kengeri',
    AssemblyConstituency: 'Rajarajeshwarinagar',
    Name: 'Sri. R. Anjanappa',
    Address: '#547/2, 2nd Megala Beedi, Kengeri, Bangalore-60',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=159.jpg',
    PhoneNumber: '9845280828'
},
{
    id: 159,
    WardNumber: 160,
    WardName: 'Rajarajeshwari Nagar',
    AssemblyConstituency: 'Rajarajeshwari Nagar',
    Name: 'Sri. G.H.Ramachandra',
    Address: '#290/1, 5th stage, 1st Phase, 1st main, 1st cross, B.E.M.L Layout, Rajarajeshwarinagar, Bangalore-98',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=160.jpg',
    PhoneNumber: '9845205376'
},
{
    id: 160,
    WardNumber: 161,
    WardName: 'Hosakerehalli',
    AssemblyConstituency: 'Padmanabhanagar',
    Name: 'Sri. H. Narayana',
    Address: '#1, 1st main road, Hosakerehalli, Banashankari, 3rd stage, Bangalore-85',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=161.jpg',
    PhoneNumber: '9972587779'
},
{
    id: 161,
    WardNumber: 162,
    WardName: 'Girinagar',
    AssemblyConstituency: 'Basavanagudi',
    Name: 'Smt. H.S. Lalitha',
    Address: '#539, Ground floor,11th A cross, 6th Main road,Girinagar,2nd Phase, Bangalore-85',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=162.jpg',
    PhoneNumber: '9916252969'
},
{
    id: 162,
    WardNumber: 163,
    WardName: 'Kathriguppe',
    AssemblyConstituency: 'Basavanagudi',
    Name: 'Sri. D. Venkatesha Murthy',
    Address: '#18/1, 18th main road, 14th cross, Padmanabhanagar, Bangalore-70',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=163.jpg',
    PhoneNumber: '9448053899'
},
{
    id: 163,
    WardNumber: 164,
    WardName: 'VidyaPeeta Ward',
    AssemblyConstituency: 'Basavanagudi',
    Name: 'Sri. M. Venkatesh',
    Address: '#202/A, 30th main road, Banashankari 3rd stage, Bangalore',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=164.jpg',
    PhoneNumber: '9845041067'
},
{
    id: 164,
    WardNumber: 165,
    WardName: 'Ganesh Mandira',
    AssemblyConstituency: 'Padmanabhanagar',
    Name: 'Sri. L. Govindraj',
    Address: '#69, 4th main road, 4th cross, Lakshnappa Garden, Bangalore-85',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=165.jpg',
    PhoneNumber: '9880480920'
},
{
    id: 165,
    WardNumber: 166,
    WardName: 'Karisandra',
    AssemblyConstituency: 'Padmanabhanagar',
    Name: 'Smt. Jyothisri Hari Reddy',
    Address: '#98, 2nd cross, 3rd Phase, 5th Block, Banashankari 3rd stage, Bangalore-85',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=166.jpg',
    PhoneNumber: '9448451080'
},
{
    id: 166,
    WardNumber: 167,
    WardName: 'Yadiyur',
    AssemblyConstituency: 'Padmanabhanagar',
    Name: 'Sri. N. R. Ramesh',
    Address: '#2910, 14th A Cross, Banashankari 2nd stage, Bangalore-70',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=167.jpg',
    PhoneNumber: '9880011999'
},
{
    id: 167,
    WardNumber: 168,
    WardName: 'Pattabhirama Nagar',
    AssemblyConstituency: 'Jayanagar',
    Name: 'Sri. C. K. Ramamurthy',
    Address: '#1246, Sanjeevini Nilaya, 25th A main road, 9th Block, Jayanagar, Bangalore-69',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=168.jpg',
    PhoneNumber: '984500683'
},
{
    id: 168,
    WardNumber: 169,
    WardName: 'Byrasandra',
    AssemblyConstituency: 'Jayanagar',
    Name: 'Sri. N. Nagaraju',
    Address: '#793, 31th cross, Thilak Nagar, Jayanagar, Bangalore-41',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=169.jpg',
    PhoneNumber: '944840777'
},
{
    id: 169,
    WardNumber: 170,
    WardName: 'Jayanagar East',
    AssemblyConstituency: 'Jayanagar',
    Name: 'Sri. Muni Sanjeevayya',
    Address: '#572, 2nd main road, Puttayyanapalya, Jayanagar 9th Layout, Bangalore-69',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=170.jpg',
    PhoneNumber: '9900196934'
},
{
    id: 170,
    WardNumber: 171,
    WardName: 'Guruppanapalya',
    AssemblyConstituency: 'Jayanagar',
    Name: 'Sri. Mohammad Rizwan Navab',
    Address: '#46, 3rd cross, 9th main road, B.T.M 1st stage, Bangalore-29',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=171.jpg',
    PhoneNumber: '9845333786'
},
{
    id: 171,
    WardNumber: 172,
    WardName: 'Madiwala',
    AssemblyConstituency: 'B.T.M. Layout',
    Name: 'Sri. B.N. Manjunath Reddy',
    Address: '#84/19, 1st main road, 6th cross, Maruthinagar, Madiwala, Bangalore-68',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=172.jpg',
    PhoneNumber: '9341216636'
},
{
    id: 172,
    WardNumber: 173,
    WardName: 'Chikkasandra',
    AssemblyConstituency: 'B.T.M. Layout',
    Name: 'Smt. Saraswathamma',
    Address: '#41, 3rd main road, 8th cross, Venkathapura, Koramangala, Bangalore-34',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=173.jpg',
    PhoneNumber: '9448660567'
},
{
    id: 173,
    WardNumber: 174,
    WardName: 'H.S.R. Layout',
    AssemblyConstituency: 'Bommanahalli',
    Name: 'Smt.K. Latha',
    Address: '#20, New No.3, Agara, Agara Post, Sarjapura Road, Bangalore',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=174.jpg',
    PhoneNumber: '9900263242'
},
{
    id: 174,
    WardNumber: 175,
    WardName: 'Bommanahalli',
    AssemblyConstituency: 'Bommanahalli',
    Name: 'Sri. B.S. Manjunath Reddy',
    Address: '#59/3, Viratnagar, Bommanahalli, Bangalore-68',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=175.jpg',
    PhoneNumber: '9448082908'
},
{
    id: 175,
    WardNumber: 176,
    WardName: 'B.T.M.Layout',
    AssemblyConstituency: 'B.T.M. Layout',
    Name: 'Sri. G.N.R. Babu',
    Address: '#858,6th Main Road,KSRTC Layout,J.P.Nagar,3rd Phase,Bangalore-76',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=176.jpg',
    PhoneNumber: '9845042998'
},
{
    id: 176,
    WardNumber: 177,
    WardName: 'J.P Nagar',
    AssemblyConstituency: 'Jayanagar',
    Name: 'Sri. N. Chandrashekar Raju',
    Address: '#20/1, 22nd A Main, Marenahalli, 2nd stage, J.P Nagar, Bangalore',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=177.jpg',
    PhoneNumber: '9880185530'
},
{
    id: 177,
    WardNumber: 178,
    WardName: 'Sarakki',
    AssemblyConstituency: 'Jayanagar',
    Name: 'Sri. S.K. Nataraj',
    Address: '#144, 12th cross, 3rd main, Sarakki, Bangalore-78',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=178.jpg',
    PhoneNumber: '9845013157'
},
{
    id: 178,
    WardNumber: 179,
    WardName: 'Shakambari Nagar',
    AssemblyConstituency: 'Jayanagar',
    Name: 'B. Somashekar',
    Address: '#1192, 18th main, 2nd stage, J.P Nagar, Bangalore-78',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=179.jpg',
    PhoneNumber: '9845155479'
},
{
    id: 179,
    WardNumber: 180,
    WardName: 'Banashankari Temple Ward',
    AssemblyConstituency: 'Padmanabhanagar',
    Name: 'Sri. Basavaraj A H',
    Address: '#294, 7th Main Road, Bhavani Nagar, Banashankari 2nd Stage Bangalore-70',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=180.jpg',
    PhoneNumber: '98450 61887'
},
{
    id: 180,
    WardNumber: 181,
    WardName: 'Kumaraswamy Layout',
    AssemblyConstituency: 'Padmanabhanagar',
    Name: 'Sri. H. Suresh',
    Address: '#109, 2nd cross, New Layout, Kadirenahalli, Bangalore-70',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=181.jpg',
    PhoneNumber: '9686269623'
},
{
    id: 181,
    WardNumber: 182,
    WardName: 'Padmanabhanagar',
    AssemblyConstituency: 'Padmanabhanagar',
    Name: 'Sri. L. Srinivas',
    Address: '#38/1, 22nd main road, Padbanabhanagar, Bangalore-70',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=182.jpg',
    PhoneNumber: '9243101474'
},
{
    id: 182,
    WardNumber: 183,
    WardName: 'Chikkakallasandra',
    AssemblyConstituency: 'Padmanabhanagar',
    Name: 'Sri. B. S. Venkataswamy Naidu',
    Address: '#11/18, 1st A cross, Banashankari 3rd stage, 5th Block, 3rd stage, Bangalore-85',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=183.jpg',
    PhoneNumber: '9448080435'
},
{
    id: 183,
    WardNumber: 184,
    WardName: 'Uttarahalli',
    AssemblyConstituency: 'Bangalore South',
    Name: 'Sri. K.Ramesh Raju',
    Address: '#55, Uttarahalli, Subramanyapura Post, Uttarahalli hobli, Bangalore South, Bangalore-61',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=184.jpg',
    PhoneNumber: '9448614472'
},
{
    id: 184,
    WardNumber: 185,
    WardName: 'Yalachenahalli',
    AssemblyConstituency: 'Bangalore South',
    Name: 'Sri. O. Manjunath',
    Address: '#22, Manjunath Layout, 1st Cross, Kanakanagar, J.P Nagar, Yalachenahalli, Bangalore-78',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=185.jpg',
    PhoneNumber: '9901051546'
},
{
    id: 185,
    WardNumber: 186,
    WardName: 'Jaraganahalli',
    AssemblyConstituency: 'Bommanahalli',
    Name: 'Smt. Suguna Balakrishna',
    Address: '#25/6, Karthik Nilaya, Yalachenahalli, Kanakapura main road, Bangalore-78',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=186.jpg',
    PhoneNumber: '9845679995'
},
{
    id: 186,
    WardNumber: 187,
    WardName: 'Puttenahalli',
    AssemblyConstituency: 'Bommanahalli',
    Name: 'Sri. L. Ramesh',
    Address: '#278/A, Sarakki Agrahara, J.P Nagar, Bangalore',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=187.jpg',
    PhoneNumber: '9980002259'
},
{
    id: 187,
    WardNumber: 188,
    WardName: 'Bilekahalli',
    AssemblyConstituency: 'Bommanahalli',
    Name: 'Smt. M. Roopa Ramesh',
    Address: '#99, Dhruva Nilaya, 3rd cross, B. Basavalingappa Layout, Bannerugatta road, Bangalore-76',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=188.jpg',
    PhoneNumber: '9738233432'
},
{
    id: 188,
    WardNumber: 189,
    WardName: 'Hongasandra',
    AssemblyConstituency: 'Bommanahalli',
    Name: 'Smt. Sukanda',
    Address: '# Old No. 103, New No. 272, 2nd cross, 9th main road, Garvebhavi Palya main road, Hongasandra, Bangalore-68',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=189.jpg',
    PhoneNumber: '9751339907'
},
{
    id: 189,
    WardNumber: 190,
    WardName: 'Mangammana Palya',
    AssemblyConstituency: 'Bommanahalli',
    Name: 'Smt. Syed Haseena Taj',
    Address: '#67/407, 3rd cross, Begur road, Bangalore-68',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=190.jpg',
    PhoneNumber: '9448084140'
},
{
    id: 190,
    WardNumber: 191,
    WardName: 'Singasandra',
    AssemblyConstituency: 'Bangalore South',
    Name: 'Smt. Kavitha Baburaj',
    Address: '#105, Tropical Paradise, Koodlu, Bangalore-68',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=191.jpg',
    PhoneNumber: '9901202137'
},
{
    id: 191,
    WardNumber: 192,
    WardName: 'Begur',
    AssemblyConstituency: 'Bangalore South',
    Name: 'Sri. M Srinivas',
    Address: '#246, 9th cross, 2nd Block, Vishwapriya Nagar, Begur, Bangalore-68',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=192.jpg',
    PhoneNumber: '9880290051'
},
{
    id: 192,
    WardNumber: 193,
    WardName: 'Arakere',
    AssemblyConstituency: 'Bommanahalli',
    Name: 'Sri. A.N. Purushotham',
    Address: '#6, Arekere, Bannerughatta Road, Bangalore-76',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=193.jpg',
    PhoneNumber: '9243125778'
},
{
    id: 193,
    WardNumber: 194,
    WardName: 'Gottigere',
    AssemblyConstituency: 'Bangalore South',
    Name: 'Smt. S.K. Pushpa',
    Address: '#4, Royal Heritage, Gottigere, Bannerughatta Road, Bangalore-83',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=194.jpg',
    PhoneNumber: '9845010836'
},
{
    id: 194,
    WardNumber: 195,
    WardName: 'Konanakunte',
    AssemblyConstituency: 'Bangalore South',
    Name: 'Smt. S. Shashirekha Jayaram',
    Address: '#28, Sri. Venkateshwara Nilaya, Muniswamappa Garden, Chunchagatta, Bangalore-62',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=195.jpg',
    PhoneNumber: '9980050216'
},
{
    id: 195,
    WardNumber: 196,
    WardName: 'Anajanapura',
    AssemblyConstituency: 'Bangalore South',
    Name: 'Sri. S. Gangadhar',
    Address: 'Konankunte, Uttarahalli Hobli, Bangalore-62',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=196.jpg',
    PhoneNumber: '9845550808'
},
{
    id: 196,
    WardNumber: 197,
    WardName: 'Vasanthapura',
    AssemblyConstituency: 'Bangalore South',
    Name: 'Smt. A. Vijaya',
    Address: '#118, Chikkalsandra, Uttarahalli, Subramanyapura, Bangalore-61',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=197.jpg',
    PhoneNumber: '9448768596'
},
{
    id: 197,
    WardNumber: 198,
    WardName: 'Hemmigepura',
    AssemblyConstituency: 'Rajarajeshwari Nagar',
    Name: 'Smt. Veena Nagaraju',
    Address: '#57, Chikkagowdanapalay, Talagattapura, Kengeri hobli, Bangalore South Taluk, Bangalore',
    Photo: 'http://bbmp.gov.in/councillors-contact-details?p_p_id=councillors_WAR_councillorsportlet&p_p_lifecycle=2&p_p_resource_id=getimage&_councillors_WAR_councillorsportlet_filename=198.jpg',
    PhoneNumber: '9845706821'
},


    ];

  return {
    all: function() {
      return contacts;
    },
    get: function(contactId) {
      // Simple index lookup
      return contacts[contactId];
    }
  }
});
