const {
    img, audio, video, embed, iframe,
    // todo: map, area, object, param, picture, source, track,
} = htmlmodule

const { a, article, body, h1, section, script, style } = htmlmodule

const root = article([
    h1([a({ href : '#', children : 'Index' }), ' → Embedded content']),
    section([
        h1('Image'),
        img({
            alt : 'HTML specification',
            src : '//html.spec.whatwg.org/images/abstract.jpeg',
            width : 300
        })
    ]),
    section([
        h1('Audio player'),
        audio({
            controls : true,
            src : '//aristov.github.io/media-samples/sample.wav'
        })
    ]),
    section([
        h1('Video player'),
        video({
            controls : true,
            src : '//aristov.github.io/media-samples/sample.mov'
        })
    ]),
    section([
        h1('Plugin'),
        embed({
            src : '//aristov.github.io/media-samples/sample.swf',
        })
    ]),
    section([
        h1('Nested browsing context'),
        iframe({
            src : 'spec.html?grep=iframe',
            width : 500,
            height : 400
        })
    ]),
    script({ src : 'data/metadata.js' }),
    style('section:not(:last-of-type) {' +
        'display: inline-block;' +
        'margin-right: 50px;' +
        'margin-bottom: 10px;' +
        'vertical-align: top; }')
])

document.body = body(root).node
