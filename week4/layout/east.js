document.querySelector
Ext.define('east', {
    extend: 'Ext.panel.Panel',
    region: 'east',
    title: 'East',    
    width: 250,
    margin: '0 5 0 0',
    split: true,    
    collapsible: true,
    collapseMode: 'header',
    collapseDirection: 'right',    
    layout: 'fit',    
    tbar: [
        '->',
        {
            xtype: 'button',                    
            text: 'test',                        
            tooltip: {
                text: 'Test Button',
                width: 70
            }
        }   
    ],
    items: [
        {
            xtype: 'tabpanel',
            tabPosition: 'bottom',            
            activeTab: 1,
            items: [
                {
                    title: 'A Tab',
                    html: 'A TabPanel component can be a region.'
                },
                {
                    title: 'Property Grid',
                    closable: true,                    
                    items: {
                        xtype: 'propertygrid',
                        forceFit: true,
                        source: {
                            '(name)': 'Properties Grid',
                            'grouping': 'false',
                            'productionQuality': 'false',
                            'tested': 'false',
                            'version': '0.01',
                            'autoFitColumns': 'true',
                            'borderWidth': '1',                            
                            'created': Ext.Date.parse('10/15/2006', 'm/d/Y')                            
                        }
                    }
                }]
        }
    ]
});