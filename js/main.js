(function ($) {
    "use strict";

    var viewData;

    viewData = {
        "units-quantity": {
            header: {
                descr: "Liczebność wojsk"
            },
            rows: [
                {descr: "1-4", pl: "mało", en: "few"},
                {descr: "5-9", pl: "paru", en: "several"},
                {descr: "10-19", pl: "grupa", en: "pack"},
                {descr: "20-49", pl: "mnóstwo", en: "lots"},
                {descr: "50-99", pl: "horda", en: "horde"},
                {descr: "100-249", pl: "wataha", en: "throng"},
                {descr: "250-499", pl: "mrowie", en: "swarm"},
                {descr: "500-999", pl: "setki", en: "zounds"},
                {descr: "1000+", pl: "legion", en: "legion"}
            ]
        }
    }

    $(document).ready (function() {
        $(".tpl-placeholder").each(function () {
            var $this, tpl, rawContent;

            $this = $(this);
            tpl = $this.data("tpl");

            rawContent = Mustache.render($("#tpl-" + tpl).html(), viewData[tpl]);
            $this.replaceWith($.parseHTML(rawContent));
        });
    });
}(jQuery));
