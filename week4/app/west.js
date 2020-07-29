Ext.define('west', {    
    extend: 'Ext.panel.Panel',
    width: 200,
    region: 'west',
    collapsed: false,
    collapsible: true,
    collapseMode: 'header',
    collapseDirection: 'left',    
    layout: {
        type: 'accordion',
        titleCollapse: true,
        animate: true
    },        
    header: {
        title: 'West'
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