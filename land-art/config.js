var config
config = {
    style: 'mapbox://styles/jaycox/ck30bi8cw0azt1coz9bs1rutf',
    accessToken: 'pk.eyJ1IjoiamF5Y294IiwiYSI6ImNqNTMwcDhwcTAxdGMyem00cmpzcjAzZXIifQ.QFecF9z3uNMvVSUFGky9iQ',
    showMarkers: false,
    theme: 'dark',
    alignment: 'left',
    // title: 'Land Art in the West',
    // subtitle: 'The Dia Art Foundation',
    // byline: 'by Jay Cox-Chapman',
    // footer: 'Source: source citations, etc.',
    chapters: [
        {
            id: 'land-art-overview',
            title: 'Land Art',
            description: 'Land Art was an artistic movement that emerged in the US in the 1960s and 70s that sought to bring art outside of the gallery. Artists made huge, permanent sculptures that sought to be as monumental as the landscapes around them.',
            image: '',
            location: {
                center: [-113.679, 38.11],
                zoom: 5.92,
                pitch: 51,
                bearing: 0
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'spiral-jetty',
            title: 'Spiral Jetty',
            image: '',
            description: 'Robert Smithson commissioned a local bulldozer operator to build a 1500-foot-long spiral on the salt flats of the Great Salt Lake in 1969. The sculpture is occasionally covered by the waters of the lake.',
            location: {
                center: [-112.670092, 41.437774],
                zoom: 16.94,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'sun-tunnels',
            title: 'Sun Tunnels',
            image: '',
            description: 'Nancy Holt, Robert Smithson\'s wife, built the Sun Tunnels in 1973. 15 miles from the nearest paved road, the concrete tubes are arranged in an X and are aligned with the setting sun on the solstice.',
            location: {
                center: [-113.86537, 41.303756],
                zoom: 17.35,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'City',
            title: 'City',
            image: '',
            description: 'Michael Heizer has been at work on a huge earthwork complex in Nevada since 1973. \'City\' emerges from the desert like the ruin of a forgotten civilization\; Heizer\'s homestead is the only clue that this is a modern site.',
            location: {
                center: [-115.44656, 38.03364],
                zoom: 14.77,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
