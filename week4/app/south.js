Ext.define('south', {
    extend: 'Ext.panel.Panel',
    height: 200,
    region:'south',
    collapsed: true,
    collapsible: true,
    collapseMode: 'header',
    collapseDirection: 'bottom',
    header: {
        title: 'South'
    },
    html: 'south - generally for informational stuff, also could be for status bar'
});