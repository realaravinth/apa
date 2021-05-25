var respecConfig = {
	// embed RDFa data in the output
	trace:  true,
	useExperimentalStyles: true,
	doRDFa: '1.1',
	includePermalinks: true,
	permalinkEdge:     true,
	permalinkHide:     false,
	tocIntroductory: true,
	// specification status (e.g., WD, LC, NOTE, etc.). If in doubt use ED.
	// subtitle: "Alternatives to Visual Turing Tests on the Web",
	specStatus:           "WG-NOTE",
	//crEnd:                "",
	//perEnd:               "",
	diffTool:             "http://www.aptest.com/standards/htmldiff/htmldiff.pl",
	
	// the specifications short name, as in https://www.w3.org/TR/short-name/
	shortName:            "raur",
	
	
	// if you wish the publication date to be other than today, set this
	//publishDate:  "2014-12-11",
	copyrightStart:  "2020",
	license: "w3c-software-doc",
	
	// if there is a previously published draft, uncomment this and set its YYYY-MM-DD date
	// and its maturity status
	previousPublishDate:  "2020-12-07",
	previousMaturity:  "WD",
	// prevRecURI: "",
	//previousDiffURI: "",
	
	// if there a publicly available Editors Draft, this is the link
	edDraftURI: "https://w3c.github.io/apa/raur/",
	
	// if this is a LCWD, uncomment and set the end of its review period
	// lcEnd: "2012-02-21",
	
	// editors, add as many as you like
	// only "name" is required
	editors: [
		{
			name: "Joshue O'Connor",
			//mailto: "joconnor@w3.org",
			url: 'https://www.w3.org/People#joconnor',
			company: "W3C",
			companyURI: "https://www.w3.org/",
			w3cid: 41218
		},
		{
			name: "Janina Sajka",
			url: "https://rednote.net/",
			//mailto: "janina@rednote.net",
			w3cid: 33688
		},
	{
			name: "Jason White",
			//url: "http://www.ets.org/",
			company: "Educational Testing Service",
			mailto: "jjwhite@ets.org",
			companyURI: "http://www.ets.org/",
			w3cid: 74028
		},
		{
			name: "Michael Cooper",
			url: 'https://www.w3.org/People/cooper/',
			//mailto: "cooper@w3.org",
			company: "W3C",
			companyURI: "https://www.w3.org/",
			w3cid: 34017
		}
	],
	
	// authors, add as many as you like.
	// This is optional, uncomment if you have authors as well as editors.
	// only "name" is required. Same format as editors.
	
	//authors:  [
	//    { name: "Your Name", url: "http://example.org/",
	//      company: "Your Company", companyURI: "http://example.com/" },
	//],
	
	/*
	alternateFormats: [
		{ uri: 'wcag21-diff.html', label: "Diff from Previous Recommendation" } ,
		{ uri: 'wcag21.ps', label: "PostScript version" },
		{ uri: 'wcag21.pdf', label: "PDF version" }
	],
	*/
	
	// errata: 'https://www.w3.org/2010/02/rdfa/errata.html',
	
	//Github details

	github: "w3c/apa",

	// name of the WG
	group:           "apa",
	
	
	// URI of the public WG page
	groupURI:        "https://www.w3.org/WAI/APA/",
	
	// name (with the @w3c.org) of the public mailing to which comments are due
	groupPublicList: "public-apa",
	
	// URI of the patent status for this WG, for Rec-track documents
	// !!!! IMPORTANT !!!!
	// This is important for Rec-track documents, do not copy a patent URI from a random
	// document unless you know what you're doing. If in doubt ask your friendly neighbourhood
	// Team Contact.
	// groupPatentURI:  "https://www.w3.org/2004/01/pp-impl/83907/status",
	maxTocLevel: 4,
	
};


