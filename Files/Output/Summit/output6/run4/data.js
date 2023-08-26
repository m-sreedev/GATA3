var solutionDir="/home/sreedev/Output/output6//run4";
var wholedata={
"totalseqs":236,
"motifs":2,
"modules":3
};
var inputfasta="summit6.fa";

var maxlength=200;
var maxlengthSeqTags=25;
var minmotpercent=0.05;
var logoSizes={ 1: [453 ,150],
1: [453 ,150]
};
var cplot= [300,450];
var fullpart= [3600,6000];


var moduleMotifColors={ 1: ["#FF0000", "#FF0000"],
2: ["#FF0000", "#FF0000"],
3: ["#FF0000", "#FF0000"]
};

var motifwidths={
1:14,
2:14
};

var modseqs={
1: 120,
2: 68,
3: 48
};

var motifSeqs={
1: 68,
2: 48
};

var seqdetails={
"chr1:20897671-20898254": [0, 200],
"chr1:24566603-24569405": [1, 200],
"chr1:36864939-36865549": [2, 200],
"chr1:40419842-40420980": [3, 200],
"chr1:51538255-51538850": [4, 200],
"chr1:63599505-63600306": [5, 200],
"chr1:80092639-80093456": [6, 200],
"chr1:81169061-81169940": [7, 200],
"chr1:90306610-90307201": [8, 200],
"chr1:120138586-120139086": [9, 200],
"chr1:132907236-132907871": [10, 200],
"chr1:133031701-133032548": [11, 200],
"chr1:134692915-134693672": [12, 200],
"chr1:138416585-138417422": [13, 200],
"chr1:145768540-145769187": [14, 200],
"chr1:155141987-155142749": [15, 200],
"chr1:163507438-163508304": [16, 200],
"chr1:167681556-167682229": [17, 200],
"chr1:175877427-175878443": [18, 200],
"chr1:186554726-186555192": [19, 200],
"chr1:192894188-192894901": [20, 200],
"chr10:13688877-13689651": [21, 200],
"chr10:19628484-19629258": [22, 200],
"chr10:26048076-26048757": [23, 200],
"chr10:39680230-39680917": [24, 200],
"chr10:79836617-79837582": [25, 200],
"chr10:80201629-80202126": [26, 200],
"chr10:80509162-80509451": [27, 200],
"chr10:80913080-80914050": [28, 200],
"chr10:92765660-92766028": [29, 200],
"chr10:95507165-95507559": [30, 200],
"chr10:117575269-117576136": [31, 200],
"chr10:127907437-127908080": [32, 200],
"chr11:11463847-11464873": [33, 200],
"chr11:20148735-20149275": [34, 200],
"chr11:21002515-21003402": [35, 200],
"chr11:22592459-22593403": [36, 200],
"chr11:31570379-31571478": [37, 200],
"chr11:33838628-33839502": [38, 200],
"chr11:34011946-34012343": [39, 200],
"chr11:46232528-46233371": [40, 200],
"chr11:52157518-52158138": [41, 200],
"chr11:54710065-54710643": [42, 200],
"chr11:65610863-65611587": [43, 200],
"chr11:69182625-69183167": [44, 200],
"chr11:78352158-78353054": [45, 200],
"chr11:82856905-82857744": [46, 200],
"chr11:87567616-87568360": [47, 200],
"chr11:87575311-87576385": [48, 200],
"chr11:94407912-94408440": [49, 200],
"chr11:98285951-98286753": [50, 200],
"chr11:98303628-98304127": [51, 200],
"chr11:99016186-99016820": [52, 200],
"chr11:108726757-108727516": [53, 200],
"chr11:110214719-110215313": [54, 200],
"chr12:3109876-3110267": [55, 200],
"chr12:21697626-21698281": [56, 200],
"chr12:74516842-74517755": [57, 200],
"chr12:74611051-74611820": [58, 200],
"chr12:85110891-85111217": [59, 200],
"chr12:85662394-85663104": [60, 200],
"chr12:87833977-87834760": [61, 200],
"chr12:101395027-101395767": [62, 200],
"chr12:103732184-103733079": [63, 200],
"chr12:111185530-111186215": [64, 200],
"chr12:116670716-116671691": [65, 200],
"chr12:116696429-116697160": [66, 200],
"chr13:6452426-6453172": [67, 200],
"chr13:34871906-34872409": [68, 200],
"chr13:36815339-36816442": [69, 200],
"chr13:42311565-42312103": [70, 200],
"chr13:51779697-51780541": [71, 200],
"chr13:51982514-51983079": [72, 200],
"chr13:63334054-63334722": [73, 200],
"chr13:85599706-85600597": [74, 200],
"chr13:98291101-98291428": [75, 200],
"chr13:114700773-114701501": [76, 200],
"chr14:53185159-53186012": [77, 200],
"chr14:54557679-54558308": [78, 200],
"chr14:61072465-61073256": [79, 200],
"chr14:61881997-61882684": [80, 200],
"chr14:64284388-64285040": [81, 200],
"chr14:85972789-85973327": [82, 200],
"chr15:5393222-5393977": [83, 200],
"chr15:9605852-9606768": [84, 200],
"chr15:62592966-62593637": [85, 200],
"chr15:63993065-63993580": [86, 200],
"chr15:66337449-66338120": [87, 200],
"chr15:74913207-74914442": [88, 200],
"chr15:77798192-77798626": [89, 200],
"chr15:78321935-78322773": [90, 200],
"chr15:85217626-85218190": [91, 200],
"chr15:97200981-97201852": [92, 200],
"chr15:98820398-98820814": [93, 200],
"chr16:4498946-4499528": [94, 200],
"chr16:5308541-5309404": [95, 200],
"chr16:22346867-22347825": [96, 200],
"chr16:36396194-36396562": [97, 200],
"chr16:44611240-44611788": [98, 200],
"chr16:48705868-48706443": [99, 200],
"chr16:52000683-52001866": [100, 200],
"chr16:76237355-76237591": [101, 200],
"chr16:76431954-76432667": [102, 200],
"chr16:84595380-84596017": [103, 200],
"chr16:89724342-89725127": [104, 200],
"chr16:89861897-89862591": [105, 200],
"chr17:7013440-7014049": [106, 200],
"chr17:8089621-8090408": [107, 200],
"chr17:24911700-24912500": [108, 200],
"chr17:28339999-28340883": [109, 200],
"chr17:28463477-28463989": [110, 200],
"chr17:35631650-35632237": [111, 200],
"chr17:35839180-35839776": [112, 200],
"chr17:39450927-39457022": [113, 200],
"chr17:50873139-50873988": [114, 200],
"chr17:51627199-51628395": [115, 200],
"chr17:56745210-56746144": [116, 200],
"chr17:70877881-70878757": [117, 200],
"chr17:83220692-83221326": [118, 200],
"chr17:84024265-84024986": [119, 200],
"chr18:3005202-3006082": [120, 200],
"chr18:40433910-40434388": [121, 200],
"chr18:75447304-75448028": [122, 200],
"chr18:75502743-75503477": [123, 200],
"chr18:82355522-82355995": [124, 200],
"chr18:89340229-89341162": [125, 200],
"chr19:4119455-4120306": [126, 200],
"chr19:4878447-4879352": [127, 200],
"chr19:33432275-33433175": [128, 200],
"chr19:59455157-59455890": [129, 200],
"chr2:11534585-11535092": [130, 200],
"chr2:26575280-26576001": [131, 200],
"chr2:30416593-30417348": [132, 200],
"chr2:32317221-32317640": [133, 200],
"chr2:32516115-32516586": [134, 200],
"chr2:35803851-35804358": [135, 200],
"chr2:37593767-37594274": [136, 200],
"chr2:38293709-38294207": [137, 200],
"chr2:65845877-65846273": [138, 200],
"chr2:70675780-70676704": [139, 200],
"chr2:80262489-80263065": [140, 200],
"chr2:84579863-84580784": [141, 200],
"chr2:104326422-104326932": [142, 200],
"chr2:117034052-117034623": [143, 200],
"chr2:118942201-118942891": [144, 200],
"chr2:118979737-118980443": [145, 200],
"chr2:153217149-153217865": [146, 200],
"chr2:157258762-157259369": [147, 200],
"chr2:158100548-158101312": [148, 200],
"chr2:167578972-167579448": [149, 200],
"chr2:170194522-170195043": [150, 200],
"chr2:181846625-181847434": [151, 200],
"chr3:52966229-52966809": [152, 200],
"chr3:89958063-89958718": [153, 200],
"chr3:96665260-96666201": [154, 200],
"chr3:107924572-107925196": [155, 200],
"chr3:109324309-109324904": [156, 200],
"chr3:126826614-126827447": [157, 200],
"chr3:127755015-127755843": [158, 200],
"chr3:136680046-136680862": [159, 200],
"chr4:16090973-16091493": [160, 200],
"chr4:32616412-32617225": [161, 200],
"chr4:69864482-69864755": [162, 200],
"chr4:87505686-87506215": [163, 200],
"chr4:102209371-102210241": [164, 200],
"chr4:116975974-116976664": [165, 200],
"chr4:120483941-120484702": [166, 200],
"chr4:125605762-125606487": [167, 200],
"chr4:135332186-135332481": [168, 200],
"chr5:20922938-20923479": [169, 200],
"chr5:65614599-65614890": [170, 200],
"chr5:72451736-72452199": [171, 200],
"chr5:99739819-99740642": [172, 200],
"chr5:105925213-105925733": [173, 200],
"chr5:107535406-107536158": [174, 200],
"chr5:111080072-111080554": [175, 200],
"chr5:114900498-114900854": [176, 200],
"chr5:138017044-138017774": [177, 200],
"chr5:138887064-138887932": [178, 200],
"chr5:139635703-139636371": [179, 200],
"chr6:22299145-22300111": [180, 200],
"chr6:41483560-41484175": [181, 200],
"chr6:50346312-50347226": [182, 200],
"chr6:82887059-82887868": [183, 200],
"chr6:87507541-87508280": [184, 200],
"chr6:98957869-98958615": [185, 200],
"chr6:124715721-124716488": [186, 200],
"chr6:140582661-140583333": [187, 200],
"chr6:143448247-143448538": [188, 200],
"chr6:144627485-144628192": [189, 200],
"chr7:15107437-15108187": [190, 200],
"chr7:27642021-27642590": [191, 200],
"chr7:28091616-28092165": [192, 200],
"chr7:28843157-28843775": [193, 200],
"chr7:45378170-45378868": [194, 200],
"chr7:45459955-45460620": [195, 200],
"chr7:89882241-89882812": [196, 200],
"chr7:110223126-110223883": [197, 200],
"chr7:114270709-114271789": [198, 200],
"chr7:125263193-125263754": [199, 200],
"chr8:18863700-18864409": [200, 200],
"chr8:27119284-27120036": [201, 200],
"chr8:37662390-37663098": [202, 200],
"chr8:73602383-73603191": [203, 200],
"chr8:108155588-108156379": [204, 200],
"chr8:114482228-114482870": [205, 200],
"chr8:118271658-118272375": [206, 200],
"chr8:125169965-125171088": [207, 200],
"chr8:127608056-127608718": [208, 200],
"chr8:130848661-130849522": [209, 200],
"chr9:21199954-21200829": [210, 200],
"chr9:24292320-24292667": [211, 200],
"chr9:32810190-32811196": [212, 200],
"chr9:44288655-44289439": [213, 200],
"chr9:57664560-57665271": [214, 200],
"chr9:60796844-60797427": [215, 200],
"chr9:63518829-63519421": [216, 200],
"chr9:63536164-63536742": [217, 200],
"chr9:66718328-66718862": [218, 200],
"chr9:68833530-68834353": [219, 200],
"chr9:72264394-72264682": [220, 200],
"chr9:75195785-75196662": [221, 200],
"chr9:85210246-85211249": [222, 200],
"chr9:100331404-100331968": [223, 200],
"chr9:107136568-107137167": [224, 200],
"chr9:107147611-107148252": [225, 200],
"chr9:110530301-110530814": [226, 200],
"chr9:119592533-119593099": [227, 200],
"chr9:119879098-119879479": [228, 200],
"chr9:119923130-119923715": [229, 200],
"chr9:119940332-119941120": [230, 200],
"chr9:120006807-120007177": [231, 200],
"chrX:38587943-38588780": [232, 200],
"chrX:73676122-73676707": [233, 200],
"chrX:98234436-98235044": [234, 200],
"chrX:138729250-138729574": [235, 200]
};
var allmodules={
1:{
	"chr1:20897671-20898254":{
},
	"chr1:24566603-24569405":{
},
	"chr1:40419842-40420980":{
},
	"chr1:51538255-51538850":{
},
	"chr1:80092639-80093456":{
},
	"chr1:81169061-81169940":{
},
	"chr1:90306610-90307201":{
},
	"chr1:120138586-120139086":{
},
	"chr1:132907236-132907871":{
},
	"chr1:133031701-133032548":{
},
	"chr1:138416585-138417422":{
},
	"chr1:145768540-145769187":{
},
	"chr1:163507438-163508304":{
},
	"chr1:175877427-175878443":{
},
	"chr10:26048076-26048757":{
},
	"chr10:80201629-80202126":{
},
	"chr10:80509162-80509451":{
},
	"chr10:80913080-80914050":{
},
	"chr10:92765660-92766028":{
},
	"chr10:95507165-95507559":{
},
	"chr11:22592459-22593403":{
},
	"chr11:33838628-33839502":{
},
	"chr11:34011946-34012343":{
},
	"chr11:52157518-52158138":{
},
	"chr11:54710065-54710643":{
},
	"chr11:65610863-65611587":{
},
	"chr11:69182625-69183167":{
},
	"chr11:78352158-78353054":{
},
	"chr11:87575311-87576385":{
},
	"chr11:94407912-94408440":{
},
	"chr12:3109876-3110267":{
},
	"chr12:21697626-21698281":{
},
	"chr12:85110891-85111217":{
},
	"chr12:87833977-87834760":{
},
	"chr12:116670716-116671691":{
},
	"chr13:6452426-6453172":{
},
	"chr13:34871906-34872409":{
},
	"chr13:36815339-36816442":{
},
	"chr13:42311565-42312103":{
},
	"chr13:63334054-63334722":{
},
	"chr13:85599706-85600597":{
},
	"chr13:98291101-98291428":{
},
	"chr13:114700773-114701501":{
},
	"chr14:53185159-53186012":{
},
	"chr14:64284388-64285040":{
},
	"chr15:9605852-9606768":{
},
	"chr15:66337449-66338120":{
},
	"chr15:74913207-74914442":{
},
	"chr16:4498946-4499528":{
},
	"chr16:44611240-44611788":{
},
	"chr16:76237355-76237591":{
},
	"chr16:76431954-76432667":{
},
	"chr16:89724342-89725127":{
},
	"chr17:24911700-24912500":{
},
	"chr17:28339999-28340883":{
},
	"chr17:28463477-28463989":{
},
	"chr17:35631650-35632237":{
},
	"chr17:35839180-35839776":{
},
	"chr17:39450927-39457022":{
},
	"chr17:50873139-50873988":{
},
	"chr17:84024265-84024986":{
},
	"chr18:3005202-3006082":{
},
	"chr18:40433910-40434388":{
},
	"chr18:82355522-82355995":{
},
	"chr18:89340229-89341162":{
},
	"chr19:4878447-4879352":{
},
	"chr19:33432275-33433175":{
},
	"chr2:30416593-30417348":{
},
	"chr2:37593767-37594274":{
},
	"chr2:38293709-38294207":{
},
	"chr2:65845877-65846273":{
},
	"chr2:80262489-80263065":{
},
	"chr2:117034052-117034623":{
},
	"chr2:118979737-118980443":{
},
	"chr2:157258762-157259369":{
},
	"chr2:158100548-158101312":{
},
	"chr2:167578972-167579448":{
},
	"chr2:181846625-181847434":{
},
	"chr3:96665260-96666201":{
},
	"chr3:109324309-109324904":{
},
	"chr3:127755015-127755843":{
},
	"chr3:136680046-136680862":{
},
	"chr4:16090973-16091493":{
},
	"chr4:69864482-69864755":{
},
	"chr4:102209371-102210241":{
},
	"chr4:135332186-135332481":{
},
	"chr5:20922938-20923479":{
},
	"chr5:65614599-65614890":{
},
	"chr5:99739819-99740642":{
},
	"chr5:107535406-107536158":{
},
	"chr5:111080072-111080554":{
},
	"chr6:22299145-22300111":{
},
	"chr6:50346312-50347226":{
},
	"chr6:82887059-82887868":{
},
	"chr6:98957869-98958615":{
},
	"chr6:124715721-124716488":{
},
	"chr6:140582661-140583333":{
},
	"chr6:143448247-143448538":{
},
	"chr7:89882241-89882812":{
},
	"chr7:110223126-110223883":{
},
	"chr7:114270709-114271789":{
},
	"chr8:27119284-27120036":{
},
	"chr8:108155588-108156379":{
},
	"chr8:125169965-125171088":{
},
	"chr8:130848661-130849522":{
},
	"chr9:21199954-21200829":{
},
	"chr9:24292320-24292667":{
},
	"chr9:44288655-44289439":{
},
	"chr9:60796844-60797427":{
},
	"chr9:63518829-63519421":{
},
	"chr9:63536164-63536742":{
},
	"chr9:66718328-66718862":{
},
	"chr9:85210246-85211249":{
},
	"chr9:107136568-107137167":{
},
	"chr9:107147611-107148252":{
},
	"chr9:119592533-119593099":{
},
	"chr9:119879098-119879479":{
},
	"chr9:119940332-119941120":{
},
	"chrX:73676122-73676707":{
},
	"chrX:138729250-138729574":{
}
	},
2:{
	"chr1:36864939-36865549":{
	1:{"pos":153,"dir":"R"}},
	"chr1:134692915-134693672":{
	1:{"pos":16,"dir":"L"}},
	"chr1:155141987-155142749":{
	1:{"pos":54,"dir":"L"}},
	"chr1:186554726-186555192":{
	1:{"pos":74,"dir":"R"}},
	"chr1:192894188-192894901":{
	1:{"pos":179,"dir":"L"}},
	"chr10:13688877-13689651":{
	1:{"pos":56,"dir":"L"}},
	"chr10:79836617-79837582":{
	1:{"pos":125,"dir":"L"}},
	"chr10:127907437-127908080":{
	1:{"pos":69,"dir":"L"}},
	"chr11:11463847-11464873":{
	1:{"pos":106,"dir":"R"}},
	"chr11:20148735-20149275":{
	1:{"pos":3,"dir":"L"}},
	"chr11:98303628-98304127":{
	1:{"pos":98,"dir":"L"}},
	"chr11:108726757-108727516":{
	1:{"pos":116,"dir":"R"}},
	"chr11:110214719-110215313":{
	1:{"pos":132,"dir":"R"}},
	"chr12:74516842-74517755":{
	1:{"pos":70,"dir":"R"}},
	"chr12:74611051-74611820":{
	1:{"pos":39,"dir":"L"}},
	"chr12:85662394-85663104":{
	1:{"pos":16,"dir":"L"}},
	"chr12:103732184-103733079":{
	1:{"pos":75,"dir":"R"}},
	"chr12:111185530-111186215":{
	1:{"pos":57,"dir":"L"}},
	"chr12:116696429-116697160":{
	1:{"pos":113,"dir":"L"}},
	"chr13:51982514-51983079":{
	1:{"pos":168,"dir":"R"}},
	"chr14:54557679-54558308":{
	1:{"pos":151,"dir":"L"}},
	"chr14:61072465-61073256":{
	1:{"pos":111,"dir":"R"}},
	"chr14:61881997-61882684":{
	1:{"pos":63,"dir":"L"}},
	"chr15:62592966-62593637":{
	1:{"pos":47,"dir":"R"}},
	"chr15:63993065-63993580":{
	1:{"pos":136,"dir":"R"}},
	"chr15:77798192-77798626":{
	1:{"pos":118,"dir":"R"}},
	"chr15:85217626-85218190":{
	1:{"pos":127,"dir":"L"}},
	"chr15:97200981-97201852":{
	1:{"pos":78,"dir":"R"}},
	"chr15:98820398-98820814":{
	1:{"pos":120,"dir":"L"}},
	"chr16:5308541-5309404":{
	1:{"pos":44,"dir":"R"}},
	"chr16:84595380-84596017":{
	1:{"pos":41,"dir":"R"}},
	"chr17:56745210-56746144":{
	1:{"pos":132,"dir":"L"}},
	"chr18:75447304-75448028":{
	1:{"pos":150,"dir":"R"}},
	"chr18:75502743-75503477":{
	1:{"pos":15,"dir":"L"}},
	"chr2:11534585-11535092":{
	1:{"pos":179,"dir":"R"}},
	"chr2:26575280-26576001":{
	1:{"pos":2,"dir":"L"}},
	"chr2:32516115-32516586":{
	1:{"pos":10,"dir":"R"}},
	"chr2:118942201-118942891":{
	1:{"pos":25,"dir":"R"}},
	"chr2:153217149-153217865":{
	1:{"pos":76,"dir":"L"}},
	"chr2:170194522-170195043":{
	1:{"pos":118,"dir":"R"}},
	"chr3:52966229-52966809":{
	1:{"pos":50,"dir":"R"}},
	"chr3:89958063-89958718":{
	1:{"pos":40,"dir":"L"}},
	"chr4:32616412-32617225":{
	1:{"pos":29,"dir":"L"}},
	"chr4:87505686-87506215":{
	1:{"pos":112,"dir":"R"}},
	"chr4:116975974-116976664":{
	1:{"pos":33,"dir":"L"}},
	"chr4:120483941-120484702":{
	1:{"pos":58,"dir":"R"}},
	"chr5:72451736-72452199":{
	1:{"pos":86,"dir":"R"}},
	"chr5:114900498-114900854":{
	1:{"pos":45,"dir":"L"}},
	"chr5:138017044-138017774":{
	1:{"pos":92,"dir":"L"}},
	"chr5:138887064-138887932":{
	1:{"pos":77,"dir":"R"}},
	"chr5:139635703-139636371":{
	1:{"pos":47,"dir":"L"}},
	"chr6:144627485-144628192":{
	1:{"pos":24,"dir":"R"}},
	"chr7:27642021-27642590":{
	1:{"pos":144,"dir":"L"}},
	"chr7:28091616-28092165":{
	1:{"pos":124,"dir":"R"}},
	"chr7:45378170-45378868":{
	1:{"pos":124,"dir":"R"}},
	"chr7:45459955-45460620":{
	1:{"pos":122,"dir":"R"}},
	"chr7:125263193-125263754":{
	1:{"pos":161,"dir":"L"}},
	"chr8:73602383-73603191":{
	1:{"pos":19,"dir":"R"}},
	"chr8:118271658-118272375":{
	1:{"pos":88,"dir":"L"}},
	"chr8:127608056-127608718":{
	1:{"pos":127,"dir":"L"}},
	"chr9:32810190-32811196":{
	1:{"pos":124,"dir":"R"}},
	"chr9:68833530-68834353":{
	1:{"pos":138,"dir":"R"}},
	"chr9:75195785-75196662":{
	1:{"pos":102,"dir":"L"}},
	"chr9:110530301-110530814":{
	1:{"pos":75,"dir":"R"}},
	"chr9:119923130-119923715":{
	1:{"pos":33,"dir":"R"}},
	"chr9:120006807-120007177":{
	1:{"pos":105,"dir":"R"}},
	"chrX:38587943-38588780":{
	1:{"pos":108,"dir":"R"}},
	"chrX:98234436-98235044":{
	1:{"pos":38,"dir":"R"}}
	},
3:{
	"chr1:63599505-63600306":{
	2:{"pos":153,"dir":"L"}},
	"chr1:167681556-167682229":{
	2:{"pos":33,"dir":"L"}},
	"chr10:19628484-19629258":{
	2:{"pos":113,"dir":"L"}},
	"chr10:39680230-39680917":{
	2:{"pos":97,"dir":"L"}},
	"chr10:117575269-117576136":{
	2:{"pos":108,"dir":"L"}},
	"chr11:21002515-21003402":{
	2:{"pos":27,"dir":"L"}},
	"chr11:31570379-31571478":{
	2:{"pos":72,"dir":"L"}},
	"chr11:46232528-46233371":{
	2:{"pos":181,"dir":"R"}},
	"chr11:82856905-82857744":{
	2:{"pos":179,"dir":"R"}},
	"chr11:87567616-87568360":{
	2:{"pos":57,"dir":"R"}},
	"chr11:98285951-98286753":{
	2:{"pos":20,"dir":"L"}},
	"chr11:99016186-99016820":{
	2:{"pos":45,"dir":"L"}},
	"chr12:101395027-101395767":{
	2:{"pos":68,"dir":"L"}},
	"chr13:51779697-51780541":{
	2:{"pos":159,"dir":"R"}},
	"chr14:85972789-85973327":{
	2:{"pos":186,"dir":"L"}},
	"chr15:5393222-5393977":{
	2:{"pos":24,"dir":"R"}},
	"chr15:78321935-78322773":{
	2:{"pos":83,"dir":"R"}},
	"chr16:22346867-22347825":{
	2:{"pos":56,"dir":"L"}},
	"chr16:36396194-36396562":{
	2:{"pos":175,"dir":"R"}},
	"chr16:48705868-48706443":{
	2:{"pos":72,"dir":"R"}},
	"chr16:52000683-52001866":{
	2:{"pos":178,"dir":"R"}},
	"chr16:89861897-89862591":{
	2:{"pos":46,"dir":"L"}},
	"chr17:7013440-7014049":{
	2:{"pos":101,"dir":"R"}},
	"chr17:8089621-8090408":{
	2:{"pos":107,"dir":"R"}},
	"chr17:51627199-51628395":{
	2:{"pos":1,"dir":"R"}},
	"chr17:70877881-70878757":{
	2:{"pos":174,"dir":"R"}},
	"chr17:83220692-83221326":{
	2:{"pos":156,"dir":"R"}},
	"chr19:4119455-4120306":{
	2:{"pos":109,"dir":"L"}},
	"chr19:59455157-59455890":{
	2:{"pos":145,"dir":"L"}},
	"chr2:32317221-32317640":{
	2:{"pos":40,"dir":"R"}},
	"chr2:35803851-35804358":{
	2:{"pos":90,"dir":"R"}},
	"chr2:70675780-70676704":{
	2:{"pos":27,"dir":"L"}},
	"chr2:84579863-84580784":{
	2:{"pos":91,"dir":"R"}},
	"chr2:104326422-104326932":{
	2:{"pos":125,"dir":"L"}},
	"chr3:107924572-107925196":{
	2:{"pos":31,"dir":"L"}},
	"chr3:126826614-126827447":{
	2:{"pos":59,"dir":"L"}},
	"chr4:125605762-125606487":{
	2:{"pos":136,"dir":"R"}},
	"chr5:105925213-105925733":{
	2:{"pos":25,"dir":"L"}},
	"chr6:41483560-41484175":{
	2:{"pos":170,"dir":"R"}},
	"chr6:87507541-87508280":{
	2:{"pos":107,"dir":"L"}},
	"chr7:15107437-15108187":{
	2:{"pos":184,"dir":"L"}},
	"chr7:28843157-28843775":{
	2:{"pos":170,"dir":"L"}},
	"chr8:18863700-18864409":{
	2:{"pos":47,"dir":"R"}},
	"chr8:37662390-37663098":{
	2:{"pos":130,"dir":"L"}},
	"chr8:114482228-114482870":{
	2:{"pos":80,"dir":"L"}},
	"chr9:57664560-57665271":{
	2:{"pos":75,"dir":"R"}},
	"chr9:72264394-72264682":{
	2:{"pos":94,"dir":"L"}},
	"chr9:100331404-100331968":{
	2:{"pos":24,"dir":"R"}}
	}
};

var moduleMotifPercent={
1:[ 0.0, 0.0],
2:[ 1.0, 0.0],
3:[ 0.0, 1.0]
};
