module.exports = function(grunt){

    grunt.initConfig({
        pkg: grunt.file.readJSON('Package.json'),
        clean: ["platforms/android/assets/www/scss","platforms/android/assets/www/res"],
        copy: {
			main: {
				files: [
				  // includes files within path
				  {src: 'www/res/icon/android/icon-36-ldpi.png', dest: 'platforms/android/res/drawable-ldpi/icon.png'},
				  {src: 'www/res/icon/android/icon-48-mdpi.png', dest: 'platforms/android/res/drawable-mdpi/icon.png'},
				  {src: 'www/res/icon/android/icon-48-mdpi.png', dest: 'platforms/android/res/drawable/icon.png'},
				  {src: 'www/res/icon/android/icon-72-hdpi.png', dest: 'platforms/android/res/drawable-hdpi/icon.png'},
				  {src: 'www/res/icon/android/icon-96-xhdpi.png', dest: 'platforms/android/res/drawable-xhdpi/icon.png'},
				  {src: 'www/res/icon/android/icon-144-xxhdpi.png', dest: 'platforms/android/res/drawable-xxhdpi/icon.png'}
				]
			}
		},
		sass: {
		    dist: {
		    	files: {
		        	'platforms/android/assets/www/css/app.css' : 'www/scss/app.scss'
		    	}
			}
		},
		shell: {
	        makeDir: {
	            command: 'cordova build android'
	        }
	    }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-shell');
    grunt.registerTask('default', ['sass','shell','clean','copy']);

};