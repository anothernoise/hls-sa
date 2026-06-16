require([
    'gitbook',
    'jquery'
], function (gitbook, $) {
    // htmlLabels:false forces SVG <text>/<tspan> rendering instead of HTML
    // foreignObject. The bundled Mermaid mis-measures foreignObject height for
    // multi-line (<br/>) node labels, clipping the lower lines. SVG text mode
    // sizes multi-line labels from the real bounding box, so nothing is cut off.
    //
    // initialize() must run BEFORE any render(). page.change can fire before
    // document.ready, so we (re-)apply the config inside the render handler
    // rather than only on document.ready — otherwise the first render uses the
    // default htmlLabels:true and clips. initialize() is idempotent and cheap.
    const config = {
        startOnLoad: false,
        flowchart: { htmlLabels: false, useMaxWidth: true },
        sequence: { useMaxWidth: true }
    };
    if (typeof mermaid !== 'undefined') { mermaid.initialize(config); }
    gitbook.events.bind('page.change', function () {
        mermaid.initialize(config);
        $(".mermaid").each(function (i, e) {
            const div = $(e);
            if (div.find('svg').length > 0) return;
            const html = div.html();
            const def = html.replace(/&gt;/g, '>').replace(/&lt;/g, '<')
            div.html(render(def));
        });
    })

    const render = function (def) {
        const id = 'mermaid_' + randomString(20);
        const element = document.createElement('dev');
        element.id = id
        element.hidden = true
        return mermaid.mermaidAPI.render(id, def);
    }

    const randomString = function (length) {
        var str = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var result = '';
        for (var i = length; i > 0; --i)
            result += str[Math.floor(Math.random() * str.length)];
        return result;
    }
});
