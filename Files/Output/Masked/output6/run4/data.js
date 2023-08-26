var solutionDir="/home/sreedev/Downloads/Output/output6//run4";
var wholedata={
"totalseqs":257,
"motifs":6,
"modules":4
};
var inputfasta="masked6.fa";

var maxlength=6095;
var maxlengthSeqTags=25;
var minmotpercent=0.05;
var logoSizes={ 1: [422 ,150],
2: [393 ,150],
3: [544 ,150],
4: [544 ,150],
5: [422 ,150],
6: [393 ,150]
};
var cplot= [900,600];
var fullpart= [3600,6000];


var moduleMotifColors={ 4: ["#FF0000", "#FF0000", "#FF0000", "#FF0000", "#FF0000", "#FF0000"],
1: ["#FF0000", "#FF0000", "#FF0000", "#FF0000", "#FF0000", "#FF0000"],
3: ["#FF0000", "#FF0000", "#FF0000", "#FF0000", "#FF0000", "#FF0000"],
2: ["#FF0000", "#FF0000", "#FF0000", "#FF0000", "#FF0000", "#FF0000"]
};

var motifwidths={
1:13,
2:12,
3:17,
4:17,
5:13,
6:12
};

var modseqs={
1: 100,
2: 67,
3: 59,
4: 31
};

var motifSeqs={
1: 70,
2: 58,
3: 42,
4: 32,
5: 31,
6: 27
};

var seqdetails={
"chr1:20897671-20898254": [0, 583],
"chr1:23487160-23488639": [1, 1479],
"chr1:24566603-24569405": [2, 2802],
"chr1:36864939-36865549": [3, 610],
"chr1:40419842-40420980": [4, 1138],
"chr1:51393030-51393679": [5, 649],
"chr1:51538255-51538850": [6, 595],
"chr1:63599505-63600306": [7, 801],
"chr1:80092639-80093456": [8, 817],
"chr1:81169061-81169940": [9, 879],
"chr1:90306610-90307201": [10, 591],
"chr1:120138586-120139086": [11, 500],
"chr1:132907236-132907871": [12, 635],
"chr1:133031701-133032548": [13, 847],
"chr1:134692915-134693672": [14, 757],
"chr1:138416585-138417422": [15, 837],
"chr1:145768540-145769187": [16, 647],
"chr1:155141987-155142749": [17, 762],
"chr1:163507438-163508304": [18, 866],
"chr1:167681556-167682229": [19, 673],
"chr1:175877427-175878443": [20, 1016],
"chr1:186554726-186555192": [21, 466],
"chr1:192894188-192894901": [22, 713],
"chr10:13688877-13689651": [23, 774],
"chr10:19628484-19629258": [24, 774],
"chr10:26048076-26048757": [25, 681],
"chr10:39680230-39680917": [26, 687],
"chr10:79836617-79837582": [27, 965],
"chr10:80201629-80202126": [28, 497],
"chr10:80509162-80509451": [29, 289],
"chr10:80913080-80914050": [30, 970],
"chr10:92765660-92766028": [31, 368],
"chr10:95507165-95507559": [32, 394],
"chr10:117575269-117576136": [33, 867],
"chr10:127907437-127908080": [34, 643],
"chr11:11463847-11464873": [35, 1026],
"chr11:20148735-20149275": [36, 540],
"chr11:21002515-21003402": [37, 887],
"chr11:22592459-22593403": [38, 944],
"chr11:31570379-31571478": [39, 1099],
"chr11:33838628-33839502": [40, 874],
"chr11:34011946-34012343": [41, 397],
"chr11:46232528-46233371": [42, 843],
"chr11:52157518-52158138": [43, 620],
"chr11:54710065-54710643": [44, 578],
"chr11:54975394-54975873": [45, 479],
"chr11:65610863-65611587": [46, 724],
"chr11:66907517-66907837": [47, 320],
"chr11:69182625-69183167": [48, 542],
"chr11:78352158-78353054": [49, 896],
"chr11:82856905-82857744": [50, 839],
"chr11:87567616-87568360": [51, 744],
"chr11:87575311-87576385": [52, 1074],
"chr11:94407912-94408440": [53, 528],
"chr11:98285951-98286753": [54, 802],
"chr11:98303628-98304127": [55, 499],
"chr11:99016186-99016820": [56, 634],
"chr11:108726757-108727516": [57, 759],
"chr11:108827597-108828258": [58, 661],
"chr11:110214719-110215313": [59, 594],
"chr12:3109876-3110267": [60, 391],
"chr12:21697626-21698281": [61, 655],
"chr12:74516842-74517755": [62, 913],
"chr12:74611051-74611820": [63, 769],
"chr12:85110891-85111217": [64, 326],
"chr12:85662394-85663104": [65, 710],
"chr12:87833977-87834760": [66, 783],
"chr12:101395027-101395767": [67, 740],
"chr12:103732184-103733079": [68, 895],
"chr12:111185530-111186215": [69, 685],
"chr12:116670716-116671691": [70, 975],
"chr12:116696429-116697160": [71, 731],
"chr13:6452426-6453172": [72, 746],
"chr13:34871906-34872409": [73, 503],
"chr13:36815339-36816442": [74, 1103],
"chr13:42311565-42312103": [75, 538],
"chr13:51779697-51780541": [76, 844],
"chr13:51982514-51983079": [77, 565],
"chr13:63334054-63334722": [78, 668],
"chr13:85599706-85600597": [79, 891],
"chr13:98291101-98291428": [80, 327],
"chr13:114700773-114701501": [81, 728],
"chr14:39187378-39187979": [82, 601],
"chr14:53185159-53186012": [83, 853],
"chr14:54557679-54558308": [84, 629],
"chr14:61072465-61073256": [85, 791],
"chr14:61881997-61882684": [86, 687],
"chr14:64284388-64285040": [87, 652],
"chr14:85972789-85973327": [88, 538],
"chr15:5393222-5393977": [89, 755],
"chr15:9605852-9606768": [90, 916],
"chr15:62592966-62593637": [91, 671],
"chr15:63993065-63993580": [92, 515],
"chr15:66337449-66338120": [93, 671],
"chr15:74913207-74914442": [94, 1235],
"chr15:77798192-77798626": [95, 434],
"chr15:78321935-78322773": [96, 838],
"chr15:85217626-85218190": [97, 564],
"chr15:97200981-97201852": [98, 871],
"chr15:98820398-98820814": [99, 416],
"chr16:4498946-4499528": [100, 582],
"chr16:5308541-5309404": [101, 863],
"chr16:22346867-22347825": [102, 958],
"chr16:36396194-36396562": [103, 368],
"chr16:44611240-44611788": [104, 548],
"chr16:48705868-48706443": [105, 575],
"chr16:52000683-52001866": [106, 1183],
"chr16:76237355-76237591": [107, 236],
"chr16:76431954-76432667": [108, 713],
"chr16:84595380-84596017": [109, 637],
"chr16:89724342-89725127": [110, 785],
"chr16:89861897-89862591": [111, 694],
"chr17:7013440-7014049": [112, 609],
"chr17:8089621-8090408": [113, 787],
"chr17:24911700-24912500": [114, 800],
"chr17:28339999-28340883": [115, 884],
"chr17:28463477-28463989": [116, 512],
"chr17:35631650-35632237": [117, 587],
"chr17:35839180-35839776": [118, 596],
"chr17:39450927-39457022": [119, 6095],
"chr17:50873139-50873988": [120, 849],
"chr17:51627199-51628395": [121, 1196],
"chr17:56745210-56746144": [122, 934],
"chr17:70877881-70878757": [123, 876],
"chr17:83220692-83221326": [124, 634],
"chr17:84024265-84024986": [125, 721],
"chr18:3005202-3006082": [126, 880],
"chr18:39208843-39209539": [127, 696],
"chr18:40433910-40434388": [128, 478],
"chr18:75447304-75448028": [129, 724],
"chr18:75502743-75503477": [130, 734],
"chr18:82355522-82355995": [131, 473],
"chr18:89340229-89341162": [132, 933],
"chr19:4119455-4120306": [133, 851],
"chr19:4878447-4879352": [134, 905],
"chr19:33432275-33433175": [135, 900],
"chr19:59455157-59455890": [136, 733],
"chr2:11534585-11535092": [137, 507],
"chr2:26575280-26576001": [138, 721],
"chr2:30416593-30417348": [139, 755],
"chr2:32317221-32317640": [140, 419],
"chr2:32516115-32516586": [141, 471],
"chr2:35803851-35804358": [142, 507],
"chr2:37593767-37594274": [143, 507],
"chr2:38293709-38294207": [144, 498],
"chr2:65845877-65846273": [145, 396],
"chr2:70675780-70676704": [146, 924],
"chr2:80262489-80263065": [147, 576],
"chr2:84579863-84580784": [148, 921],
"chr2:98462929-98463961": [149, 1032],
"chr2:98466950-98468313": [150, 1363],
"chr2:104326422-104326932": [151, 510],
"chr2:117034052-117034623": [152, 571],
"chr2:118942201-118942891": [153, 690],
"chr2:118979737-118980443": [154, 706],
"chr2:153217149-153217865": [155, 716],
"chr2:157258762-157259369": [156, 607],
"chr2:158100548-158101312": [157, 764],
"chr2:167578972-167579448": [158, 476],
"chr2:170194522-170195043": [159, 521],
"chr2:181846625-181847434": [160, 809],
"chr3:52966229-52966809": [161, 580],
"chr3:56663271-56663681": [162, 410],
"chr3:89958063-89958718": [163, 655],
"chr3:96665260-96666201": [164, 941],
"chr3:107924572-107925196": [165, 624],
"chr3:109324309-109324904": [166, 595],
"chr3:126826614-126827447": [167, 833],
"chr3:127755015-127755843": [168, 828],
"chr3:136680046-136680862": [169, 816],
"chr4:16090973-16091493": [170, 520],
"chr4:32616412-32617225": [171, 813],
"chr4:63984012-63984382": [172, 370],
"chr4:69864482-69864755": [173, 273],
"chr4:87505686-87506215": [174, 529],
"chr4:100665417-100666293": [175, 876],
"chr4:102209371-102210241": [176, 870],
"chr4:116975974-116976664": [177, 690],
"chr4:120483941-120484702": [178, 761],
"chr4:125605762-125606487": [179, 725],
"chr4:135332186-135332481": [180, 295],
"chr5:2999879-3002720": [181, 2841],
"chr5:20922938-20923479": [182, 541],
"chr5:65614599-65614890": [183, 291],
"chr5:72451736-72452199": [184, 463],
"chr5:99739819-99740642": [185, 823],
"chr5:105925213-105925733": [186, 520],
"chr5:107535406-107536158": [187, 752],
"chr5:111080072-111080554": [188, 482],
"chr5:113931504-113932117": [189, 613],
"chr5:114900498-114900854": [190, 356],
"chr5:138017044-138017774": [191, 730],
"chr5:138887064-138887932": [192, 868],
"chr5:139635703-139636371": [193, 668],
"chr5:146564914-146565732": [194, 818],
"chr6:22299145-22300111": [195, 966],
"chr6:41483560-41484175": [196, 615],
"chr6:50346312-50347226": [197, 914],
"chr6:82887059-82887868": [198, 809],
"chr6:87507541-87508280": [199, 739],
"chr6:98957869-98958615": [200, 746],
"chr6:103614677-103615208": [201, 531],
"chr6:124715721-124716488": [202, 767],
"chr6:140582661-140583333": [203, 672],
"chr6:142874566-142875347": [204, 781],
"chr6:143448247-143448538": [205, 291],
"chr6:144627485-144628192": [206, 707],
"chr7:15107437-15108187": [207, 750],
"chr7:27642021-27642590": [208, 569],
"chr7:28091616-28092165": [209, 549],
"chr7:28843157-28843775": [210, 618],
"chr7:45378170-45378868": [211, 698],
"chr7:45459955-45460620": [212, 665],
"chr7:67944245-67944875": [213, 630],
"chr7:89882241-89882812": [214, 571],
"chr7:110223126-110223883": [215, 757],
"chr7:114270709-114271789": [216, 1080],
"chr7:125263193-125263754": [217, 561],
"chr8:18863700-18864409": [218, 709],
"chr8:24560844-24561472": [219, 628],
"chr8:26739623-26740148": [220, 525],
"chr8:27119284-27120036": [221, 752],
"chr8:37662390-37663098": [222, 708],
"chr8:73602383-73603191": [223, 808],
"chr8:108155588-108156379": [224, 791],
"chr8:114482228-114482870": [225, 642],
"chr8:118271658-118272375": [226, 717],
"chr8:125169965-125171088": [227, 1123],
"chr8:127608056-127608718": [228, 662],
"chr8:130848661-130849522": [229, 861],
"chr9:21199954-21200829": [230, 875],
"chr9:24292320-24292667": [231, 347],
"chr9:32810190-32811196": [232, 1006],
"chr9:35054745-35055295": [233, 550],
"chr9:44288655-44289439": [234, 784],
"chr9:57664560-57665271": [235, 711],
"chr9:60796844-60797427": [236, 583],
"chr9:63518829-63519421": [237, 592],
"chr9:63536164-63536742": [238, 578],
"chr9:66718328-66718862": [239, 534],
"chr9:68833530-68834353": [240, 823],
"chr9:72264394-72264682": [241, 288],
"chr9:75195785-75196662": [242, 877],
"chr9:85210246-85211249": [243, 1003],
"chr9:100331404-100331968": [244, 564],
"chr9:107136568-107137167": [245, 599],
"chr9:107147611-107148252": [246, 641],
"chr9:110530301-110530814": [247, 513],
"chr9:119592533-119593099": [248, 566],
"chr9:119879098-119879479": [249, 381],
"chr9:119923130-119923715": [250, 585],
"chr9:119940332-119941120": [251, 788],
"chr9:120006807-120007177": [252, 370],
"chrX:38587943-38588780": [253, 837],
"chrX:73676122-73676707": [254, 585],
"chrX:98234436-98235044": [255, 608],
"chrX:138729250-138729574": [256, 324]
};
var allmodules={
1:{
	"chr1:23487160-23488639":{
},
	"chr1:24566603-24569405":{
},
	"chr1:51393030-51393679":{
},
	"chr1:51538255-51538850":{
},
	"chr1:63599505-63600306":{
},
	"chr1:132907236-132907871":{
},
	"chr1:134692915-134693672":{
},
	"chr1:155141987-155142749":{
},
	"chr1:175877427-175878443":{
},
	"chr10:13688877-13689651":{
},
	"chr10:26048076-26048757":{
},
	"chr10:39680230-39680917":{
},
	"chr10:80201629-80202126":{
},
	"chr10:80509162-80509451":{
},
	"chr10:95507165-95507559":{
},
	"chr11:20148735-20149275":{
},
	"chr11:31570379-31571478":{
},
	"chr11:52157518-52158138":{
},
	"chr11:54710065-54710643":{
},
	"chr11:54975394-54975873":{
},
	"chr11:66907517-66907837":{
},
	"chr11:108827597-108828258":{
},
	"chr12:21697626-21698281":{
},
	"chr12:85110891-85111217":{
},
	"chr12:85662394-85663104":{
},
	"chr12:116670716-116671691":{
},
	"chr13:6452426-6453172":{
},
	"chr13:34871906-34872409":{
},
	"chr13:51779697-51780541":{
},
	"chr13:85599706-85600597":{
},
	"chr13:98291101-98291428":{
},
	"chr14:39187378-39187979":{
},
	"chr14:61072465-61073256":{
},
	"chr14:64284388-64285040":{
},
	"chr15:62592966-62593637":{
},
	"chr15:66337449-66338120":{
},
	"chr16:4498946-4499528":{
},
	"chr16:22346867-22347825":{
},
	"chr16:36396194-36396562":{
},
	"chr16:44611240-44611788":{
},
	"chr16:48705868-48706443":{
},
	"chr16:76237355-76237591":{
},
	"chr16:76431954-76432667":{
},
	"chr16:84595380-84596017":{
},
	"chr17:7013440-7014049":{
},
	"chr18:40433910-40434388":{
},
	"chr18:82355522-82355995":{
},
	"chr19:4878447-4879352":{
},
	"chr19:59455157-59455890":{
},
	"chr2:26575280-26576001":{
},
	"chr2:38293709-38294207":{
},
	"chr2:65845877-65846273":{
},
	"chr2:84579863-84580784":{
},
	"chr2:98466950-98468313":{
},
	"chr2:104326422-104326932":{
},
	"chr2:157258762-157259369":{
},
	"chr2:158100548-158101312":{
},
	"chr3:56663271-56663681":{
},
	"chr3:96665260-96666201":{
},
	"chr3:127755015-127755843":{
},
	"chr4:16090973-16091493":{
},
	"chr4:63984012-63984382":{
},
	"chr4:69864482-69864755":{
},
	"chr4:100665417-100666293":{
},
	"chr4:116975974-116976664":{
},
	"chr4:120483941-120484702":{
},
	"chr4:125605762-125606487":{
},
	"chr5:2999879-3002720":{
},
	"chr5:20922938-20923479":{
},
	"chr5:65614599-65614890":{
},
	"chr5:72451736-72452199":{
},
	"chr5:107535406-107536158":{
},
	"chr5:113931504-113932117":{
},
	"chr5:138887064-138887932":{
},
	"chr5:146564914-146565732":{
},
	"chr6:98957869-98958615":{
},
	"chr6:103614677-103615208":{
},
	"chr6:143448247-143448538":{
},
	"chr7:27642021-27642590":{
},
	"chr7:28091616-28092165":{
},
	"chr7:28843157-28843775":{
},
	"chr7:45378170-45378868":{
},
	"chr7:45459955-45460620":{
},
	"chr7:67944245-67944875":{
},
	"chr7:110223126-110223883":{
},
	"chr8:24560844-24561472":{
},
	"chr8:26739623-26740148":{
},
	"chr8:130848661-130849522":{
},
	"chr9:24292320-24292667":{
},
	"chr9:35054745-35055295":{
},
	"chr9:44288655-44289439":{
},
	"chr9:60796844-60797427":{
},
	"chr9:63536164-63536742":{
},
	"chr9:110530301-110530814":{
},
	"chr9:119592533-119593099":{
},
	"chr9:119879098-119879479":{
},
	"chr9:119940332-119941120":{
},
	"chrX:73676122-73676707":{
},
	"chrX:98234436-98235044":{
},
	"chrX:138729250-138729574":{
}
	},
2:{
	"chr1:40419842-40420980":{
	1:{"pos":536,"dir":"L"}},
	"chr1:80092639-80093456":{
	1:{"pos":449,"dir":"R"}, 2:{"pos":428,"dir":"L"}},
	"chr1:120138586-120139086":{
	1:{"pos":398,"dir":"R"}, 2:{"pos":380,"dir":"L"}},
	"chr1:133031701-133032548":{
	1:{"pos":515,"dir":"R"}, 2:{"pos":498,"dir":"R"}},
	"chr1:138416585-138417422":{
	1:{"pos":114,"dir":"L"}},
	"chr1:163507438-163508304":{
	1:{"pos":226,"dir":"R"}, 2:{"pos":310,"dir":"R"}},
	"chr1:186554726-186555192":{
	1:{"pos":205,"dir":"L"}},
	"chr1:192894188-192894901":{
	1:{"pos":438,"dir":"R"}},
	"chr10:19628484-19629258":{
	1:{"pos":351,"dir":"L"}, 3:{"pos":281,"dir":"R"}},
	"chr10:79836617-79837582":{
	1:{"pos":341,"dir":"R"}},
	"chr10:80913080-80914050":{
	1:{"pos":489,"dir":"R"}, 3:{"pos":418,"dir":"R"}},
	"chr10:92765660-92766028":{
	1:{"pos":223,"dir":"R"}},
	"chr10:127907437-127908080":{
	1:{"pos":293,"dir":"R"}},
	"chr11:21002515-21003402":{
	1:{"pos":731,"dir":"L"}, 3:{"pos":243,"dir":"R"}},
	"chr11:34011946-34012343":{
	1:{"pos":111,"dir":"R"}},
	"chr11:87567616-87568360":{
	1:{"pos":466,"dir":"L"}, 2:{"pos":328,"dir":"R"}, 6:{"pos":577,"dir":"R"}},
	"chr11:87575311-87576385":{
	1:{"pos":716,"dir":"L"}, 3:{"pos":578,"dir":"R"}},
	"chr11:98285951-98286753":{
	1:{"pos":499,"dir":"L"}},
	"chr11:110214719-110215313":{
	1:{"pos":327,"dir":"L"}},
	"chr12:111185530-111186215":{
	1:{"pos":525,"dir":"L"}, 2:{"pos":325,"dir":"L"}, 3:{"pos":203,"dir":"L"}},
	"chr13:51982514-51983079":{
	1:{"pos":348,"dir":"L"}, 3:{"pos":446,"dir":"L"}},
	"chr13:114700773-114701501":{
	1:{"pos":220,"dir":"R"}, 2:{"pos":234,"dir":"L"}},
	"chr14:61881997-61882684":{
	1:{"pos":309,"dir":"R"}, 2:{"pos":246,"dir":"R"}},
	"chr15:5393222-5393977":{
	1:{"pos":514,"dir":"R"}, 6:{"pos":478,"dir":"L"}},
	"chr15:74913207-74914442":{
	1:{"pos":212,"dir":"L"}, 3:{"pos":453,"dir":"R"}},
	"chr15:77798192-77798626":{
	1:{"pos":233,"dir":"L"}, 2:{"pos":166,"dir":"R"}, 3:{"pos":106,"dir":"L"}},
	"chr15:85217626-85218190":{
	1:{"pos":312,"dir":"R"}, 2:{"pos":509,"dir":"R"}, 6:{"pos":479,"dir":"R"}},
	"chr15:98820398-98820814":{
	1:{"pos":231,"dir":"R"}, 3:{"pos":371,"dir":"L"}},
	"chr16:52000683-52001866":{
	1:{"pos":683,"dir":"R"}, 2:{"pos":668,"dir":"R"}, 3:{"pos":701,"dir":"R"}},
	"chr16:89724342-89725127":{
	1:{"pos":350,"dir":"R"}, 2:{"pos":281,"dir":"L"}, 3:{"pos":307,"dir":"R"}},
	"chr17:8089621-8090408":{
	1:{"pos":377,"dir":"R"}},
	"chr17:24911700-24912500":{
	1:{"pos":327,"dir":"R"}, 6:{"pos":703,"dir":"L"}},
	"chr17:28339999-28340883":{
	1:{"pos":391,"dir":"L"}, 2:{"pos":511,"dir":"L"}, 6:{"pos":310,"dir":"R"}},
	"chr17:51627199-51628395":{
	1:{"pos":491,"dir":"R"}, 2:{"pos":1004,"dir":"R"}, 3:{"pos":328,"dir":"L"}},
	"chr17:56745210-56746144":{
	1:{"pos":502,"dir":"R"}},
	"chr17:70877881-70878757":{
	1:{"pos":762,"dir":"R"}, 2:{"pos":511,"dir":"R"}},
	"chr17:83220692-83221326":{
	1:{"pos":289,"dir":"R"}},
	"chr18:39208843-39209539":{
	1:{"pos":670,"dir":"L"}},
	"chr19:33432275-33433175":{
	1:{"pos":617,"dir":"L"}},
	"chr2:30416593-30417348":{
	1:{"pos":384,"dir":"L"}},
	"chr2:32516115-32516586":{
	1:{"pos":143,"dir":"L"}, 6:{"pos":427,"dir":"L"}},
	"chr2:35803851-35804358":{
	1:{"pos":229,"dir":"R"}, 2:{"pos":242,"dir":"R"}, 6:{"pos":482,"dir":"R"}},
	"chr2:181846625-181847434":{
	1:{"pos":672,"dir":"R"}, 3:{"pos":762,"dir":"L"}},
	"chr3:52966229-52966809":{
	1:{"pos":238,"dir":"L"}, 2:{"pos":167,"dir":"L"}, 3:{"pos":301,"dir":"R"}, 6:{"pos":131,"dir":"L"}},
	"chr3:89958063-89958718":{
	1:{"pos":270,"dir":"R"}},
	"chr3:107924572-107925196":{
	1:{"pos":257,"dir":"L"}},
	"chr4:32616412-32617225":{
	1:{"pos":338,"dir":"R"}},
	"chr4:135332186-135332481":{
	1:{"pos":143,"dir":"R"}},
	"chr5:111080072-111080554":{
	1:{"pos":417,"dir":"L"}},
	"chr5:114900498-114900854":{
	1:{"pos":126,"dir":"R"}},
	"chr5:138017044-138017774":{
	1:{"pos":360,"dir":"R"}},
	"chr6:50346312-50347226":{
	1:{"pos":378,"dir":"R"}},
	"chr6:124715721-124716488":{
	1:{"pos":510,"dir":"R"}},
	"chr6:144627485-144628192":{
	1:{"pos":275,"dir":"L"}, 2:{"pos":262,"dir":"L"}},
	"chr7:89882241-89882812":{
	1:{"pos":318,"dir":"L"}, 6:{"pos":240,"dir":"R"}},
	"chr7:114270709-114271789":{
	1:{"pos":173,"dir":"L"}, 6:{"pos":47,"dir":"R"}},
	"chr7:125263193-125263754":{
	1:{"pos":389,"dir":"L"}, 6:{"pos":87,"dir":"R"}},
	"chr8:18863700-18864409":{
	1:{"pos":365,"dir":"R"}, 6:{"pos":616,"dir":"L"}},
	"chr8:73602383-73603191":{
	1:{"pos":321,"dir":"L"}},
	"chr8:114482228-114482870":{
	1:{"pos":433,"dir":"L"}, 3:{"pos":144,"dir":"R"}, 6:{"pos":506,"dir":"R"}},
	"chr8:118271658-118272375":{
	1:{"pos":349,"dir":"R"}},
	"chr8:127608056-127608718":{
	1:{"pos":361,"dir":"R"}},
	"chr9:32810190-32811196":{
	1:{"pos":525,"dir":"L"}, 3:{"pos":42,"dir":"L"}},
	"chr9:72264394-72264682":{
	1:{"pos":155,"dir":"R"}},
	"chr9:100331404-100331968":{
	1:{"pos":219,"dir":"R"}, 2:{"pos":205,"dir":"R"}, 3:{"pos":122,"dir":"L"}},
	"chr9:119923130-119923715":{
	1:{"pos":464,"dir":"R"}},
	"chrX:38587943-38588780":{
	1:{"pos":424,"dir":"L"}, 6:{"pos":111,"dir":"R"}}
	},
3:{
	"chr1:36864939-36865549":{
	2:{"pos":33,"dir":"R"}},
	"chr1:90306610-90307201":{
	2:{"pos":228,"dir":"L"}, 4:{"pos":500,"dir":"R"}},
	"chr1:167681556-167682229":{
	6:{"pos":36,"dir":"R"}},
	"chr11:22592459-22593403":{
	3:{"pos":81,"dir":"R"}, 4:{"pos":6,"dir":"L"}},
	"chr11:33838628-33839502":{
	3:{"pos":31,"dir":"L"}, 4:{"pos":378,"dir":"R"}},
	"chr11:65610863-65611587":{
	2:{"pos":31,"dir":"R"}},
	"chr11:69182625-69183167":{
	3:{"pos":416,"dir":"R"}, 6:{"pos":44,"dir":"L"}},
	"chr11:82856905-82857744":{
	2:{"pos":556,"dir":"R"}},
	"chr11:98303628-98304127":{
	4:{"pos":245,"dir":"R"}},
	"chr11:99016186-99016820":{
	6:{"pos":81,"dir":"R"}},
	"chr11:108726757-108727516":{
	3:{"pos":293,"dir":"R"}},
	"chr12:3109876-3110267":{
	6:{"pos":327,"dir":"L"}},
	"chr12:74516842-74517755":{
	6:{"pos":165,"dir":"R"}},
	"chr12:74611051-74611820":{
	2:{"pos":488,"dir":"R"}},
	"chr12:101395027-101395767":{
	2:{"pos":341,"dir":"L"}, 4:{"pos":361,"dir":"L"}},
	"chr12:103732184-103733079":{
	4:{"pos":421,"dir":"L"}},
	"chr13:36815339-36816442":{
	6:{"pos":31,"dir":"L"}},
	"chr14:53185159-53186012":{
	2:{"pos":258,"dir":"L"}, 4:{"pos":417,"dir":"R"}},
	"chr14:54557679-54558308":{
	3:{"pos":110,"dir":"L"}},
	"chr14:85972789-85973327":{
	2:{"pos":26,"dir":"R"}},
	"chr15:63993065-63993580":{
	3:{"pos":326,"dir":"L"}},
	"chr16:89861897-89862591":{
	2:{"pos":296,"dir":"L"}},
	"chr17:28463477-28463989":{
	2:{"pos":344,"dir":"L"}},
	"chr17:35839180-35839776":{
	3:{"pos":148,"dir":"L"}},
	"chr17:39450927-39457022":{
	3:{"pos":5504,"dir":"R"}},
	"chr17:50873139-50873988":{
	2:{"pos":715,"dir":"R"}},
	"chr17:84024265-84024986":{
	3:{"pos":193,"dir":"L"}, 4:{"pos":452,"dir":"R"}, 6:{"pos":218,"dir":"L"}},
	"chr18:75447304-75448028":{
	6:{"pos":272,"dir":"R"}},
	"chr18:75502743-75503477":{
	2:{"pos":314,"dir":"L"}, 4:{"pos":280,"dir":"R"}},
	"chr18:89340229-89341162":{
	4:{"pos":447,"dir":"R"}},
	"chr2:11534585-11535092":{
	2:{"pos":323,"dir":"L"}},
	"chr2:32317221-32317640":{
	2:{"pos":148,"dir":"R"}, 3:{"pos":229,"dir":"R"}, 6:{"pos":256,"dir":"R"}},
	"chr2:37593767-37594274":{
	3:{"pos":260,"dir":"R"}},
	"chr2:70675780-70676704":{
	2:{"pos":392,"dir":"L"}},
	"chr2:117034052-117034623":{
	4:{"pos":332,"dir":"L"}},
	"chr2:153217149-153217865":{
	2:{"pos":327,"dir":"R"}, 3:{"pos":628,"dir":"L"}, 4:{"pos":264,"dir":"L"}},
	"chr2:167578972-167579448":{
	4:{"pos":273,"dir":"R"}, 6:{"pos":448,"dir":"L"}},
	"chr2:170194522-170195043":{
	4:{"pos":277,"dir":"L"}},
	"chr3:109324309-109324904":{
	4:{"pos":267,"dir":"R"}},
	"chr3:126826614-126827447":{
	2:{"pos":378,"dir":"L"}},
	"chr3:136680046-136680862":{
	3:{"pos":551,"dir":"L"}},
	"chr4:102209371-102210241":{
	3:{"pos":577,"dir":"R"}},
	"chr5:99739819-99740642":{
	3:{"pos":784,"dir":"R"}},
	"chr5:105925213-105925733":{
	2:{"pos":188,"dir":"L"}, 4:{"pos":208,"dir":"R"}},
	"chr5:139635703-139636371":{
	4:{"pos":350,"dir":"L"}},
	"chr6:22299145-22300111":{
	4:{"pos":586,"dir":"R"}},
	"chr6:41483560-41484175":{
	2:{"pos":504,"dir":"L"}},
	"chr6:82887059-82887868":{
	2:{"pos":268,"dir":"L"}},
	"chr6:87507541-87508280":{
	2:{"pos":264,"dir":"L"}, 3:{"pos":347,"dir":"L"}},
	"chr6:142874566-142875347":{
	3:{"pos":752,"dir":"L"}},
	"chr8:27119284-27120036":{
	3:{"pos":455,"dir":"R"}},
	"chr8:37662390-37663098":{
	2:{"pos":387,"dir":"L"}, 4:{"pos":443,"dir":"L"}},
	"chr8:108155588-108156379":{
	6:{"pos":600,"dir":"R"}},
	"chr9:63518829-63519421":{
	2:{"pos":532,"dir":"L"}, 4:{"pos":192,"dir":"L"}},
	"chr9:66718328-66718862":{
	2:{"pos":29,"dir":"R"}},
	"chr9:75195785-75196662":{
	3:{"pos":396,"dir":"L"}},
	"chr9:85210246-85211249":{
	2:{"pos":982,"dir":"L"}, 3:{"pos":24,"dir":"L"}},
	"chr9:107136568-107137167":{
	4:{"pos":293,"dir":"R"}},
	"chr9:107147611-107148252":{
	3:{"pos":272,"dir":"R"}}
	},
4:{
	"chr1:20897671-20898254":{
	1:{"pos":227,"dir":"L"}, 5:{"pos":567,"dir":"R"}},
	"chr1:81169061-81169940":{
	2:{"pos":765,"dir":"L"}, 5:{"pos":45,"dir":"L"}},
	"chr1:145768540-145769187":{
	3:{"pos":206,"dir":"R"}, 5:{"pos":22,"dir":"R"}},
	"chr10:117575269-117576136":{
	4:{"pos":425,"dir":"L"}, 5:{"pos":319,"dir":"L"}},
	"chr11:11463847-11464873":{
	2:{"pos":665,"dir":"R"}, 5:{"pos":704,"dir":"R"}},
	"chr11:46232528-46233371":{
	2:{"pos":501,"dir":"R"}, 5:{"pos":576,"dir":"L"}},
	"chr11:78352158-78353054":{
	2:{"pos":215,"dir":"R"}, 5:{"pos":794,"dir":"L"}},
	"chr11:94407912-94408440":{
	5:{"pos":483,"dir":"L"}},
	"chr12:87833977-87834760":{
	5:{"pos":672,"dir":"L"}},
	"chr12:116696429-116697160":{
	2:{"pos":394,"dir":"L"}, 4:{"pos":376,"dir":"R"}, 5:{"pos":46,"dir":"R"}},
	"chr13:42311565-42312103":{
	1:{"pos":325,"dir":"R"}, 3:{"pos":454,"dir":"L"}, 4:{"pos":358,"dir":"L"}, 5:{"pos":375,"dir":"R"}},
	"chr13:63334054-63334722":{
	4:{"pos":524,"dir":"L"}, 5:{"pos":543,"dir":"R"}},
	"chr15:9605852-9606768":{
	4:{"pos":348,"dir":"R"}, 5:{"pos":432,"dir":"R"}},
	"chr15:78321935-78322773":{
	2:{"pos":401,"dir":"R"}, 4:{"pos":491,"dir":"R"}, 5:{"pos":71,"dir":"L"}},
	"chr15:97200981-97201852":{
	2:{"pos":353,"dir":"L"}, 4:{"pos":412,"dir":"L"}, 5:{"pos":787,"dir":"R"}, 6:{"pos":134,"dir":"L"}},
	"chr16:5308541-5309404":{
	4:{"pos":374,"dir":"L"}, 5:{"pos":704,"dir":"R"}},
	"chr17:35631650-35632237":{
	2:{"pos":150,"dir":"L"}, 5:{"pos":403,"dir":"R"}},
	"chr18:3005202-3006082":{
	3:{"pos":26,"dir":"R"}, 5:{"pos":271,"dir":"L"}, 6:{"pos":513,"dir":"L"}},
	"chr19:4119455-4120306":{
	2:{"pos":437,"dir":"L"}, 4:{"pos":374,"dir":"R"}, 5:{"pos":601,"dir":"R"}},
	"chr2:80262489-80263065":{
	5:{"pos":37,"dir":"L"}},
	"chr2:98462929-98463961":{
	5:{"pos":125,"dir":"L"}},
	"chr2:118942201-118942891":{
	1:{"pos":268,"dir":"L"}, 5:{"pos":672,"dir":"L"}},
	"chr2:118979737-118980443":{
	2:{"pos":151,"dir":"L"}, 5:{"pos":598,"dir":"L"}},
	"chr4:87505686-87506215":{
	4:{"pos":146,"dir":"R"}, 5:{"pos":371,"dir":"R"}},
	"chr6:140582661-140583333":{
	5:{"pos":197,"dir":"L"}},
	"chr7:15107437-15108187":{
	3:{"pos":146,"dir":"R"}, 5:{"pos":166,"dir":"R"}},
	"chr8:125169965-125171088":{
	5:{"pos":11,"dir":"R"}},
	"chr9:21199954-21200829":{
	2:{"pos":785,"dir":"R"}, 5:{"pos":846,"dir":"L"}},
	"chr9:57664560-57665271":{
	2:{"pos":329,"dir":"R"}, 5:{"pos":279,"dir":"R"}},
	"chr9:68833530-68834353":{
	2:{"pos":175,"dir":"R"}, 4:{"pos":448,"dir":"L"}, 5:{"pos":74,"dir":"R"}},
	"chr9:120006807-120007177":{
	2:{"pos":220,"dir":"R"}, 5:{"pos":234,"dir":"R"}}
	}
};

var moduleMotifPercent={
1:[ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
2:[ 1.0, 0.2835820895522388, 0.2537313432835821, 0.0, 0.0, 0.208955223880597],
3:[ 0.0, 0.423728813559322, 0.3559322033898305, 0.3559322033898305, 0.0, 0.1864406779661017],
4:[ 0.0967741935483871, 0.45161290322580644, 0.12903225806451613, 0.3548387096774194, 1.0, 0.06451612903225806]
};
