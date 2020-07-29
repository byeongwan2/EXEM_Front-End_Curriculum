const westPlaceholder = Ext.create('Ext.panel.Header');

Ext.define('west', {    
    extend: 'Ext.panel.Panel',
    width: 200,
    region: 'west',
    header: {
        title: 'West',
    },
    collapsed: false,
    collapsible: true,
    collapseMode: 'header',
    collapseDirection: 'left',    
    layout: {
        type: 'accordion',
        titleCollapse: true,
        animate: true
    },        
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