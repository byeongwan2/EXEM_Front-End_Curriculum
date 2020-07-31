document.getelementby
Ext.define('west', {
    extend: 'Ext.panel.Panel',
    region: 'west',
    title: 'West',
    id: 'west',
    width: 250,
    margin: '0 0 0 5',
    split: true,
    collapsible: true,
    collapseDirection: 'left',
    layout: 'accordion',
    items: [
        {
            title: 'Navigation',
            iconCls: 'nav-img',
            html: "Hi. I'm the west panel."
        },
        {
            title: 'Settings',
            iconCls: 'set-img',
            html: "Some settings in here."
        },
        {
            title: 'Information',
            iconCls: 'inf-img',
            html: "Some info in here."
        }]
});