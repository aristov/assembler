const {
    body, img, audio, video, embed, iframe,
    // todo: map, area, object, param, picture, source, track,
} = htmlmodule

const { a, article, h1, section, script, style } = htmlmodule

const root = article([
    h1([
        a({ href : '#', children : 'Index' }),
        ' → Embedded content'
    ]),
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
            src : 'dist/docs/spec.html?grep=' +
                'HTMLDOM%20library%20Single%20elements%20iframe',
            width : '80%',
            height : 400
        })
    ]),
    script({ src : 'docs/data/metadata.js' }),
    style('section:not(:last-of-type) {' +
        'display: inline-block;' +
        'margin-right: 50px;' +
        'margin-bottom: 10px;' +
        'vertical-align: top; }')
])

document.body.replaceWith(body(root))
