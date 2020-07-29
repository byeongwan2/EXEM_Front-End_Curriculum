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

