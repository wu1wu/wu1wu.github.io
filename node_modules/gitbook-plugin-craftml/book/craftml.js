function printVersions(){
    var string = 'Craftml (Engine: ' + Craftml.Engine.version +
        ', IDE: ' + Craftml.IDE.version +
        ', Preview: ' + Craftml.Preview.version +
        ')'
    console.debug(string)
}

// printVersions()

env = {}

require(["gitbook", "jquery"], function(gitbook, $) {


  var init = function(){

        // Craftml.IDE.closeAll()
        //
        // hljs.initHighlightingOnLoad()
        //
        // $('.craftml').each(function(){
        //     var options = {
        //         //autoResize: 'container',
        //         mode: 'doc',
        //         height: 298,
        //         theme: {
        //             editor: {
        //                 width: 400
        //             },
        //             preview: {
        //                 width: '60%'
        //             },
        //             navbar: {
        //                 hidden: true
        //             },
        //             toolbar: {
        //                 mode: 'compact'
        //             }
        //         }
        //     }
        //     options.api = Craftml.Engine.hosts.api
        //     // options.engine = engine
        //     Craftml.IDE.edit(this, options)
        })

        // $('pre code.lang-html').each(function(i, block) {
        //   hljs.highlightBlock(block);
        // })
  }

	gitbook.events.bind("page.change", init);
});
