Ext.application({
    name: 'week4',
    requires: [
        'north',
        'west',
        'center',
        'east',
        'south'
    ],
    launch:
        function () {                
            Ext.Ajax.request({
                url: 'https://docs.sencha.com/extjs/4.2.2/extjs-build/examples/layout/complex.html',
                params: {
                    id:1
                },
                success: function(response) {
                    let text = response.responseText;
                    console.log(text);
                }
            })        
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