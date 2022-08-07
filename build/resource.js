"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resp = exports.baseURL = void 0;
const resp = {
    geocoded_waypoints: [
        {
            geocoder_status: "OK",
            place_id: "ChIJWSZtSqXd3IARy-E6oTXnKtg",
            types: ["premise"],
        },
        {
            geocoder_status: "OK",
            place_id: "ChIJNzFd8A_e3IARg0wTXiKOGKw",
            types: ["establishment", "point_of_interest"],
        },
    ],
    routes: [
        {
            bounds: {
                northeast: {
                    lat: 33.6808567,
                    lng: -117.7950994,
                },
                southwest: {
                    lat: 33.6433197,
                    lng: -117.8418821,
                },
            },
            copyrights: "Map data ©2022 Google",
            fare: {
                currency: "USD",
                text: "$2.00",
                value: 2,
            },
            legs: [
                {
                    arrival_time: {
                        text: "3:02pm",
                        time_zone: "America/Los_Angeles",
                        value: 1659823352,
                    },
                    departure_time: {
                        text: "2:09pm",
                        time_zone: "America/Los_Angeles",
                        value: 1659820151,
                    },
                    distance: {
                        text: "5.2 mi",
                        value: 8429,
                    },
                    duration: {
                        text: "53 mins",
                        value: 3201,
                    },
                    end_address: "6210, Donald Bren Hall, Irvine, CA 92697, USA",
                    end_location: {
                        lat: 33.6433197,
                        lng: -117.8418821,
                    },
                    start_address: "5051 Alton Pkwy, Irvine, CA 92604, USA",
                    start_location: {
                        lat: 33.6737715,
                        lng: -117.7955883,
                    },
                    steps: [
                        {
                            distance: {
                                text: "1.3 mi",
                                value: 2080,
                            },
                            duration: {
                                text: "26 mins",
                                value: 1548,
                            },
                            end_location: {
                                lat: 33.6804434,
                                lng: -117.8120789,
                            },
                            html_instructions: "Walk to Culver-Alton",
                            polyline: {
                                points: "a|olEl}}mUv@wAVIh@LBBX^FFT`A?T?FL@fADCrAGhBG`AANGz@Iz@OrAOlACPALKf@SfAOv@EN]rAJHFDJHENM^a@rAc@lAw@fBKXk@jA_@r@c@t@W`@IL[d@g@r@{@fAKLsBfCIJi@p@o@`AOVQZS`@]x@o@vA{BfF}@dBk@`Au@dACBMP]`@EHc@h@KJEDIJoBjB]\\m@t@_@`@W\\_@f@Yd@]h@ILIPILrApA",
                            },
                            start_location: {
                                lat: 33.6737715,
                                lng: -117.7955883,
                            },
                            steps: [
                                {
                                    distance: {
                                        text: "0.1 mi",
                                        value: 176,
                                    },
                                    duration: {
                                        text: "2 mins",
                                        value: 127,
                                    },
                                    end_location: {
                                        lat: 33.6727916,
                                        lng: -117.7958797,
                                    },
                                    html_instructions: "Head \u003cb\u003esoutheast\u003c/b\u003e",
                                    polyline: {
                                        points: "a|olEl}}mUv@wAVIh@LBBX^FFT`A?T?FL@",
                                    },
                                    start_location: {
                                        lat: 33.6737715,
                                        lng: -117.7955883,
                                    },
                                    travel_mode: "WALKING",
                                },
                                {
                                    distance: {
                                        text: "161 ft",
                                        value: 49,
                                    },
                                    duration: {
                                        text: "1 min",
                                        value: 36,
                                    },
                                    end_location: {
                                        lat: 33.6724256,
                                        lng: -117.7959147,
                                    },
                                    html_instructions: "Turn \u003cb\u003eleft\u003c/b\u003e toward \u003cb\u003eAlton Pkwy\u003c/b\u003e",
                                    maneuver: "turn-left",
                                    polyline: {
                                        points: "}uolEf_~mUfAD",
                                    },
                                    start_location: {
                                        lat: 33.6727916,
                                        lng: -117.7958797,
                                    },
                                    travel_mode: "WALKING",
                                },
                                {
                                    distance: {
                                        text: "0.3 mi",
                                        value: 417,
                                    },
                                    duration: {
                                        text: "5 mins",
                                        value: 297,
                                    },
                                    end_location: {
                                        lat: 33.67318,
                                        lng: -117.8002295,
                                    },
                                    html_instructions: "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eAlton Pkwy\u003c/b\u003e",
                                    maneuver: "turn-right",
                                    polyline: {
                                        points: "usolEl_~mUCrAGhBG`AANGz@Iz@OrAOlACPALKf@SfAOv@EN]rAJH",
                                    },
                                    start_location: {
                                        lat: 33.6724256,
                                        lng: -117.7959147,
                                    },
                                    travel_mode: "WALKING",
                                },
                                {
                                    distance: {
                                        text: "43 ft",
                                        value: 13,
                                    },
                                    duration: {
                                        text: "1 min",
                                        value: 20,
                                    },
                                    end_location: {
                                        lat: 33.6731102,
                                        lng: -117.8003862,
                                    },
                                    html_instructions: "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eCreek Rd\u003c/b\u003e",
                                    maneuver: "turn-left",
                                    polyline: {
                                        points: "kxolElz~mUFDJHEN",
                                    },
                                    start_location: {
                                        lat: 33.67318,
                                        lng: -117.8002295,
                                    },
                                    travel_mode: "WALKING",
                                },
                                {
                                    distance: {
                                        text: "0.8 mi",
                                        value: 1362,
                                    },
                                    duration: {
                                        text: "17 mins",
                                        value: 1012,
                                    },
                                    end_location: {
                                        lat: 33.6808567,
                                        lng: -117.8116722,
                                    },
                                    html_instructions: "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eAlton Pkwy\u003c/b\u003e",
                                    maneuver: "turn-right",
                                    polyline: {
                                        points: "}wolEl{~mUM^a@rAc@lAw@fBKXk@jA_@r@c@t@W`@IL[d@g@r@{@fAKLsBfCIJi@p@o@`AOVQZS`@]x@o@vA{BfF}@dBk@`Au@dACBMP]`@EHc@h@KJEDIJoBjB]\\m@t@_@`@W\\_@f@Yd@]h@ILIPIL",
                                    },
                                    start_location: {
                                        lat: 33.6731102,
                                        lng: -117.8003862,
                                    },
                                    travel_mode: "WALKING",
                                },
                                {
                                    distance: {
                                        text: "207 ft",
                                        value: 63,
                                    },
                                    duration: {
                                        text: "1 min",
                                        value: 56,
                                    },
                                    end_location: {
                                        lat: 33.6804434,
                                        lng: -117.8120789,
                                    },
                                    html_instructions: 'Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eCulver Dr\u003c/b\u003e\u003cdiv style="font-size:0.9em"\u003eDestination will be on the right\u003c/div\u003e',
                                    maneuver: "turn-left",
                                    polyline: {
                                        points: "khqlE|aanUrApA",
                                    },
                                    start_location: {
                                        lat: 33.6808567,
                                        lng: -117.8116722,
                                    },
                                    travel_mode: "WALKING",
                                },
                            ],
                            travel_mode: "WALKING",
                        },
                        {
                            distance: {
                                text: "3.4 mi",
                                value: 5435,
                            },
                            duration: {
                                text: "14 mins",
                                value: 840,
                            },
                            end_location: {
                                lat: 33.64936,
                                lng: -117.839827,
                            },
                            html_instructions: "Bus towards Newport Transp Center",
                            polyline: {
                                points: "_fqlExdanUJOHHv@t@b@b@ZXjBfBj@h@`BbBn@n@`A~@d@f@zBzBzA~A^`@VRt@t@VRdAlAdAdA@?hAfAv@v@ZXnAlAJJLNt@r@dAbApAnAPPpFpF`A|@r@n@z@x@RRbC|Br@p@XXRTTRf@f@x@z@NN~A`Bz@`Az@|@dAfAl@n@JJ~@hAz@v@v@t@`@^h@b@j@\\DBTN^T@?h@ZLFf@RTFr@TPFH@XH\\H\\H|@J~@HpADT@nA@N?R@P?b@?P@dA@nCBrDDb@@fA@b@@p@@`@@`@@\\@J?JCjBBv@@\\BT?z@BR@L@L@^An@El@GTE^G\\Il@OPEFCp@Q^M`@ORK^OzBiANIjAm@t@_@tAs@tBgAjAm@hB}@LIXOf@WZOvAs@Fd@Fh@Hl@Fd@NbA@NLx@BPZdCF`@d@rDBNb@dD@FJ~@BL@H\\fCBRBHNjAXvBFh@Ff@BRBLDf@Jz@Jx@@BFb@RzAb@|C@NJl@Fh@@H@B@JB^@PBRDj@AX?f@?h@?b@Af@An@C^E^Ix@EZADAJEPGZAFWfAMd@K\\GRKVKVS`@MVEJ_@n@]n@IPKNABKPEJKPCDCC",
                            },
                            start_location: {
                                lat: 33.68048100000001,
                                lng: -117.812134,
                            },
                            transit_details: {
                                arrival_stop: {
                                    location: {
                                        lat: 33.64936,
                                        lng: -117.839827,
                                    },
                                    name: "Campus-University Center",
                                },
                                arrival_time: {
                                    text: "2:49pm",
                                    time_zone: "America/Los_Angeles",
                                    value: 1659822540,
                                },
                                departure_stop: {
                                    location: {
                                        lat: 33.68048100000001,
                                        lng: -117.812134,
                                    },
                                    name: "Culver-Alton",
                                },
                                departure_time: {
                                    text: "2:35pm",
                                    time_zone: "America/Los_Angeles",
                                    value: 1659821700,
                                },
                                headsign: "Newport Transp Center",
                                line: {
                                    agencies: [
                                        {
                                            name: "Orange County Transportation Authority",
                                            phone: "1 (714) 636-7433",
                                            url: "http://www.octa.net/Bus-Transit/Overview",
                                        },
                                    ],
                                    color: "#00aff2",
                                    name: "Tustin - Newport Beach",
                                    short_name: "79",
                                    text_color: "#000000",
                                    url: "http://www.octa.net/eBusBook/RoutePDF/route079.pdf",
                                    vehicle: {
                                        icon: "//maps.gstatic.com/mapfiles/transit/iw2/6/bus2.png",
                                        name: "Bus",
                                        type: "BUS",
                                    },
                                },
                                num_stops: 11,
                            },
                            travel_mode: "TRANSIT",
                        },
                        {
                            distance: {
                                text: "0.6 mi",
                                value: 914,
                            },
                            duration: {
                                text: "14 mins",
                                value: 811,
                            },
                            end_location: {
                                lat: 33.6433197,
                                lng: -117.8418821,
                            },
                            html_instructions: "Walk to 6210, Donald Bren Hall, Irvine, CA 92697, USA",
                            polyline: {
                                points: "qcklEzqfnUBEJQDIECGCGAGC@LJ@NNHFHFJJDD\\VZXd@Qf@d@JHDKR]PNHHR]\\u@DK@A@?@?B@HDNJZXJBFGFKLNBDDHLKf@]NK`@QTMPE`@Kj@A`@?H?|@Lh@LVJFJHDVNHDJHZVNV`@d@Z\\RVLHJPRf@@H?FBJFNHLJBFHb@pAB?FBF?FAFAFETV",
                            },
                            start_location: {
                                lat: 33.6493654,
                                lng: -117.8398221,
                            },
                            steps: [
                                {
                                    distance: {
                                        text: "66 ft",
                                        value: 20,
                                    },
                                    duration: {
                                        text: "1 min",
                                        value: 16,
                                    },
                                    end_location: {
                                        lat: 33.6492577,
                                        lng: -117.8396504,
                                    },
                                    html_instructions: "Head \u003cb\u003esoutheast\u003c/b\u003e on \u003cb\u003eCampus Dr\u003c/b\u003e",
                                    polyline: {
                                        points: "qcklEzqfnUBEJQDI",
                                    },
                                    start_location: {
                                        lat: 33.6493654,
                                        lng: -117.8398221,
                                    },
                                    travel_mode: "WALKING",
                                },
                                {
                                    distance: {
                                        text: "75 ft",
                                        value: 23,
                                    },
                                    duration: {
                                        text: "1 min",
                                        value: 29,
                                    },
                                    end_location: {
                                        lat: 33.649412,
                                        lng: -117.8395818,
                                    },
                                    html_instructions: 'Turn \u003cb\u003eleft\u003c/b\u003e toward \u003cb\u003ePereira Dr\u003c/b\u003e\u003cdiv style="font-size:0.9em"\u003eTake the stairs\u003c/div\u003e',
                                    maneuver: "turn-left",
                                    polyline: {
                                        points: "{bklExpfnUECGCGAGC",
                                    },
                                    start_location: {
                                        lat: 33.6492577,
                                        lng: -117.8396504,
                                    },
                                    travel_mode: "WALKING",
                                },
                                {
                                    distance: {
                                        text: "299 ft",
                                        value: 91,
                                    },
                                    duration: {
                                        text: "2 mins",
                                        value: 122,
                                    },
                                    end_location: {
                                        lat: 33.6487775,
                                        lng: -117.8401577,
                                    },
                                    html_instructions: "Sharp \u003cb\u003eleft\u003c/b\u003e toward \u003cb\u003ePereira Dr\u003c/b\u003e",
                                    maneuver: "turn-sharp-left",
                                    polyline: {
                                        points: "ycklEjpfnU@LJ@NNHFHFJJDD\\VZX",
                                    },
                                    start_location: {
                                        lat: 33.649412,
                                        lng: -117.8395818,
                                    },
                                    travel_mode: "WALKING",
                                },
                                {
                                    distance: {
                                        text: "72 ft",
                                        value: 22,
                                    },
                                    duration: {
                                        text: "1 min",
                                        value: 24,
                                    },
                                    end_location: {
                                        lat: 33.6485885,
                                        lng: -117.8400735,
                                    },
                                    html_instructions: "Turn \u003cb\u003eleft\u003c/b\u003e toward \u003cb\u003ePereira Dr\u003c/b\u003e",
                                    maneuver: "turn-left",
                                    polyline: {
                                        points: "{_klE~sfnUd@Q",
                                    },
                                    start_location: {
                                        lat: 33.6487775,
                                        lng: -117.8401577,
                                    },
                                    travel_mode: "WALKING",
                                },
                                {
                                    distance: {
                                        text: "105 ft",
                                        value: 32,
                                    },
                                    duration: {
                                        text: "1 min",
                                        value: 19,
                                    },
                                    end_location: {
                                        lat: 33.6483282,
                                        lng: -117.8403061,
                                    },
                                    html_instructions: "Turn \u003cb\u003eright\u003c/b\u003e toward \u003cb\u003ePereira Dr\u003c/b\u003e",
                                    maneuver: "turn-right",
                                    polyline: {
                                        points: "u~jlElsfnUf@d@JH",
                                    },
                                    start_location: {
                                        lat: 33.6485885,
                                        lng: -117.8400735,
                                    },
                                    travel_mode: "WALKING",
                                },
                                {
                                    distance: {
                                        text: "79 ft",
                                        value: 24,
                                    },
                                    duration: {
                                        text: "1 min",
                                        value: 21,
                                    },
                                    end_location: {
                                        lat: 33.6481987,
                                        lng: -117.8401031,
                                    },
                                    html_instructions: "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003ePereira Dr\u003c/b\u003e",
                                    maneuver: "turn-left",
                                    polyline: {
                                        points: "a}jlE|tfnUDKR]",
                                    },
                                    start_location: {
                                        lat: 33.6483282,
                                        lng: -117.8403061,
                                    },
                                    travel_mode: "WALKING",
                                },
                                {
                                    distance: {
                                        text: "75 ft",
                                        value: 23,
                                    },
                                    duration: {
                                        text: "1 min",
                                        value: 18,
                                    },
                                    end_location: {
                                        lat: 33.64806,
                                        lng: -117.8402267,
                                    },
                                    html_instructions: "Turn \u003cb\u003eright\u003c/b\u003e toward \u003cb\u003eRing Rd\u003c/b\u003e",
                                    maneuver: "turn-right",
                                    polyline: {
                                        points: "g|jlErsfnUPNHH",
                                    },
                                    start_location: {
                                        lat: 33.6481987,
                                        lng: -117.8401031,
                                    },
                                    travel_mode: "WALKING",
                                },
                                {
                                    distance: {
                                        text: "180 ft",
                                        value: 55,
                                    },
                                    duration: {
                                        text: "1 min",
                                        value: 43,
                                    },
                                    end_location: {
                                        lat: 33.6477705,
                                        lng: -117.8397378,
                                    },
                                    html_instructions: "Turn \u003cb\u003eleft\u003c/b\u003e toward \u003cb\u003eRing Rd\u003c/b\u003e",
                                    maneuver: "turn-left",
                                    polyline: {
                                        points: "k{jlEltfnUR]\\u@DK@A",
                                    },
                                    start_location: {
                                        lat: 33.64806,
                                        lng: -117.8402267,
                                    },
                                    travel_mode: "WALKING",
                                },
                                {
                                    distance: {
                                        text: "138 ft",
                                        value: 42,
                                    },
                                    duration: {
                                        text: "1 min",
                                        value: 33,
                                    },
                                    end_location: {
                                        lat: 33.6474607,
                                        lng: -117.8399656,
                                    },
                                    html_instructions: "Turn \u003cb\u003eright\u003c/b\u003e toward \u003cb\u003eRing Rd\u003c/b\u003e",
                                    maneuver: "turn-right",
                                    polyline: {
                                        points: "qyjlEjqfnU@?@?B@HDNJZX",
                                    },
                                    start_location: {
                                        lat: 33.6477705,
                                        lng: -117.8397378,
                                    },
                                    travel_mode: "WALKING",
                                },
                                {
                                    distance: {
                                        text: "62 ft",
                                        value: 19,
                                    },
                                    duration: {
                                        text: "1 min",
                                        value: 20,
                                    },
                                    end_location: {
                                        lat: 33.6473173,
                                        lng: -117.8398946,
                                    },
                                    html_instructions: "Turn \u003cb\u003eleft\u003c/b\u003e toward \u003cb\u003eRing Rd\u003c/b\u003e",
                                    maneuver: "turn-left",
                                    polyline: {
                                        points: "swjlExrfnUJBFGFK",
                                    },
                                    start_location: {
                                        lat: 33.6474607,
                                        lng: -117.8399656,
                                    },
                                    travel_mode: "WALKING",
                                },
                                {
                                    distance: {
                                        text: "62 ft",
                                        value: 19,
                                    },
                                    duration: {
                                        text: "1 min",
                                        value: 18,
                                    },
                                    end_location: {
                                        lat: 33.647205,
                                        lng: -117.8400535,
                                    },
                                    html_instructions: "Turn \u003cb\u003eright\u003c/b\u003e toward \u003cb\u003eRing Rd\u003c/b\u003e",
                                    maneuver: "turn-right",
                                    polyline: {
                                        points: "wvjlEhrfnULNBDDH",
                                    },
                                    start_location: {
                                        lat: 33.6473173,
                                        lng: -117.8398946,
                                    },
                                    travel_mode: "WALKING",
                                },
                                {
                                    distance: {
                                        text: "0.3 mi",
                                        value: 445,
                                    },
                                    duration: {
                                        text: "6 mins",
                                        value: 373,
                                    },
                                    end_location: {
                                        lat: 33.6439323,
                                        lng: -117.8413103,
                                    },
                                    html_instructions: 'Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eRing Rd\u003c/b\u003e\u003cdiv style="font-size:0.9em"\u003eTake the stairs\u003c/div\u003e',
                                    maneuver: "turn-left",
                                    polyline: {
                                        points: "_vjlEhsfnULKf@]NK`@QTMPE`@Kj@A`@?H?|@Lh@LVJFJHDVNHDJHZVNV`@d@Z\\RVLHJPRf@@H?FBJFNHL",
                                    },
                                    start_location: {
                                        lat: 33.647205,
                                        lng: -117.8400535,
                                    },
                                    travel_mode: "WALKING",
                                },
                                {
                                    distance: {
                                        text: "187 ft",
                                        value: 57,
                                    },
                                    duration: {
                                        text: "1 min",
                                        value: 42,
                                    },
                                    end_location: {
                                        lat: 33.6436492,
                                        lng: -117.8417919,
                                    },
                                    html_instructions: "Slight \u003cb\u003eleft\u003c/b\u003e to stay on \u003cb\u003eRing Rd\u003c/b\u003e",
                                    maneuver: "turn-slight-left",
                                    polyline: {
                                        points: "qajlEd{fnUJBFHb@pA",
                                    },
                                    start_location: {
                                        lat: 33.6439323,
                                        lng: -117.8413103,
                                    },
                                    travel_mode: "WALKING",
                                },
                                {
                                    distance: {
                                        text: "82 ft",
                                        value: 25,
                                    },
                                    duration: {
                                        text: "1 min",
                                        value: 21,
                                    },
                                    end_location: {
                                        lat: 33.6434348,
                                        lng: -117.8417552,
                                    },
                                    html_instructions: "Turn \u003cb\u003eleft\u003c/b\u003e",
                                    maneuver: "turn-left",
                                    polyline: {
                                        points: "y_jlEd~fnUB?FBF?FAFAFE",
                                    },
                                    start_location: {
                                        lat: 33.6436492,
                                        lng: -117.8417919,
                                    },
                                    travel_mode: "WALKING",
                                },
                                {
                                    distance: {
                                        text: "56 ft",
                                        value: 17,
                                    },
                                    duration: {
                                        text: "1 min",
                                        value: 12,
                                    },
                                    end_location: {
                                        lat: 33.6433197,
                                        lng: -117.8418821,
                                    },
                                    html_instructions: "Turn \u003cb\u003eright\u003c/b\u003e",
                                    maneuver: "turn-right",
                                    polyline: {
                                        points: "m~ilE~}fnUTV",
                                    },
                                    start_location: {
                                        lat: 33.6434348,
                                        lng: -117.8417552,
                                    },
                                    travel_mode: "WALKING",
                                },
                            ],
                            travel_mode: "WALKING",
                        },
                    ],
                    traffic_speed_entry: [],
                    via_waypoint: [],
                },
            ],
            overview_polyline: {
                points: "a|olEl}}mUv@wAVIh@LBB`@f@T`A?T?FL@fADCrAOjDIjAYnCS~Aq@tDc@bBRNJHENo@rB{AtDw@dBeBxCcAxAgAtA}BrCyArBa@r@q@zAkD~HiBfDeB|B{@dAyBvBkArAw@~@y@lA{@vArApAGHJOHHzAxAfC`C~F|F|GdHlAhA|A`BhEdEdCbC~ExErHnHnBhBdF|EjClCfFpFrBvBjAtArBlBjAbAfBfA`Bv@dBf@v@RzAT~@HpADdBBxA@zKLnHLJCjBBtADrBFl@?|AM`Cg@jBi@t@[zCyAfFkCxH}DtDkB`@bDpBjO|AjLrAzKbBbMHx@Dd@BdAA|CEnAOxAO~@o@pCk@`BgAtBwAjCEENWDIECOEGC@LJ@NNRNPPx@p@d@Qf@d@JHDKR]PNHHR]b@aADAx@l@JBFGFKLNHNt@i@xAq@`@Kj@Aj@?fBZVJFJ`@TTNZVNV|@bA`@`@^x@@PJZHLJBj@zAZ@NGTV",
            },
            summary: "",
            warnings: [
                "Walking directions are in beta. Use caution – This route may be missing sidewalks or pedestrian paths.",
            ],
            waypoint_order: [],
        },
    ],
    status: "OK",
};
exports.resp = resp;
const baseURL = "https://maps.googleapis.com/maps/api/directions/json?key=AIzaSyDFS42jSQ0cUhB_eVCUy1nCTlmegGq14Hw&";
exports.baseURL = baseURL;
