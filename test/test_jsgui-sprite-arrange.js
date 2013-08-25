if (typeof define !== 'function') {
    var define = require('amdefine')(module);
}

define(['jsgui-lang-essentials', 'fs', '../jsgui-sprite-arrange'], 
    function(jsgui, fs, sprite_arrange) {
        var stringify = jsgui.stringify;
        var source_images = ['./png/axe.png', './png/bike.png', './png/dice.png', './png/knife.png', './png/pliers.png'];
        
        sprite_arrange.from_files(source_images, function(err, arrangement) {
            console.log('arrangement ' + stringify(arrangement));
        });
        
    }
);
