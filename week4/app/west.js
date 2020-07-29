const westPlaceholder = Ext.create('Ext.panel.Header');

Ext.define('west', {    
    extend: 'Ext.panel.Panel',
    region: 'west',
    header: {
        title: 'West'
    },
    // tools:  [{
    //     type: 'prev',
    //     callback: function() {
    //         // animation
    //     }
    // }],
    collapsed: false,
    collapsible: true,
    collapseMode: 'header',
    collapseDirection: 'left',
    placeholder: {
        xtype: 'header',
        layout: {
            type: 'hbox',
            pack: 'end',
            align: 'start'
        },
        // xtype: 'header',
        width: 50,        
        height: 50,
        resizable: false,
        split: false,
    },


    layout: {
        type: 'accordion',
        titleCollapse: true,
        animate: true
    },    
    width: 200,
    items: [{
        title: 'Navigation',
        html: "Hi. I'm the west panel."
    },{
        title: 'Settings',
        html: "Some settings in here."
    },{
        title: 'Information',
        html: "Some info in here."
    }],    
});