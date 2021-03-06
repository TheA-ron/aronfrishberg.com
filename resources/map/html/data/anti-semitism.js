var svgMapDataGPD = {
  data: {
    population: {
      name: 'Estimated # of Anti-Semites',
      format: '{0}',
      thousandSeparator: ',',
      thresholdMax: 1000000000,
      thresholdMin: 1000
    },
    gdpAdjusted: {
      name: 'Percent Anti-Semitic',
      format: '{0}%',
      thousandSeparator: ',',
      thresholdMax: 100,
      thresholdMin: 5
    },
  },
  applyData: 'gdpAdjusted',
  values: {
    US: {link: 'https://global100.adl.org/country/usa/2015', population: 24000000, gdpAdjusted: 10},
	CA: {link: 'https://global100.adl.org/country/canada/2019', population: 2318748, gdpAdjusted: 8},
	AR: {link: 'https://global100.adl.org/country/argentina/2019', population: 9123301, gdpAdjusted: 30},
	BO: {link: 'https://global100.adl.org/country/bolivia/2014', population: 1800000, gdpAdjusted: 30},
	BR: {link: 'https://global100.adl.org/country/brazil/2019', population: 37296700, gdpAdjusted: 25},
	CL: {link: 'https://global100.adl.org/country/chile/2014', population: 4600000, gdpAdjusted: 37},
	CO: {link: 'https://global100.adl.org/country/colombia/2014', population: 12000000, gdpAdjusted: 41},
	CR: {link: 'https://global100.adl.org/country/costa-rica/2014', population: 1000000, gdpAdjusted: 32},
	DO: {link: 'https://global100.adl.org/country/dominican-republic/2014', population: 2600000, gdpAdjusted: 41},
	GT: {link: 'https://global100.adl.org/country/guatemala/2014', population: 2700000, gdpAdjusted: 36},
	HT: {link: 'https://global100.adl.org/country/haiti/2014', population: 1500000, gdpAdjusted: 26},
	JM: {link: 'https://global100.adl.org/country/jamaica/2014', population: 320000, gdpAdjusted: 18},
	MX: {link: 'https://global100.adl.org/country/mexico/2014', population: 18000000, gdpAdjusted: 24},
	NI: {link: 'https://global100.adl.org/country/nicaragua/2014', population: 1200000, gdpAdjusted: 34},
	PA: {link: 'https://global100.adl.org/country/panama/2014', population: 1300000, gdpAdjusted: 52},
	PY: {link: 'https://global100.adl.org/country/paraguay/2014', population: 1400000, gdpAdjusted: 35},
	PE: {link: 'https://global100.adl.org/country/peru/2014', population: 7100000, gdpAdjusted: 38},
	TT: {link: 'https://global100.adl.org/country/trinidad-and-tobago/2014', population: 240000, gdpAdjusted: 24},
	UY: {link: 'https://global100.adl.org/country/uruguay/2014', population: 810000, gdpAdjusted: 33},
	VE: {link: 'https://global100.adl.org/country/venezuela/2014', population: 5700000, gdpAdjusted: 30},
	BY: {link: 'https://global100.adl.org/country/belarus/2014', population: 2900000, gdpAdjusted: 38},
	AR: {link: 'https://global100.adl.org/country/argentina/2019', population: 9123301, gdpAdjusted: 30},
	BR: {link: 'https://global100.adl.org/country/brazil/2019', population: 37296700, gdpAdjusted: 25},
	UA: {link: 'https://global100.adl.org/country/ukraine/2019', population: 16889741, gdpAdjusted: 46},
	RU: {link: 'https://global100.adl.org/country/russia/2019', population: 35962908, gdpAdjusted: 31},
	PL: {link: 'https://global100.adl.org/country/poland/2019', population: 15074696, gdpAdjusted: 48},
	HU: {link: 'https://global100.adl.org/country/hungary/2019', population: 3391561, gdpAdjusted: 42},
	ZA: {link: 'https://global100.adl.org/country/south-africa/2019', population: 16912758, gdpAdjusted: 0000000},
	AT: {link: 'https://global100.adl.org/country/austria/2019', population: 1437808, gdpAdjusted: 20},
	DK: {link: 'https://global100.adl.org/country/denmark/2019', population: 451914, gdpAdjusted: 10},
	GB: {link: 'https://global100.adl.org/country/united-kingdom/2019', population: 5684411, gdpAdjusted: 11},
	BE: {link: 'https://global100.adl.org/country/belgium/2019', population: 2159047, gdpAdjusted: 24},
	IT: {link: 'https://global100.adl.org/country/italy/2019', population: 8940675, gdpAdjusted: 18},
	FR: {link: 'https://global100.adl.org/country/france/2019', population: 8565729, gdpAdjusted: 17},
	SE: {link: 'https://global100.adl.org/country/sweden/2019', population: 311513, gdpAdjusted: 4},
	NL: {link: 'https://global100.adl.org/country/netherlands/2019', population: 1349829, gdpAdjusted: 10},
	DE: {link: 'https://global100.adl.org/country/germany/2019', population: 10287028, gdpAdjusted: 15},
	ES: {link: 'https://global100.adl.org/country/spain/2019', population: 10702151, gdpAdjusted: 28},
	LV: {link: 'https://global100.adl.org/country/latvia/2015', population: 480000, gdpAdjusted: 28},
	RO: {link: 'https://global100.adl.org/country/romania/2015', population: 8400000, gdpAdjusted: 47},
	TR: {link: 'https://global100.adl.org/country/turkey/2015', population: 35000000, gdpAdjusted: 71},
	GR: {link: 'https://global100.adl.org/country/greece/2015', population: 6100000, gdpAdjusted: 67},
	IR: {link: 'https://global100.adl.org/country/iran/2015', population: 32000000, gdpAdjusted: 60},
	MA: {link: 'https://global100.adl.org/country/morocco/2014', population: 17000000, gdpAdjusted: 80},
	BH: {link: 'https://global100.adl.org/country/bahrain/2014', population: 780000, gdpAdjusted: 81},
	EG: {link: 'https://global100.adl.org/country/egypt/2014', population: 37000000, gdpAdjusted: 75},
	IR: {link: 'https://global100.adl.org/country/iran/2014', population: 29000000, gdpAdjusted: 56},
	IQ: {link: 'https://global100.adl.org/country/iraq/2014', population: 15000000, gdpAdjusted: 92},
	JO: {link: 'https://global100.adl.org/country/jordan/2014', population: 3100000, gdpAdjusted: 81},
	KW: {link: 'https://global100.adl.org/country/kuwait/2014', population: 1700000, gdpAdjusted: 82},
	LB: {link: 'https://global100.adl.org/country/lebanon/2014', population: 2400000, gdpAdjusted: 78},
	LY: {link: 'https://global100.adl.org/country/libya/2014', population: 3400000, gdpAdjusted: 87},
	MA: {link: 'https://global100.adl.org/country/morocco/2014', population: 17000000, gdpAdjusted: 80},
	OM: {link: 'https://global100.adl.org/country/oman/2014', population: 1400000, gdpAdjusted: 76},
	QA: {link: 'https://global100.adl.org/country/qatar/2014', population: 1200000, gdpAdjusted: 80},
	SA: {link: 'https://global100.adl.org/country/saudi-arabia/2014', population: 13000000, gdpAdjusted: 74},
	TN: {link: 'https://global100.adl.org/country/tunisia/2014', population: 6500000, gdpAdjusted: 86},
	TR: {link: 'https://global100.adl.org/country/turkey/2015', population: 35000000, gdpAdjusted: 71},
	SA: {link: 'https://global100.adl.org/country/united-arab-emirates/2014', population: 5500000, gdpAdjusted: 80},
	PS: {link: 'https://global100.adl.org/country/west-bank-and-gaza/2014', population: 1900000, gdpAdjusted: 93},
	YE: {link: 'https://global100.adl.org/country/yemen/2014', population: 10000000, gdpAdjusted: 88},
	CN: {link: 'https://global100.adl.org/country/china/2014', population: 210000000, gdpAdjusted: 20},
	KZ: {link: 'https://global100.adl.org/country/kazakhstan/2014', population: 3600000, gdpAdjusted: 32},
	IN: {link: 'https://global100.adl.org/country/india/2014', population: 150000000, gdpAdjusted: 20},
	AM: {link: 'https://global100.adl.org/country/armenia/2014', population: 1300000, gdpAdjusted: 58},
	BD: {link: 'https://global100.adl.org/country/bangladesh/2014', population: 30000000, gdpAdjusted: 32},
	LA: {link: 'https://global100.adl.org/country/laos/2014', population: 7100, gdpAdjusted: .2},
	TH: {link: 'https://global100.adl.org/country/thailand/2014', population: 6600000, gdpAdjusted: 13},
	VN: {link: 'https://global100.adl.org/country/vietnam/2014', population: 3800000, gdpAdjusted: 6},
	MY: {link: 'https://global100.adl.org/country/malaysia/2014', population: 11000000, gdpAdjusted: 61},
	SG: {link: 'https://global100.adl.org/country/singapore/2014', population: 640000, gdpAdjusted: 16},
	ID: {link: 'https://global100.adl.org/country/indonesia/2014', population: 75000000, gdpAdjusted: 48},
	PH: {link: 'https://global100.adl.org/country/philippines/2014', population: 1600000, gdpAdjusted: 3},
	KR: {link: 'https://global100.adl.org/country/south-korea/2014', population: 20000000, gdpAdjusted: 53},
	JP: {link: 'https://global100.adl.org/country/japan/2014', population: 25000000, gdpAdjusted: 23},
	GE: {link: 'https://global100.adl.org/country/georgia/2014', population: 1100000, gdpAdjusted: 32},
	AZ: {link: 'https://global100.adl.org/country/azerbaijan/2014', population: 2400000, gdpAdjusted: 37},
	MN: {link: 'https://global100.adl.org/country/mongolia/2014', population: 470000, gdpAdjusted: 26},
	AU: {link: 'https://global100.adl.org/country/australia/2014', population: 2400000, gdpAdjusted: 14},
	NZ: {link: 'https://global100.adl.org/country/new-zealand/2014', population: 460000, gdpAdjusted: 14},
	BW: {link: 'https://global100.adl.org/country/botswana/2014', population: 380000, gdpAdjusted: 33},
	CM: {link: 'https://global100.adl.org/country/cameroon/2014', population: 3600000, gdpAdjusted: 35},
	CI: {link: 'https://global100.adl.org/country/cote-d-ivoire/2014', population: 2200000, gdpAdjusted: 22},
	GH: {link: 'https://global100.adl.org/country/ghana/2014', population: 2000000, gdpAdjusted: 15},
	KE: {link: 'https://global100.adl.org/country/kenya/2014', population: 7300000, gdpAdjusted: 35},
	MU: {link: 'https://global100.adl.org/country/mauritius/2014', population: 400000, gdpAdjusted: 44},
	NG: {link: 'https://global100.adl.org/country/nigeria/2014', population: 13000000, gdpAdjusted: 16},
	SN: {link: 'https://global100.adl.org/country/senegal/2014', population: 3400000, gdpAdjusted: 53},
	TZ: {link: 'https://global100.adl.org/country/tanzania/2014', population: 2600000, gdpAdjusted: 12},
	UG: {link: 'https://global100.adl.org/country/uganda/2014', population: 2400000, gdpAdjusted: 16},
	xx: {link: '00000000000', population: 00000000, gdpAdjusted: 0000000},
	xx: {link: '00000000000', population: 00000000, gdpAdjusted: 0000000},
	xx: {link: '00000000000', population: 00000000, gdpAdjusted: 0000000},
	xx: {link: '00000000000', population: 00000000, gdpAdjusted: 0000000},
	xx: {link: '00000000000', population: 00000000, gdpAdjusted: 0000000},
  }
}
