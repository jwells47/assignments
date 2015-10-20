/* I am having trouble with this while

//path file; smartcrop.js; forked in my github.
```(function(){
"use strict";

function SmartCrop(options){
   this.options = extend({}, SmartCrop.DEFAULTS, options);
}
SmartCrop.DEFAULTS = {
    width: 0,
    height: 0,
    aspect: 0,
    cropWidth: 0,
    cropHeight: 0,
    detailWeight: 0.2,
    skinColor: [0.78, 0.57, 0.44],
    skinBias: 0.01,
    skinBrightnessMin: 0.2,
    skinBrightnessMax: 1.0,
    skinThreshold: 0.8,
    skinWeight: 1.8,
    saturationBrightnessMin: 0.05,
    saturationBrightnessMax: 0.9,
    saturationThreshold: 0.4,
    saturationBias: 0.2,
    saturationWeight: 0.3,
    // step * minscale rounded down to the next power of two should be good
    scoreDownSample: 8,
    step: 8,
    scaleStep: 0.1,
    minScale: 0.9,
    maxScale: 1.0,
    edgeRadius: 0.4,
    edgeWeight: -20.0,
    outsideImportance: -0.5,
    ruleOfThirds: true,
    prescale: true,
    canvasFactory: null,
    debug: false```
    //This is a list that sets up several branches
    
    //1st branch and decision statement
    //path file; smartcrop.js
   ``` SmartCrop.crop = function(image, options, callback){
    if(options.aspect){
        options.width = options.aspect;
        options.height = 1;```
    }
    
    
    
    //2nd branch statement
    //path file; smartcrop.js;
    ```if(image.naturalWidth && (image.naturalWidth != image.width || image.naturalHeight != image.height)){
        var c = new SmartCrop(options).canvas(image.naturalWidth, image.naturalHeight),
            cctx = c.getContext('2d');
        c.width = image.naturalWidth;
        c.height = image.naturalHeight;
        cctx.drawImage(image, 0, 0);
        image = c;
    }```
    
    
    //3rd branch statement w/list and an if (decision) statement
    //path file; smartcrop.js; line 80
   ``` var scale = 1,
        prescale = 1;
    if(options.width && options.height) {
        scale = min(image.width/options.width, image.height/options.height);
        options.cropWidth = ~~(options.width * scale);
        options.cropHeight = ~~(options.height * scale);
        // img = 100x100, width = 95x95, scale = 100/95, 1/scale > min
        // don't set minscale smaller than 1/scale
        // -> don't pick crops that need upscaling
        options.minScale = min(options.maxScale || SmartCrop.DEFAULTS.maxScale, max(1/scale, (options.minScale||SmartCrop.DEFAULTS.minScale)));
    }```
    
    
    //4th branch statement w/nested if (decision) statement.
    //path file; smartcrop.js; line 91
   ``` var smartCrop = new SmartCrop(options);
    if(options.width && options.height) {
        if(options.prescale !== false){
            prescale = 1/scale/options.minScale;
            if(prescale < 1) {
                var prescaledCanvas = smartCrop.canvas(image.width*prescale, image.height*prescale),
                    ctx = prescaledCanvas.getContext('2d');
                ctx.drawImage(image, 0, 0, image.width, image.height, 0, 0, prescaledCanvas.width, prescaledCanvas.height);
                image = prescaledCanvas;
                smartCrop.options.cropWidth = ~~(options.cropWidth*prescale);
                smartCrop.options.cropHeight = ~~(options.cropHeight*prescale);
            }
            else {
                prescale = 1;```
                
                
    //5th branch statement; for loop(decision);
    //path file; smartcrop.js; line 108
     ```var result = smartCrop.analyse(image);
    for(var i = 0, i_len = result.crops.length; i < i_len; i++) {
        var crop = result.crops[i];
        crop.x = ~~(crop.x/prescale);
        crop.y = ~~(crop.y/prescale);
        crop.width = ~~(crop.width/prescale);
        crop.height = ~~(crop.height/prescale);
    }
    callback(result);
    return result;```
};


    //6th branch statement;
    //path file smartcrop.js; line 120
    ```SmartCrop.isAvailable = function(options){
    try {
        var s = new this(options),
            c = s.canvas(16, 16);
        return typeof c.getContext === 'function';
    }
    catch(e){
        return false;
    }```
    
    
    //7th branch statement; w/if (decision) statement
    //path file; smartcrop.js;
    ```SmartCrop.prototype = {
    canvas: function(w, h){
        if(this.options.canvasFactory !== null){
            return this.options.canvasFactory(w, h);
        }
        var c = document.createElement('canvas');
        c.width = w;```
        
        
    //8th branch statement; list w/ for loop, if & else statement;
    //path file; smartcrop.js; line 142
    ```edgeDetect: function(i, o){
        var id = i.data,
            od = o.data,
            w = i.width,
            h = i.height;
        for(var y = 0; y < h; y++) {
            for(var x = 0; x < w; x++) {
                var p = (y*w+x)*4,
                    lightness;
                if(x === 0 || x >= w-1 || y === 0 || y >= h-1){
                    lightness = sample(id, p);
                }
                else {
                    lightness = sample(id, p)*4 - sample(id, p-w*4) - sample(id, p-4) - sample(id, p+4) - sample(id, p+w*4);
                }
                od[p+1] = lightness;```
                
                
    
        c.height = h;
        return c;
    },```