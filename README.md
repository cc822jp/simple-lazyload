# simple-lazyload
simple-lazyload is a image lazy loading javascript library at immediate execution

## Using : Just Load Srcipt!

````
<script src="simple-lazyload.min.js"></script>
````

### 1. Set image src.

````
<img data-lazy-src="assets/images/01.jpg">
````

#### after load event

````
<img src="assets/images/01.jpg">
````

### 2. Set background-image url.

````
<div data-lazy-bg="assets/images/01.jpg"></div>
````

#### after load event

````
<div style="background-image: url(assets/images/01.jpg);"></div>
````

## Example

[Example](http://cc822jp.github.io/simple-lazyload)

## Support

 * IE8+
 * Chrome Current
 * Firefox Current
 * Safari 5.1+
 * iOS 6.1+
 * Android 2.3, 4.0+

## License

MIT
