var imageDatabasePath = "gallery-big/"

var banners = {
	path: "pics/",
	images: [
		{
			fileName: "homebanner01.jpg"
		},{
			fileName: "homebanner02.jpg"
		},{
			fileName: "homebanner03.jpg"
		},{
			fileName: "homebanner04.jpg"
		},{
			fileName: "homebanner05.jpg"
		},{
			fileName: "homebanner06.jpg"
		},{
			fileName: "homebanner07.jpg"
		}
	]
}

var galleries = [
	{
		galleryName: "Digital Illustrations",
		galleryPath: "",
		galleryDatabase: [
			{
				fileName: "a-moment-in-nature.jpg",
				title: "A Moment in Nature",
				thumbLeft: 580,
				thumbTop: 200
			},
			{
				fileName: "fallen.jpg",
				title: "Fallen",
				thumbLeft: 400,
				thumbTop: 780
			},
			{
				fileName: "hmm-strawberries.jpg",
				title: "Hmm... Strawberries",
				thumbLeft: 240,
				thumbTop: 900
			},
			{
				fileName: "ive-got-you.jpg",
				title: "I've got you",
				thumbLeft: 370,
				thumbTop: 850
			},
			{
				fileName: "linger.jpg",
				title: "Ling Er",
				thumbLeft: 462,
				thumbTop: 285
			},
			{
				fileName: "suyu-final.jpg",
				title: "Suyu",
				thumbLeft: 1180,
				thumbTop: 880
			},
			{
				fileName: "milky.jpg",
				title: "Milky",
				thumbLeft: 1100,
				thumbTop: 200
			},{
				fileName: "red-koi.jpg",
				title: "Red Koi",
				thumbLeft: 265,
				thumbTop: 665
			},{
				fileName: "simple-peonies.jpg",
				title: "Simple Peonies",
				thumbLeft: 260,
				thumbTop: 350
			},{
				fileName: "insomnia-kester1.jpg",
				title: "Kester (Insomnia)",
				thumbLeft: 475,
				thumbTop: 175
			},{
				fileName: "insomnia-walk.jpg",
				title: "Walk (Insomnia)",
				thumbLeft: 325,
				thumbTop: 205
			},{
				fileName: "insomnia-pancake.jpg",
				title: "Pancake (Insomnia)",
				thumbLeft: 250,
				thumbTop: 115
			},{
				fileName: "insomnia-ragazzo.jpg",
				title: "Ragazzo (Insomnia)",
				thumbLeft: 435,
				thumbTop: 475
			}
		]
	},{
		galleryName: "Oil Paintings",
		galleryPath: "",
		galleryDatabase: [
			{
				fileName: "harvest.jpg",
				title: "Harvest",
				thumbLeft: 470,
				thumbTop: 790
			},{
				fileName: "dai-home.jpg",
				title: "Dai Home",
				thumbLeft: 700,
				thumbTop: 750
			},{
				fileName: "sakura.jpg",
				title: "Sakura",
				thumbLeft: 920,
				thumbTop: 730
			},{
				fileName: "autum-swamp.jpg",
				title: "Autum Swamp",
				thumbLeft: 800,
				thumbTop: 1020
			},{
				fileName: "twisted-flowers.jpg",
				title: "Twisted Flowers",
				thumbLeft: 250,
				thumbTop: 120
			}
		]
	},{
		galleryName: "Pencils / Charcoal / Crayons / etc.",
		galleryPath: "",
		galleryDatabase: [
			{
				fileName: "flowers.jpg",
				title: "Flowers",
				thumbLeft: 140,
				thumbTop: 400
			},{
				fileName: "skeleton-anatomy.jpg",
				title: "Skeleton Anatomy",
				thumbLeft: 460,
				thumbTop: 210
			}
		]
	},{
		galleryName: "Chinese Watercolour",
		galleryPath: "",
		galleryDatabase: [
			{
				fileName: "cotton-rose.jpg",
				title: "Cotton Rose",
				thumbLeft: 670,
				thumbTop: 640
			},{
				fileName: "haitang.jpg",
				title: "Begoniaceae",
				thumbLeft: 260,
				thumbTop: 100
			},{
				fileName: "family.jpg",
				title: "Family",
				thumbLeft: 600,
				thumbTop: 950
			},{
				fileName: "red-silk-balls.jpg",
				title: "Red Silk Balls",
				thumbLeft: 315,
				thumbTop: 560
			},{
				fileName: "resting.jpg",
				title: "Resting",
				thumbLeft: 355,
				thumbTop: 335
			},{
				fileName: "danya.jpg",
				title: "Rhododendron",
				thumbLeft: 360,
				thumbTop: 565
			},{
				fileName: "tianxiang.jpg",
				title: "Peony",
				thumbLeft: 1035,
				thumbTop: 365
			},{
				fileName: "blue-goldfish.jpg",
				title: "Blue Goldfish",
				thumbLeft: 845,
				thumbTop: 510
			},{
				fileName: "bird-play.jpg",
				title: "Bird Play",
				thumbLeft: 265,
				thumbTop: 650
			},{
				fileName: "spring.jpg",
				title: "Bird Play",
				thumbLeft: 590,
				thumbTop: 370
			},{
				fileName: "in-the-rain.jpg",
				title: "In the Rain",
				thumbLeft: 525,
				thumbTop: 608
			},{
				fileName: "setting-sun.jpg",
				title: "Setting Sun",
				thumbLeft: 443,
				thumbTop: 188
			},{
				fileName: "vines.jpg",
				title: "Vines",
				thumbLeft: 618,
				thumbTop: 245
			},{
				fileName: "under-the-wisteria-shades.jpg",
				title: "Under the Wisteria Shades",
				thumbLeft: 220,
				thumbTop: 1162
			}
		]
	},{
		galleryName: "DotA 2 Cosmetics Concept / Designs",
		galleryPath: "",
		galleryDatabase: [
			{
				fileName: "asashin-hime.jpg",
				title: "Asashin Hime (PA)",
				thumbLeft: 215,
				thumbTop: 170
			},{
				fileName: "sacred-avialae.jpg",
				title: "Sacred Avialae (PA)",
				thumbLeft: 255,
				thumbTop: 360
			}
		]
	},{
		galleryName: "Random Scraps",
		galleryPath: "",
		galleryDatabase: [
			{
				fileName: "me.jpg",
				title: "Me",
				thumbLeft: 400,
				thumbTop: 1075
			},{
				fileName: "elemental-goddess-wood.jpg",
				title: "Elemental Goddess - Wood",
				thumbLeft: 345,
				thumbTop: 235
			},{
				fileName: "elemental-goddess-water.jpg",
				title: "Elemental Goddess - Water",
				thumbLeft: 395,
				thumbTop: 340
			},{
				fileName: "elemental-goddess-metal.jpg",
				title: "Elemental Goddess - Metal",
				thumbLeft: 430,
				thumbTop: 210
			},{
				fileName: "elemental-goddess-earth.jpg",
				title: "Elemental Goddess - Earth",
				thumbLeft: 220,
				thumbTop: 265
			},{
				fileName: "elemental-goddess-fire.jpg",
				title: "Elemental Goddess - Fire",
				thumbLeft: 380,
				thumbTop: 290
			},{
				fileName: "the-pet.jpg",
				title: "The Pet",
				thumbLeft: 710,
				thumbTop: 395
			},{
				fileName: "portrait-practice.jpg",
				title: "Portrait (practice)",
				thumbLeft: 265,
				thumbTop: 465
			},{
				fileName: "mia.jpg",
				title: "Mia",
				thumbLeft: 410,
				thumbTop: 240
			},{
				fileName: "masquerade.jpg",
				title: "Masquerade",
				thumbLeft: 1120,
				thumbTop: 335
			},{
				fileName: "lee-jung-hyun.jpg",
				title: "Lee Jung-hyun",
				thumbLeft: 290,
				thumbTop: 505
			},{
				fileName: "kalashnikova.jpg",
				title: "Kalashnikova",
				thumbLeft: 605,
				thumbTop: 310
			},{
				fileName: "commission-mitzu.jpg",
				title: "Mitzu (commission)",
				thumbLeft: 670,
				thumbTop: 520
			},{
				fileName: "bird-divinity.jpg",
				title: "Bird Divinity",
				thumbLeft: 185,
				thumbTop: 120
			},{
				fileName: "xiaoman.jpg",
				title: "Xiao Man",
				thumbLeft: 570,
				thumbTop: 125
			},{
				fileName: "zhiyin.jpg",
				title: "Zhi Yin",
				thumbLeft: 295,
				thumbTop: 420
			},{
				fileName: "turkey-wannabe.jpg",
				title: "Turkey Wannabe",
				thumbLeft: 385,
				thumbTop: 675
			},{
				fileName: "yulia.jpg",
				title: "Yulia",
				thumbLeft: 445,
				thumbTop: 725
			}
		]
	}
];
