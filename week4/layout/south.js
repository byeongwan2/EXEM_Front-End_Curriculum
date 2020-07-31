Ext.define('south', {
    extend: 'Ext.panel.Panel',
    region:'south',
    title: 'South',    
    height: 200,
    collapsed: true,
    collapsible: true,    
    collapseDirection: 'bottom',    
    split: true,
    html: 'south - generally for informational stuff, also could be for status bar'
});