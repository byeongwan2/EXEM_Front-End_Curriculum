Ext.application({
    name: 'week4',
    launch:
        () => {
            Ext.create('Ext.container.Viewport', {
                layout: 'border',
                items: [
                    Ext.create('north'),
                    Ext.create('west'), 
                    Ext.create('center'), 
                    Ext.create('east'),
                    Ext.create('south'),                                        
                ]
            });
        }
})