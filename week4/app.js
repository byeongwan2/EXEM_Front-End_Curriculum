Ext.define('Test.Panel', {
    extend: 'Ext.panel.Panel',
    width: 400,
    height: 400,
    html: 'HELLO',
    header: {
        title: 'Title'
    },
    style: {
        "border-color": "blue",
        "border-width": "2px",
        "border-style": "solid"
    },
    collapsed: false,
    collapsible: false,
    // collapseMode:'placeholder',
    collapseMode: 'header',
    collapseDirection: "left",

    placeholder: {
        xtype: 'header',
        layout: {
            type: 'hbox',
            pack: 'end',
            align: 'start'
        },
        width: 50,
        height: 50,
        xtype: 'header',
        border: 1,
        resizable: false,
        draggable: false,
        split: false,
        bodyStyle: {
            "background-color": '#fcfdfd'
        },
        // items: [{
        //     xtype: 'button',
        //     width: 20,
        //     height: 20
        // }]
    }
});

Ext.application({
    name: 'week4',
    launch:
        function () {
            const north = Ext.create('north');
            const west = Ext.create('west');
            const center = Ext.create('center');
            const east = Ext.create('east');
            const south = Ext.create('south');
            const container = Ext.create('Ext.container.Viewport', {
                layout: 'border',
                items: [north, west,center,east,south],
            });                                          
            // var testPanel = Ext.create('Test.Panel',{
            //     renderTo: Ext.getBody()
            // });
        }
})

