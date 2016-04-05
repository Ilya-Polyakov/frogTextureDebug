var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setClearColor(0x005001, 1);
document.body.appendChild( renderer.domElement );

$(window).on('resize', function(){
	camera.aspect = window.innerWidth / window.innerHeight;
	 camera.updateProjectionMatrix();

	 renderer.setSize( window.innerWidth, window.innerHeight );
 });


// instantiate a loader
var loader = new THREE.JSONLoader();
var frog;
// load a resource
loader.load(
	// resource URL
	'../models/frogTexture.json',
	// Function when resource is loaded
	function ( geometry, materials ) {
		var material = new THREE.MultiMaterial( materials );
		var otherMaterial =  new THREE.MeshPhongMaterial( { color: 0xddd000, specular: 0xEE0000, shininess: 3, reflectivity: 10} );
		frog = new THREE.Mesh( geometry, material );
		frog.rotation.y = 3;
		frog.scale.set( .25, .25, .25 );
		scene.add( frog );
	}
);

var light = new THREE.DirectionalLight('white',1);
light.position.set(20,20,20).normalize();
scene.add(light);

camera.position.z = 5;

function render() {
	requestAnimationFrame( render );
  //
	if (frog) {
		frog.rotation.x += 0.009;
		frog.rotation.y += 0.009;
		frog.rotation.z += 0.009;
	}

	renderer.render( scene, camera );
}
render();
